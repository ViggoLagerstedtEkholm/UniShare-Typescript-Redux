import React, {useEffect} from "react";
import FilterConfigurationBox from "./FilterConfigurationBox";
import Pagination from "../Pagination/Pagination";
import TopPagination from "../Pagination/TopPagination";
import {Container} from "react-bootstrap";

function FilterBox() {

    useEffect(() => {
        //DO API CALL
    }, [])

    return (
        <Container className="bg-secondary bg-opacity-10 text-white pt-2">
            <FilterConfigurationBox open={true}/>
            <hr/>
            <TopPagination/>
            <h2>Results</h2>
            <Pagination/>
        </Container>
    )
}

export default FilterBox;
