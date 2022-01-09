import {Card} from "react-bootstrap";
import {useFilterContext} from "../../../Context/InputValueContext";

function FilterInfo() {
    const {order, search, selectedOption} = useFilterContext();

    return (
        <Card className="bg-secondary p-2 bg-opacity-10 rounded text-white">
            <Card.Body>
                <h1>Search terms</h1>
                <ul className="list-group">
                    <li className="list-group-item bg-secondary text-white">Search - {search ? search : <span className="text-info">No search applied</span>}</li>
                    <li className="list-group-item bg-secondary text-white">Selected Option - <b>{selectedOption}</b></li>
                    <li className="list-group-item bg-secondary text-white">Order - <b>{order}</b></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default FilterInfo;