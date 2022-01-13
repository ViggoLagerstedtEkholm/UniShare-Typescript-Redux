import React, {useState} from "react";
import {Pagination} from "../Discover/Courses/CoursesSearch";

export enum Order {
    Ascending = "Ascending",
    Descending = "Descending"
}

export type OptionsMap = Record<string, string>;

export interface Filter<Payload>{
    Page: number;
    Search: string;
    Order: Order;
    Options: OptionsMap;
    ShowFilter: boolean;
    SelectedOption: string;
    APIEndpoint: string;
    Result: (result : Payload | null, search: string) => void;
    ProfileId?: string;
}

const incrementPage = (page: number): number => page + 1;
const decrementPage = (page: number): number => page - 1;

// Custom hook implementation
const useFilter = (initialState: Filter<any>) => {
    const [page, setPage] = useState(initialState.Page);
    const [search, setSearch] = useState(initialState.Search);
    const [selectedOption, setSelectedOption] = useState(initialState.SelectedOption);
    const [resultCount, setResultCount] = useState(0);
    const [order, setOrder] = useState(initialState.Order);
    const [pagination, setPagination] = useState<Pagination |null>(null);

    return {
        setResult: initialState.Result,
        api: initialState.APIEndpoint,
        ProfileId: initialState.ProfileId,
        options: initialState.Options,
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