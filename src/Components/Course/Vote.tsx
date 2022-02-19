import {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";

function Vote() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onVote(){
        //VOTE HERE!
    }

    return (
        <Container fluid>
            <Button className="w-100" variant="primary" onClick={handleShow}>
                Rate
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="bg-opacity-25">
                <Modal.Header closeButton className="bg-secondary">
                    <Modal.Title>Vote!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary">
                    <h1>Hello!</h1>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Vote;