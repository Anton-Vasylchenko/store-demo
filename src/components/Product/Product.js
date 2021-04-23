import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import PopupDelete from '../PopupDelete';

import './Product.scss';

function Product({ item, onDelete }) {
    const { id, name, imageUrl, count, info } = item;
    const [show, setShow] = React.useState(false);

    const handleNo = () => setShow(false);
    const handleYes = () => {
        setShow(false);
        onDelete(id);
    };

    const handleShow = () => setShow(true);

    return (
        <div className="product">

            <PopupDelete
                show={show}
                handleNo={handleNo}
                handleYes={handleYes}
                name={name}
            />

            <div className="product__name">{name}
                <div className="product__del" onClick={handleShow}>x</div>
            </div>
            <Row>
                <Col xs={12} md={5}>
                    <div className="product__image">
                        <img src={imageUrl} alt="product" />
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="product__info"> {info} </div>
                    <div className="product__count"> В наявності: {count} шт.</div>
                </Col>
            </Row>
            <div className="product__link">
                <Link to={`/${id}`}>
                    <Button variant="info">Детальніше...</Button>
                </Link>
            </div>
        </div>
    );
}

export default Product;
