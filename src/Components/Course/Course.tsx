import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import NotFound from "../Shared/NotFound";
import Loading from "../Shared/Loading";
import { useNavigate } from 'react-router-dom';

export interface RootObject {
    id: number;
    name: string;
    credits: number;
    added: Date;
    country: string;
    city: string;
    university: string;
    description: string;
    code: string;
    link: string;
    degrees?: any;
    ratings?: any;
    reviews?: any;
}

export interface Statistic {
    rating: number;
    count: number;
}

function Course() {
    const [course, setCourse] = useState<RootObject | null>(null);
    const [statistics, setStatistics] = useState<Statistic | null>(null);
    const [missing, setMissing] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<RootObject>("https://localhost:5001/api/Course/" + id)
            .then(response => setCourse(response.data))
            .catch(() => setMissing(true))
            .finally(() => setIsLoaded(true));

        axios.get<Statistic>("https://localhost:5001/api/Course/Statistics/" + id)
            .then(response => setStatistics(response.data));
    }, [])

    if (missing) {
        return <NotFound/>
    }

    if (!isLoaded) {
        return (
            <Container className="d-flex flex-row justify-content-center align-items-center h-100">
                <Loading/>
            </Container>
        )
    }

    return (
        <Container>
            <Button className="mb-4" onClick={() => navigate(-1)}>Go back</Button>
            <Row>
                <h1>{course?.name}</h1>
            </Row>

            <Row xs="auto" className="bg-secondary p-4 bg-opacity-10 rounded">
                <Col>
                    <b>Total votes - </b> {statistics?.count}
                </Col>
                <Col>
                    <b>Rating - </b> {statistics?.rating}
                </Col>
            </Row>

            <Row className="gap-2 my-5">
                    <p>{course?.description}</p>
                    <a href={course?.link}>{course?.link.slice(0, 100)}...</a>

                    <Card className="bg-secondary bg-opacity-10 text-center rounded">
                        <Card.Body>
                            <h4>Credits</h4> <Badge className="mb-3">{course?.credits}</Badge>
                            <h4>University</h4> <Badge className="mb-3">{course?.university}</Badge>
                            <h4>City</h4> <Badge className="mb-3">{course?.city}</Badge>
                            <h4>Country</h4> <Badge className="mb-3">{course?.country}</Badge>
                        </Card.Body>
                    </Card>
            </Row>
        </Container>
    )
}

export default Course;