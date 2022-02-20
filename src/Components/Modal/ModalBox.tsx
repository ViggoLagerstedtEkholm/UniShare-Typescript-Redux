import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-modal';
import { HiOutlineX } from "react-icons/hi";

interface Props {
    children: JSX.Element[] | JSX.Element;
    text: string;
    headerText: string;
}

const customStyles = {
    content: {
        width: '80%',
        margin: 'auto',
        marginTop: '70px',
        padding: '20px',
        height: 'auto',
    },
};

Modal.setAppElement('#modal');

export default function ModalBox({ children, text, headerText }: Props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        console.log("Opended modal.");
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Button onClick={openModal} className="my-4">{text}</Button>
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" className="bg-dark rounded">
                <Row>
                    <Col>
                        <h1>{headerText}</h1>
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                        <HiOutlineX size={50} onClick={closeModal}/>
                    </Col>
                </Row>
                <hr />
                {children}
            </Modal>
        </>
    )
}
