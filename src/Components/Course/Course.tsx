import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Badge, Card, Col, Container, Row} from "react-bootstrap";
import NotFound from "../Shared/NotFound";
import VoteModal from "./Vote";
import Loading from "../Shared/Loading";

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
            <Row>
                <h1>{course?.name}</h1>
            </Row>

            <Row className="gap-2">
                <Col xl={7} md={8} sm={6}>
                    <p>{course?.description}</p>
                    <a href={course?.link}>{course?.link.slice(0, 100)}...</a>
                </Col>

                <Col xl={3} md={2} sm={3}>
                    <Card className="bg-secondary bg-opacity-10 text-center rounded mb-2">
                        <Card.Body>
                            <h4>Total votes</h4> <Badge className="mb-3">{statistics?.count}</Badge>
                            <h4>Rating</h4> <Badge className="mb-3">{statistics?.rating}</Badge>
                            <hr/>
                            <VoteModal/>
                        </Card.Body>
                    </Card>
                    <Card className="bg-secondary bg-opacity-10 text-center rounded">
                        <Card.Body>
                            <h4>Credits</h4> <Badge className="mb-3">{course?.credits}</Badge>
                            <h4>University</h4> <Badge className="mb-3">{course?.university}</Badge>
                            <h4>City</h4> <Badge className="mb-3">{course?.city}</Badge>
                            <h4>Country</h4> <Badge className="mb-3">{course?.country}</Badge>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Course;