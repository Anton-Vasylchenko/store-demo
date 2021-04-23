import React from 'react'
import { Button } from 'react-bootstrap';

import './NavPanel.scss';

function NavPanel({ nameBtn, onClickHandler }) {
    return (
        <div className="nav-panel">
            <Button onClick={onClickHandler}>{nameBtn}</Button>
        </div>
    )
}

export default NavPanel
