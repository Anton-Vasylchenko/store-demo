import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackArrow from '../BackArrow';
import Spinner from '../Spinner';
import CommentsList from '../CommentsList';
import BtnCreateElement from '../BtnCreateElement';

import apiServices from '../../services/ApiServices';

import NoImage from '../../assets/no-image.png';

import './ProductDetails.scss';

function ProductDetails({ itemId }) {
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        apiServices.getProductById(itemId).then(data => {
            setProduct(data);
            setLoading(false);
        })
    }, [itemId]);

    const addDefaultSrc = (ev) => {
        ev.target.src = NoImage;
    }

    const updateProduct = async (newItem) => {
        apiServices.updateProductById(itemId, newItem).then(({ data }) => {
            setProduct(data);
            setLoading(false);
        })
    }

    const updateProductDetails = async (newItem) => {
        setLoading(true);
        updateProduct(newItem);
    }

    const updateProdComments = async (newItem) => {
        updateProduct(newItem);
    }

    return (
        <Container>
            <div className="content-wrapper">
                {loading ? <Spinner /> :
                    product &&
                    <ProductView item={product}
                        defImg={addDefaultSrc}
                        updateProduct={updateProductDetails}
                    />
                }

                {product && <CommentsList
                    commentsList={product.comments}
                    product={product}
                    updateProduct={updateProduct}
                    updateAllComments={updateProdComments}
                />}
            </div>
        </Container>
    )
};

const ProductView = ({ item, defImg, updateProduct }) => {

    const { name, imageUrl, weight, count, size, info } = item;

    return (
        <React.Fragment>
            <div className="product-details">
                <div className="product-details__name">
                    <BackArrow />
                    <p>
                        {name}
                    </p>

                    <BtnCreateElement
                        nameBtn={'Edit'}
                        action={'edit'}
                        type={'product'}
                        item={item}
                        handleSubmit={updateProduct}
                    />
                </div>

                <Row>
                    <Col xs={12} md={6}>
                        <div className="product-details__img">
                            <img onError={defImg} src={imageUrl} alt="product-poster" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="product-details__info">
                            {info}
                        </div>
                        <div className="product-details__options">
                            <div className="option options__size">
                                <span>Height: {size.height}</span>
                                <span>Width: {size.width}</span>
                            </div>
                            <div className="option options__weight">
                                <span>Weight: {weight}</span>
                            </div>
                            <div className="option options__count">
                                <span>In stock: {count} pcs.</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ProductDetails;

