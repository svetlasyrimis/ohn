import React from "react";
// import "../modal.css";
// import PropTypes from "prop-types";

import { Modal,Button,ModalDialog,ModalHeader, ModalFooter, ModalBody,ModalTitle } from 'react-bootstrap'
import SkillOnlyForm from "./SkillOnlyForm";

export default function ModalComponent(props) {
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


