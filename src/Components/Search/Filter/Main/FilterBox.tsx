import React, {ReactNode, useEffect} from "react";
import FilterConfigurationBox from "./FilterConfigurationBox";
import Pagination from "../Pagination/Pagination";
import TopPagination from "../Pagination/TopPagination";
import {Stack} from "react-bootstrap";
import axios from "axios";
import {useFilterContext} from "../../../Shared/FilterProvider";
import ResultInfo from "./ResultInfo";

interface Props{
    children: ReactNode;
}

function FilterBox(props: Props) {
    const {selectedOption, search, page, order, api, setResult, ProfileId, pagination, applyResultCount, setPagination} = useFilterContext();

    useEffect(() => {
        const query = async () => {
            return await axios.post(api, {
                Page: page,
                Order: order,
                Search: search,
                Option: selectedOption,
                ...(ProfileId) && {ProfileId: ProfileId}
            });
        }

        query().then(response => {
            setResult(response.data, search);
            applyResultCount(response.data.totalMatches);
            setPagination(response.data.pagination);
        }).catch(error => console.log(error));
    }, [page, selectedOption, search, order])

    return (
        <Stack>
            <FilterConfigurationBox/>
            <ResultInfo/>
            <hr/>
            <TopPagination/>
            <p className="text-center bg-secondary bg-opacity-10 p-2 mt-2">
                Range: <b>{pagination && pagination?.pageFirstResultIndex + 1} - {pagination && pagination?.pageFirstResultIndex + 10}</b>
            </p>
            {props.children}
            <Pagination/>
        </Stack>
    )
}

export default FilterBox;
