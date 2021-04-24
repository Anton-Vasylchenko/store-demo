import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackArrow from '../BackArrow';
import Spinner from '../Spinner';
import CommentsList from '../CommentsList';
import BtnCreateElement from '../BtnCreateElement';

import ApiServices from '../../services/ApiServices';

import NoImage from '../../assets/no-image.png';

import './ProductDetails.scss';

function ProductDetails({ itemId }) {
    const apiService = new ApiServices();

    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        apiService.getProductById(itemId).then(data => {
            setProduct(data);
        })
    }, [itemId]);

    const addDefaultSrc = (ev) => {
        ev.target.src = NoImage;
    }

    const updateProduct = async (newItem) => {
        apiService.updateProduct(itemId, newItem).then(e => {
            setProduct(e);
        })
    }

    return (
        <Container>
            <div className="content-wrapper">
                {product ?
                    <ProductView item={product}
                        defImg={addDefaultSrc}
                        updateProduct={updateProduct} />
                    : <Spinner />
                }
                {product && <CommentsList comments={product.comments} />}
            </div>
        </Container>
    )
};

const ProductView = ({ item, defImg, updateProduct }) => {

    return (
        <React.Fragment>
            <div className="product-details">
                <div className="product-details__name">
                    <BackArrow />
                    <p>
                        {item.name}
                    </p>

                    <BtnCreateElement
                        nameBtn={'Edit'}
                        action={'edit'}
                        type={'form'}
                        item={item}
                        handleSubmit={updateProduct}
                    />

                </div>

                <Row>
                    <Col xs={12} md={6}>
                        <div className="product-details__img">
                            <img onError={defImg} src={item.imageUrl} alt="product-poster" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="product-details__info">
                            {item.info}
                        </div>
                        <div className="product-details__options">
                            <div className="options options__size">
                                <span>Висота: {item.size.height}</span>
                                <span>Ширина: {item.size.width}</span>
                            </div>
                            <div className="options options__weight">
                                <span>Вага: {item.weight}</span>
                            </div>
                            <div className="options options__count">
                                <span>В наявності: {item.count} шт.</span>
                            </div>

                        </div>

                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}


export default ProductDetails;

