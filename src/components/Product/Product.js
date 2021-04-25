import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import PopupDelete from '../PopupDelete';

import NoImage from '../../assets/no-image.png';

import './Product.scss';

function Product({ item, onDelete }) {
    const [show, setShow] = React.useState(false);
    const { id, name, imageUrl, count, info } = item;

    const handleNo = () => setShow(false);

    const handleYes = () => {
        toggleShow();
        onDelete(id);
    };

    const toggleShow = () => {
        setShow(!show);
    };

    const addDefaultSrc = (ev) => {
        ev.target.src = NoImage;
    }

    return (
        <div className="product">

            <PopupDelete
                show={show}
                handleNo={handleNo}
                handleYes={handleYes}
                name={name}
            />

            <div className="product__name">{name}
                <div className="product__del" onClick={toggleShow}>x</div>
            </div>
            <Row>
                <Col xs={12} md={5}>
                    <div className="product__image">
                        <img onError={addDefaultSrc} src={imageUrl} alt="product" />
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="product__info">
                        {
                            info.length > 70 ? info.substring(0, 70) + ' ...' : info
                        }
                    </div>
                    <div className="product__count"> In stock: {count} pcs.</div>
                </Col>
            </Row>
            <div className="product__link">
                <Link to={`/product/${id}`}>
                    <Button variant="info">More details...</Button>
                </Link>
            </div>
        </div>
    );
}

export default Product;
