import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import {useFilterContext} from "../../../Context/InputValueContext";

function TopPagination(){
    const {page, pagination, decrementPage, incrementPage} = useFilterContext();

    return (
        <Row>
            <h2 className="text-center text-white">{page} / {pagination?.totalPages}</h2>

            <Col>
                {page > 1 ?
                    <Button type="submit" className="w-100" onClick={decrementPage}>🡸</Button>
                    : null}
            </Col>
            <Col>
                {pagination && page <= pagination?.totalPages - 1 ?
                    <Button type="submit" className="w-100" onClick={incrementPage}>🡺</Button>
                    : null}
            </Col>
        </Row>
    )
}

export default TopPagination;