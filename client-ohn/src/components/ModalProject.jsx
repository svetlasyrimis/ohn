import React from "react";
import { Modal, Button } from 'react-bootstrap';
import ProjectOnlyForm from "./ProjectOnlyForm";

export default function ModalProject(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body><ProjectOnlyForm currentUser={props.currentUser} handleSubmit={props.handleSubmit}/></Modal.Body>
        
      </Modal>
    </>
  );
}