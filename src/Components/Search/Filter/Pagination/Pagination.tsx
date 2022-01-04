import React, {useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

function PaginationBox() {
    const [goToPageNumber, setGoToPageNumber] = useState(1);

    const page = 1;
    const pageCount = 10;

    return (
        <Card className="p-2 bg-secondary bg-opacity-10 text-white">
            <h2 className="text-center">{page} / {pageCount}</h2>

            <Row>
                <Col>
                    {page > 1 ?
                        <Button type="submit" className="w-100" onClick={() => null}>🡸</Button>
                    : null}
                </Col>
                <Col>
                    {page <= pageCount - 1 ?
                        <Button type="submit" className="w-100" onClick={() => null}>🡺</Button>
                    : null}
                </Col>
            </Row>

            <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text"
                                      placeholder="Go to page"
                                      value={goToPageNumber}
                                      onChange={e => {
                                          const number = parseInt(e.target.value);
                                          setGoToPageNumber(number);
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
