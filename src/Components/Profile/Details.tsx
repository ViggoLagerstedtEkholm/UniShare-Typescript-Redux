import {Button, Card, Col, Image, Row, Stack} from "react-bootstrap";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";
import {useAuthContext} from "../Context/AuthContext";
import {useNavigate} from "react-router-dom";

interface Props{
    id: string | undefined;
}

function Details({id}: Props){
    const {isLoggedIn} = useAuthContext();
    const navigate = useNavigate();

    return(
        <Card className="bg-secondary bg-opacity-25 p-4 rounded">
            <Card.Body>
                <Row>
                    <Col xs={12} xl={4} md={12} sm={12} lg={6} className="text-center">
                        <Image src="https://picsum.photos/id/235/300/300" roundedCircle/>
                    </Col>
                    <Col xs={12} xl={8} md={12} sm={12} lg={6} className="bg-secondary bg-opacity-25 p-4 rounded">
                        <h2>Hello, i'm @ViggoLagerstedtEkholm</h2>
                        <Stack>
                            <span><HiOutlineLocationMarker/> Stockholm, Sweden</span>
                            <span><HiBookOpen/> Repos</span>
                            <span><VscGithubInverted/> GitHub</span>
                        </Stack>

                        {!isLoggedIn ? <Button className="mt-3" onClick={() => navigate('/settings')}>
                            Settings
                        </Button> : null}
                    </Col>
                    <Col xs={12} xl={12} md={12} sm={12} lg={6}>
                        <h1>ID: {id}</h1>
                        <h2>Lorem Ipsum</h2>
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
    )
}

export default Details;