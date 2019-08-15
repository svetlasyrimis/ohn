import React from "react";
import { Modal, Button } from 'react-bootstrap';
import SkillOnlyForm from "./SkillOnlyForm";

export default function ModalSkill(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new skill
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body><SkillOnlyForm currentUser={props.currentUser} handleSubmit={props.handleSubmit}/></Modal.Body>
        
      </Modal>
    </>
  );
}


