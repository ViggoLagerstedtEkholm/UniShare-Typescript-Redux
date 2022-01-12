import {Button, Container, Form, Image, Stack} from "react-bootstrap";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Shared/Loading";
import {AuthContext} from "../../App";
import api from "../Service/api";
import {useNavigate} from "react-router-dom";
import useConfirm from "../Shared/useConfirm";
import ConfirmModal from "../Shared/ConfirmModal";

function Images(){
    const {state} = useContext(AuthContext);
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState<Blob | null>(null);

    const {confirm} = useConfirm();

    const showConfirm = async () => {
        return await confirm('Do you confirm your choice?');
    }

    const navigation = useNavigate();

    useEffect(() =>{
        axios.get<string>("https://localhost:5001/api/Profile/image/get/" + state.username)
            .then(response => setImage(response.data))
            .catch(() => setMessage("No image found!"));
    }, [])

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files){
            return;
        }
        setFile(e.target.files[0]);
    }

    function upload(){
        if(file) {
            const formData = new FormData();
            formData.append('file', file);

            api.post("https://localhost:5001/api/Profile/image/upload", formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(() => navigation(0)).catch(() => setMessage('Could not upload image!'));
        }else{
            setMessage('Please select a file to upload!');
        }
    }

    function remove(){
        showConfirm()
            .then(confirmed => {
                if(confirmed){
                    api.post("https://localhost:5001/api/Profile/image/remove")
                        .then(() => navigation(0));
                }
            });
    }

    return(
        <Container className="text-center">
            <ConfirmModal/>
            <h2>Current image</h2>
            <hr/>

            {!message && <>
                {image ?
                    <Image src={`data:image/jpeg;base64,${image}`} width={300} height={300} fluid/>
                    : <Loading/>}
            </>}

            {message && <h1>{message}</h1> }

            <Form className="my-3">
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" onChange={onFileChange}/>
                </Form.Group>

                <Stack className="gap-2">
                    <Button className="btn-danger" onClick={remove}>
                        Remove Image
                    </Button>

                    <Button onClick={upload}>
                        Upload
                    </Button>
                </Stack>
            </Form>
        </Container>
    )
}

export default Images;