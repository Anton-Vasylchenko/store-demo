import axios from 'axios';

class ApiServices {
    _baseUrl = 'https://608298915dbd2c0017579fcc.mockapi.io/api/v1/';

    getResource = async (sortBy, sortOrder, url) => {
        const { data } = await axios.get(`${this._baseUrl}${url}`, {
            params: {
                sortBy: sortBy,
                order: sortOrder
            }
        })
        return data;
    }

    getProducts = async (sortBy, sortOrder) => {
        const data = this.getResource(sortBy, sortOrder, 'products');
        return data;
    }

    getProductById = async (id) => {
        const { data } = await axios.get(`${this._baseUrl}products/${id}`);
        return data;
    }

    addProduct = async (obj) => {
        await axios.post(`${this._baseUrl}products/`, obj);
    }

    delProductById = async (id) => {
        await axios.delete(`${this._baseUrl}products/${id}`);
    }

    updateProductById = async (id, newItem) => {
        const res = await axios.put(`${this._baseUrl}products/${id}`, newItem);
        return res;
    }
}

const apiServices = new ApiServices();

export default apiServices;

