import React from 'react';
import { Modal, Col, Form, Button } from 'react-bootstrap';

function CommentForm({ details }) {

    const { show, handleNo, handleYes } = details;

    return (
        <>
            <Modal animation={false} show={show} onHide={handleNo}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label>Text</Form.Label>
                                <Form.Control type="text" placeholder="Please, enter your text here" />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" onClick={handleNo}>
                            Cancel
                        </Button>

                        <Button className="m-2" variant="primary" type="submit" onClick={handleYes}>
                            Create
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default CommentForm;
