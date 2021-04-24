import React from 'react'
import { Button } from 'react-bootstrap';
import PopupForms from '../PopupForms';

import './BtnCreateElement.scss';

function BtnCreateElement({ nameBtn, type, action, handleSubmit, item }) {
    const [show, setShow] = React.useState(false);

    const handleNo = () => setShow(false);

    const handleYes = () => {
        toggleShow();
    };

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div className="btn-create-element">
            <PopupForms
                show={show}
                handleNo={handleNo}
                handleYes={handleYes}
                type={type}
                action={action}
                handleSubmit={handleSubmit}
                item={item}
            />

            <Button variant={action === 'edit' ? 'success' : 'primary'} onClick={toggleShow}>{nameBtn}</Button>
        </div>
    )
}

export default BtnCreateElement
