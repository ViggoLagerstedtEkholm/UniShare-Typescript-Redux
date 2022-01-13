import {Button, Container, Modal} from "react-bootstrap";
import useConfirm from "./useConfirm";

function ConfirmModal(){
    const { onConfirm, onCancel, state } = useConfirm();

    console.log(state);

    return (
        <Container fluid>
            <Modal
                show={state.show}
                backdrop="static"
                keyboard={false}
                className="bg-opacity-25">
                <Modal.Header closeButton className="bg-secondary">
                    <Modal.Title>Vote!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary">
                    <h1>Confirm.</h1>
                    Are you sure you want to perform this action?

                    <Button className="btn btn-success" onClick={onConfirm}>
                        Accept
                    </Button>

                    <Button className="btn btn-danger" onClick={onCancel}>
                        Cancel
                    </Button>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default ConfirmModal;