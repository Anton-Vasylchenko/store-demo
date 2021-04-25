import React from 'react';
import PopupDelete from '../PopupDelete';

import './Comment.scss';

function Comment({ item, onDelete }) {
    const { id, text, date } = item;
    const [show, setShow] = React.useState(false);

    const handleNo = () => setShow(false);

    const handleYes = () => {
        toggleShow();
        onDelete(id);
    };

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div className="comment" key={id}>
            <PopupDelete
                show={show}
                handleNo={handleNo}
                handleYes={handleYes}
                name={'comment'}
            />

            <div className="comment__del" onClick={toggleShow}>x</div>
            <p>{text}</p>

            <div className="comment__bottom">
                <span>Created at: {date}</span>
            </div>
        </div>
    )
}

export default Comment;
