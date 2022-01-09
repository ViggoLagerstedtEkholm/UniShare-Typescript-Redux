import React from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useFilterContext} from "../../../Context/InputValueContext";

function PaginationBox() {
    const {page, incrementPage, decrementPage, goToPage, pagination} = useFilterContext();

    return (
        <Card className="p-2 bg-secondary bg-opacity-10 text-white">
            <h2 className="text-center">{page} / {pagination?.totalPages}</h2>

            <Row>
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

            <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text"
                                      placeholder="Go to page"
                                      value={page}
                                      onChange={e => {
                                          const number = parseInt(e.target.value);
                                          goToPage(number);
                                      }}/>
                    </Form.Group>

                    <Button type="submit" className="btn-primary w-100">
                        GO TO PAGE
                    </Button>
            </Form>
        </Card>
    );
}

export default PaginationBox;
