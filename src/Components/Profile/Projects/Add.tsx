import { ChangeEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { AddProject, IProject } from '../../Service/ProjectService';
import {  useLocation, useNavigate } from 'react-router-dom';

import ModalBox from '../../Modal/ModalBox'

export default function Add() {
  const [file, setFile] = useState<Blob | null>(null);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (file != null) {
      const ProjectData: IProject ={
        file: file,
        link: link,
        name: name,
        description: description
      }
  
      AddProject(ProjectData).then(() => {
        navigate(0);
      });
    }
  }

  return (
    <ModalBox headerText='Add new project' text='Add project'>
      <Form onSubmit={onSubmit} className="bg-secondary bg-opacity-10 p-4 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link</Form.Label>
          <Form.Control type="text" onChange={e => setLink(e.target.value)} value={link} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={e => setName(e.target.value)} value={name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" onChange={e => setDescription(e.target.value)} value={description} />
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" onChange={onFileChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </ModalBox>
  )
}
