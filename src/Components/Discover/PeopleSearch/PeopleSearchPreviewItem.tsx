import {User} from "./PeopleSearch";
import {useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Highlight} from "../../Shared/Highlight";

// @ts-ignore
import ProfileDefault from '../../../Images/ProfileDefault.png';

interface Props {
    user: User;
    search: string;
}

function PeopleSearchPreviewItem(props: Props) {
    const user = props.user;
    const search = props.search;
    const navigation = useNavigate();

    return (
        <Card className="bg-secondary bg-opacity-10 mx-2 my-2">
            <Card.Body>
                <Container>
                    <Row>
                        <Col className="text-center">
                            {
                                user.image ?
                                    <Image src={`data:image/jpeg;base64,${user.image}`} width={300} height={300}
                                           roundedCircle
                                           fluid/>
                                    : <Image src={ProfileDefault} width={300} height={300}
                                             roundedCircle
                                             fluid/>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-3">
                            <h4>{Highlight(user.username, search)}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Button onClick={() => navigation('/profile/' + user.username)} className="mx-2 my-2">
                            Go to user profile
                        </Button>
                    </Row>

                    <hr/>

                    <Row>
                        <Col>
                            <p><b>Firstname</b></p>
                            <p>{user.firstname}</p>
                        </Col>

                        <Col>
                            <p><b>Lastname</b></p>
                            <p>{user.lastname}</p>
                        </Col>

                        <Col>
                            <p><b>Visits</b></p>
                            <p>{user.visits}</p>
                        </Col>

                        <Col>
                            <p><b>Visits</b></p>
                            <p>Last seen{user.lastSeenDate}</p>
                        </Col>
                    </Row>

                </Container>
            </Card.Body>
        </Card>
    )
}

export default PeopleSearchPreviewItem;