import React from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product';
import SortFilter from '../SortFilter';
import BtnCreateElement from '../BtnCreateElement';
import Spinner from '../Spinner';

import ApiServices from '../../services/ApiServices';

import './ProductsList.scss';

function ProductsList() {
    const apiServices = new ApiServices();

    const [products, setProducts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        updateProducts();
        window.scrollTo(0, 0);
    }, []);

    const updateProducts = () => {
        apiServices.getProducts().then(data => {
            setLoading(false);
            const sortData = sortProducts(data, 'name');
            setProducts(sortData);
        });
    }

    const delProduct = (id) => {
        setLoading(true);
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

    const onChangeSort = (type) => {
        if (products) {
            const newProducts = [...products];
            const sortNewProducts = sortProducts(newProducts, type);
            setProducts(sortNewProducts);
        }
    }

    const sortProducts = (obj, type) => {
        obj.sort((a, b) => (a[type] > b[type]) ? 1 : -1);
        return obj;
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

