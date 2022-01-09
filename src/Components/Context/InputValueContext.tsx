import React, {useState} from "react";
import {Pagination} from "../Discover/Courses/CoursesSearch";

export enum Order {
    Ascending = "Ascending",
    Descending = "Descending"
}

export type OptionsMap = Record<string, string>;

export interface Filter<Payload>{
    page: number;
    search: string;
    order: Order;
    options: OptionsMap;
    showFilter: boolean;
    selectedOption: string;
    APIEndpoint: string;
    result: (result : Payload | null, search: string) => void;
    activeDegreeUserId?: string;
}

const incrementPage = (page: number): number => page + 1;
const decrementPage = (page: number): number => page - 1;

// Custom hook implementation
const useFilter = (initialState: Filter<any>) => {
    const [page, setPage] = useState(initialState.page);
    const [search, setSearch] = useState(initialState.search);
    const [selectedOption, setSelectedOption] = useState(initialState.selectedOption);
    const [resultCount, setResultCount] = useState(0);
    const [order, setOrder] = useState(initialState.order);
    const [pagination, setPagination] = useState<Pagination |null>(null);

    return {
        setResult: initialState.result,
        api: initialState.APIEndpoint,
        activeDegreeUserId: initialState.activeDegreeUserId,
        options: initialState.options,
        page,
        selectedOption,
        search,
        order,
        resultCount,
        pagination,
        incrementPage: () => setPage((page) => incrementPage(page)),
        decrementPage: () => setPage((page) => decrementPage(page)),
        goToPage: (newPage: number) => pagination?.totalPages && newPage > pagination?.totalPages ? setPage(1) : setPage(newPage),
        applySearch: (text: string) => setSearch(text),
        applyOrder: (order: Order) => setOrder(order),
        applySelectedOption: (selected: string) => setSelectedOption(selected),
        applyResultCount: (count: number) => setResultCount(count),
        setPagination: (pagination: Pagination) => setPagination(pagination)
    }
};

const TodoContext = React.createContext<ReturnType<typeof useFilter> | null>(
    null
);

export const useFilterContext = () => React.useContext(TodoContext)!;

export function FilterProvider({ startFilter, children }: { startFilter: Filter<any>, children: React.ReactNode }) {
    return (
        <TodoContext.Provider value={useFilter(startFilter)}>
            {children}
        </TodoContext.Provider>
    );
}