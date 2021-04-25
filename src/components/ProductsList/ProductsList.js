import React from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product';
import SortFilter from '../SortFilter';
import BtnCreateElement from '../BtnCreateElement';
import Spinner from '../Spinner';

import apiServices from '../../services/ApiServices';

import './ProductsList.scss';

function ProductsList() {
    const [products, setProducts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        updateProducts();
    }, []);

    const updateProducts = (sortBy = 'name', order = 'asc') => {
        setLoading(true);
        apiServices.getProducts(sortBy, order).then(data => {
            setLoading(false);
            setProducts(data);
        });
    }

    const delProduct = (id) => {
        apiServices.delProductById(id).then(e => {
            updateProducts();
        });
    }

    const createProduct = (obj) => {
        setLoading(true);
        apiServices.addProduct(obj).then(e => {
            setLoading(false);
            updateProducts();
        });
    }

    const onChangeSort = (sortBy, order) => {
        updateProducts(sortBy, order);
    }

    return (
        <Container>
            <div className="content-wrapper">
                <SortFilter onToggleSort={onChangeSort} />

                <BtnCreateElement
                    nameBtn={'+Add Product'}
                    type={'product'}
                    action={'create'}
                    handleSubmit={createProduct}
                />

                {loading ? <Spinner /> :
                    products && products.map(elem => {
                        return <Product item={elem}
                            key={elem.id}
                            onDelete={delProduct}
                        />
                    })
                }

            </div>
        </Container>
    )
}

export default ProductsList;

