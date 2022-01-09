import {Card, Form, Row} from "react-bootstrap";
import {Order, useFilterContext} from "../../../Context/InputValueContext";

function FilterOptions() {
    const {options, applySelectedOption, selectedOption, search, order, applySearch, applyOrder} = useFilterContext();

    const values = Object.keys(options).map(function (key) {
        return <option value={key}>{options[key]}</option>
    });

    return (
        <Card className="bg-secondary p-2 bg-opacity-10 rounded">
            <Card.Body>
                <h1>Filter</h1>

                <Row>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label>Order by option</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedOption}
                            onChange={e => {
                                applySelectedOption(e.target.value);
                            }}>
                            {
                                values
                            }
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label>Order</Form.Label>
                        <Form.Control
                            as="select"
                            value={order}
                            onChange={e => {
                                applyOrder(e.target.value as Order);
                            }}>
                            <option value={Order.Ascending}>{Order.Ascending}</option>
                            <option value={Order.Descending}>{Order.Descending}</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mt-2">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Search"
                                      value={search}
                                      onChange={(e) => {
                                          applySearch(e.target.value);
                                      }}/>
                    </Form.Group>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FilterOptions;