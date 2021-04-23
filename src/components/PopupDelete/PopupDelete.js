import React from 'react';

import { Button, Modal } from 'react-bootstrap';

function PopupDelete({ handleNo, handleYes, show, name }) {
    return (
        <>
            <Modal animation={false} show={show} onHide={handleNo}>
                <Modal.Header closeButton>
                    <Modal.Title>Видалення продукту</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ви дійсно бажаєте видалити <b>"{name}"</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNo}>
                        Ні
                    </Button>
                    <Button variant="primary" onClick={handleYes}>
                        Так
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupDelete;