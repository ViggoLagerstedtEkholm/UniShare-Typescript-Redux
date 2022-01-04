import {Card} from "react-bootstrap";

function FilterInfo() {

    return (
        <Card className="bg-secondary p-4 bg-opacity-10 rounded text-white">
            <Card.Body>
                <h1>Search terms</h1>
                <ul className="list-group">
                    <li className="list-group-item bg-secondary text-white">Search - wwww</li>
                    <li className="list-group-item bg-secondary text-white">Selected Option - <b>{}</b></li>
                    <li className="list-group-item bg-secondary text-white">Average Rating - <b>{}</b></li>
                    <li className="list-group-item bg-secondary text-white">Vote Count - <b>{}</b></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default FilterInfo;