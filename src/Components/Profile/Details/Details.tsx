import {Button, Card, Col, Image, Row, Stack} from "react-bootstrap";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsFillEyeFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

import {AuthContext} from "../../../AppStateProvider";
import {ProfileContext} from "./Profile";

import {useNavigate} from "react-router-dom";
import {useContext} from "react";

function Details(){
    const {authState} = useContext(AuthContext);
    const navigate = useNavigate();
    const profile = useContext(ProfileContext);

    return(
        <Card className="bg-secondary bg-opacity-25 p-4 rounded">
            <Card.Body>
                <Row>
                    <Col xs={12} xl={4} md={12} sm={12} lg={6} className="text-center my-3">
                        {profile?.image ?
                            <Image src={`data:image/jpeg;base64,${profile?.image}`} width={300} height={300} roundedCircle/> :
                            <Image src="https://picsum.photos/id/235/300/300" roundedCircle/>
                        }
                    </Col>
                    <Col xs={12} xl={8} md={12} sm={12} lg={6} className="bg-secondary bg-opacity-25 p-4 rounded">
                        <h2>Hello, i'm {profile?.username}</h2>
                        <Stack>
                            <span><HiOutlineLocationMarker/> Stockholm, Sweden</span>
                            <span><HiBookOpen/> Repos</span>
                            <span><GoPerson/> {profile?.age}</span>
                            <span><BsFillEyeFill/> {profile?.visits}</span>
                            <span><MdDateRange/> Last seen - {profile?.lastOnline}</span>
                            <span><MdDateRange/> Joined - {profile?.joined}</span>

                            {profile?.gitHub ? <span><VscGithubInverted/> <a href={profile?.gitHub}>GitHub</a></span> : null}
                            {profile?.linkedIn ? <span><BsLinkedin/> <a href={profile?.linkedIn}>LinkedIn</a></span> : null}
                        </Stack>

                        {profile?.username === authState.username ? <Button className="mt-3" onClick={() => navigate('/settings')}>
                            Settings
                        </Button> : null}
                    </Col>
                    <Col xs={12} xl={12} md={12} sm={12} lg={6} className="mt-4">
                        <h2>Description</h2>
                        <p>
                            {profile?.description ? profile?.description : <b>No description set!</b>}
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Details;