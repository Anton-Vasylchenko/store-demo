import React from 'react';
import { Alert, Modal, Col, Form, Button } from 'react-bootstrap';

function ProductForm({ details }) {
    const { show, handleNo, handleSubmit, action, item } = details;

    const [error, setError] = React.useState(false);

    const [name, setName] = React.useState(item ? item.name : '');
    const [imageUrl, setImageUrl] = React.useState(item ? item.imageUrl : '');
    const [info, setInfo] = React.useState(item ? item.info : '');
    const [height, setHeight] = React.useState(item ? item.size.height : '');
    const [width, setWidth] = React.useState(item ? item.size.width : '');
    const [weight, setWeight] = React.useState(item ? item.weight : '');
    const [count, setCount] = React.useState(item ? item.count : '');

    const onHandleSubmit = () => {
        const product = {
            name, imageUrl, weight, count, info,
            size: {
                height,
                width,
            },
            comments: []
        }

        if (!name || !imageUrl || !weight || !count || !info || !height || !width) {
            showErrorMsg();
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
        setName('');
        setImageUrl('');
        setInfo('');
        setWeight('');
        setWidth('');
        setHeight('');
        setCount('');
    }

    const showErrorMsg = () => {
        setError(!error);
    }

    const formTitle = action === 'create' ? 'Create New ' : 'Edit ';

    return (
        <>
            <Modal animation={false} show={show} onHide={onCancelHandle}>

                <Modal.Header closeButton>
                    <Modal.Title>{formTitle} Product</Modal.Title>
                </Modal.Header>

                {error && <Alert className="m-2" variant={'danger'}>
                    Error! Some fields are empty
                </Alert>}

                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label >Name</Form.Label>
                                <Form.Control
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter product name"
                                    value={name}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control
                                    onChange={e => setImageUrl(e.target.value)}
                                    value={imageUrl}
                                    type="text"
                                    placeholder="Enter image url"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={e => setInfo(e.target.value)}
                                value={info}
                                placeholder="Enter product description"
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridHeight">
                                <Form.Label>Height</Form.Label>
                                <Form.Control
                                    onChange={e => setHeight(e.target.value)}
                                    value={height}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridWidth">
                                <Form.Label>Width</Form.Label>
                                <Form.Control
                                    onChange={e => setWidth(e.target.value)}
                                    value={width}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridWeight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                    onChange={e => setWeight(e.target.value)}
                                    value={weight}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCount">
                                <Form.Label>Count</Form.Label>
                                <Form.Control
                                    onChange={e => setCount(e.target.value)}
                                    value={count}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" onClick={onCancelHandle}>
                            Cancel
                        </Button>

                        <Button className="m-2" variant="primary" type="submit" onClick={onHandleSubmit}>
                            Ok
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ProductForm;
