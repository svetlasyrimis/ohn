import React from "react";
// import "../modal.css";
// import PropTypes from "prop-types";

import { Modal, Button } from 'react-bootstrap';
import InterestsOnlyForm from "./InterestsOnlyForm";

export default function ModalComponent(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new interest
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Interest</Modal.Title>
        </Modal.Header>
        <Modal.Body><InterestsOnlyForm currentUser={props.currentUser} handleSubmit={props.handleSubmit}/></Modal.Body>
        
      </Modal>
    </>
  );
}


