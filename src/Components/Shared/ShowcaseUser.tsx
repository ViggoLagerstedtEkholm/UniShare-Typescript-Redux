import {Card, Col, Image, Row} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../../App";

function ShowcaseUser() {
    const {state} = useContext(AuthContext);

    return (
        <Row>
            <Card className="bg-secondary bg-opacity-25 p-4 rounded">
                <Card.Body>
                    <Row>
                        <Col xs={12} md={12} sm={12} lg={5} className="text-center">
                            <Image src="https://picsum.photos/id/237/300/300" roundedCircle/>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={7}>
                            <h2>{state.username}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed vestibulum eros, eu
                                fringilla diam. Suspendisse vel imperdiet risus. Ut ut odio id tellus condimentum tincidunt
                                id eu mauris. Aliquam erat volutpat. Quisque pharetra est sit amet ipsum placerat, vel
                                fermentum justo tempor. Aenean pulvinar velit et elit mattis rutrum. Aliquam lobortis
                                vehicula feugiat.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat, arcu sed
                                tincidunt dignissim, elit massa porttitor augue, dictum ullamcorper justo elit a felis. Duis
                                ac gravida eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at venenatis
                                lorem, at accumsan risus. Proin quam sem, rutrum aliquam velit vel, hendrerit scelerisque
                                est. Nulla in finibus libero, non hendrerit ante. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Maecenas hendrerit eros at purus
                                convallis, nec blandit ligula elementum.
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default ShowcaseUser;