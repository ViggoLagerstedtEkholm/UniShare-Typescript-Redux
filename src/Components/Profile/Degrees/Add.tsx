import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ModalBox from '../../Modal/ModalBox'
import { IDegree, UploadDegree } from '../../Service/DegreeService';

export default function Add() {
    const [name, setName] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [university, setUniversity] = useState("");

    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const degree: IDegree = {
            name: name,
            fieldOfStudy: fieldOfStudy,
            startDate: startDate,
            endDate: endDate,
            country: country,
            city: city,
            university: university
        }

        UploadDegree(degree).then(() => {
            navigate(0);
        }).catch(error => console.log(error));
    }

    return (
        <ModalBox headerText='Add new degree' text='Add degree'>
            <Form onSubmit={onSubmit} className="bg-secondary bg-opacity-10 p-4 rounded">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Field of study</Form.Label>
                    <Form.Control type="text" onChange={e => setFieldOfStudy(e.target.value)} value={fieldOfStudy} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>startDate</Form.Label>
                    <Form.Control
                        type="date"
                        name="startDate"
                        value={startDate}
                        className="mb-3"
                        onChange={(evt) => setStartDate(evt.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>endDate</Form.Label>
                    <Form.Control
                        type="date"
                        name="endDate"
                        value={endDate}
                        className="mb-3"
                        onChange={(evt) => setEndDate(evt.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" onChange={e => setCountry(e.target.value)} value={country} />
                </Form.Group>

                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" onChange={e => setCity(e.target.value)} value={city} />
                </Form.Group>

                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>University</Form.Label>
                    <Form.Control type="text" onChange={e => setUniversity(e.target.value)} value={university} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </ModalBox>
    )
}
