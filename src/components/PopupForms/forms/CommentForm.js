import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Col, Form, Button, Alert } from 'react-bootstrap';

function CommentForm({ details }) {

    const { show, handleNo, handleSubmit, } = details;

    const [comment, setComment] = React.useState('');
    const [error, setError] = React.useState(false);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuidv4(),
            text: comment,
            date: createCurrentDate()
        }

        if (!comment) {
            setError(true);
            return;
        }

        clearForm();
        handleNo();
        handleSubmit(newComment);
    }

    const clearForm = () => {
        setComment('');
    }

    const onCancelHandle = () => {
        handleNo();
        setError(false);
    }

    const createCurrentDate = () => {
        const today = new Date();
        const day = today.toJSON().slice(0, 10).replace(/-/g, '/');
        const minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        const seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        const time = today.getHours() + ":" + minutes + ":" + seconds;
        return `${day} - ${time}`;
    }

    return (
        <>
            <Modal animation={true} show={show} onHide={onCancelHandle}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Comment</Modal.Title>
                </Modal.Header>

                {error && <Alert className="m-2" variant={'danger'}>
                    Error! Text field is empty!
                </Alert>}

                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label>Text</Form.Label>
                                <Form.Control
                                    onChange={e => setComment(e.target.value)}
                                    value={comment}
                                    type="text"
                                    placeholder="Please, enter your text here"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" onClick={onCancelHandle}>
                            Cancel
                        </Button>

                        <Button className="m-2" variant="primary" type="button" onClick={onHandleSubmit}>
                            Create
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default CommentForm;
