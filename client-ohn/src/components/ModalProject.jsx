import React from "react";
import { Modal, Button } from 'react-bootstrap';
import ProjectOnlyForm from "./ProjectOnlyForm";

export default function ModalProject(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        {/* <Button variant="outline-dark modal-button" onClick={handleShow}>
          Create new project
      </Button> */}
        <Button size="lg" className="call-for-action modal-button" variant="outline-success" onClick={handleShow}>Make a project</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body><ProjectOnlyForm currentUser={props.currentUser} handleSubmit={props.handleSubmit} handleClose={handleClose} /></Modal.Body>

      </Modal>
    </>
  );
}