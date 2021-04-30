import React from 'react';
import TextEditor from '../../TextEditor';

import { Alert, Modal, Col, Form, Button } from 'react-bootstrap';

function ProductForm({ details }) {
    const { show, handleNo, handleSubmit, action, item } = details;

    const [error, setError] = React.useState(false);
    const [descCount, setDescCount] = React.useState(item ? item.shortDesc.length : 0);

    const [inputsValue, setInputsValue] = React.useState(item ? { ...item }
        : {
            name: '',
            imageUrl: '',
            count: 0,
            info: '',
            shortDesc: '',
            height: 0,
            width: 0,
            weight: 0,
            comments: [],
        });

    const updateState = (field, newValue) => {
        field === 'shortDesc' && setDescCount(newValue.length);
        setInputsValue({
            ...inputsValue,
            [field]: newValue
        });
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const product = {
            ...inputsValue,
            comments: item ? item.comments : []
        }

        for (let key in inputsValue) {
            if (inputsValue[key] === '') {
                showErrorMsg('Error! Some fields are empty!');
                return;
            }
        }

        if (descCount > 60) {
            showErrorMsg(`Error! Short description 
            must be shorter than 60 characters`);
            return;
        }

        !item && clearForm();

        handleNo();
        handleSubmit(product);
    }

    const onCancelHandle = () => {
        handleNo();
        setError(false);
    }

    const clearForm = () => {
        const newState = {
            ...inputsValue
        }
        for (let prop in newState) {
            delete newState[prop];
        }
        setInputsValue({
            ...newState
        });
    }

    const showErrorMsg = (text) => {
        setError(text);
    }

    const formTitle = action === 'create' ? 'Create New ' : 'Edit ';

    return (
        <>
            <Modal size="lg" animation={true} show={show} onHide={onCancelHandle}>
                <Modal.Header closeButton>
                    <Modal.Title>{formTitle} Product</Modal.Title>
                </Modal.Header>

                {error && <Alert className="m-2" variant={'danger'}>
                    {error}
                </Alert>}

                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label> <b>Name</b> </Form.Label>
                                <Form.Control
                                    onChange={e => updateState('name', e.target.value)}
                                    type="text"
                                    placeholder="Enter product name"
                                    value={inputsValue.name}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label> <b>Image Url</b> </Form.Label>
                                <Form.Control
                                    onChange={e => updateState('imageUrl', e.target.value)}
                                    value={inputsValue.imageUrl}
                                    type="text"
                                    placeholder="Enter image url"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDesc">
                            <Form.Label>
                                <b>Short description:
                                <span className={descCount > 60 ? 'text-danger' : ''}>
                                        ({descCount})
                                </span></b>
                            </Form.Label>
                            <Form.Control
                                onChange={e => updateState('shortDesc', e.target.value)}
                                value={inputsValue.shortDesc}
                                placeholder="Enter a couple words about product"
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridDesc">
                            <Form.Label> <b> Main description: </b> </Form.Label>

                            <TextEditor onChangeInfo={updateState} content={inputsValue.info} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridHeight">
                                <Form.Label> <b> Height: </b></Form.Label>
                                <Form.Control
                                    onChange={e => updateState('height', e.target.value)}
                                    value={inputsValue.height}
                                    placeholder="Height"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridWidth">
                                <Form.Label> <b> Width: </b></Form.Label>
                                <Form.Control
                                    onChange={e => updateState('width', e.target.value)}
                                    value={inputsValue.width}
                                    placeholder="Width"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridWeight">
                                <Form.Label> <b> Weight: </b></Form.Label>
                                <Form.Control
                                    onChange={e => updateState('weight', e.target.value)}
                                    value={inputsValue.weight}
                                    placeholder="Weight"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCount">
                                <Form.Label> <b> Count </b></Form.Label>
                                <Form.Control
                                    onChange={e => updateState('count', e.target.value)}
                                    value={inputsValue.count}
                                    placeholder="Count"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" onClick={onCancelHandle}>
                            Cancel
                        </Button>

                        <Button className="m-2" variant="primary" type="button" onClick={onHandleSubmit}>
                            {action === 'edit' ? 'Save' : 'Create'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProductForm;
