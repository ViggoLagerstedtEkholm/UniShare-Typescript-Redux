import {Button, Container, Form, Image, Stack} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Shared/Loading";
import {AuthContext} from "../../App";

function Images(){
    const {state} = useContext(AuthContext);
    const [image, setImage] = useState("");

    useEffect(() =>{
        axios.get<string>("https://localhost:5001/api/Profile/image/get/" + state.username)
            .then(response => setImage(response.data))
            .catch(error => console.log(error));
    }, [])

    function upload(){

    }

    function remove(){

    }

    return(
        <Container className="text-center">

            <h2>Current image</h2>
            <hr/>
            {image ?
                <Image src={`data:image/jpeg;base64,${image}`} width={300} height={300} fluid/>
            : <Loading/>}

            <Form className="my-3" onSubmit={upload}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>

                <Stack className="gap-2">
                    <Button className="btn-danger" onClick={remove}>
                        Remove Image
                    </Button>

                    <Button type="submit">
                        Upload
                    </Button>
                </Stack>
            </Form>
        </Container>
    )
}

export default Images;