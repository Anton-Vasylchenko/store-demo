import React from 'react';
import Product from '../Product';
import SortFilter from '../SortFilter';
import NavPanel from '../NavPanel';
import { Container } from 'react-bootstrap';
import Spinner from '../Spinner';

import ApiServices from '../../services/ApiServices';

import './ProductsList.scss';

const apiServices = new ApiServices();

function ProductsList() {
    const [products, setProducts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        updateProducts();
    }, []);

    const updateProducts = () => {
        apiServices.getProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }

    const delProduct = (id) => {
        setLoading(true);
        apiServices.delProductById(id).then(e => {
            updateProducts();
        });
    }

    const sortProducts = (type) => {
        const newProducts = [...products];
        newProducts.sort((prev, next) => {
            if (prev[type] < next[type]) {
                return -1
            }
            if (prev[type] < next[type]) {
                return 1
            }
        });
        setProducts(newProducts);
    }

    return (
        <Container>
            <div className="content-wrapper">
                <SortFilter onToggleSort={sortProducts} />
                {loading ? <Spinner /> : products.map(elem => {
                    return <Product item={elem} key={elem.id} onDelete={delProduct} />
                })}
            </div>
        </Container>
    )
}

export default ProductsList;

