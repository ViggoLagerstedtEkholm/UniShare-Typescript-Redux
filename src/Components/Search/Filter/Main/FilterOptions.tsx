import {Card, Form, Row} from "react-bootstrap";

function FilterOptions() {
    return (
        <Card className="bg-secondary bg-opacity-10 rounded">
            <Card.Body>
                <Row>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label>Filter Settings</Form.Label>
                        <Form.Select
                            size="lg"
                            value={"abc"}
                            onChange={e => {
                            }}>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mt-2">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Search"
                                      value={"search"}
                                      onChange={(e) => {

                                      }}/>
                    </Form.Group>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FilterOptions;