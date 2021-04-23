class ApiServices {
    _baseUrl = 'https://608298915dbd2c0017579fcc.mockapi.io/api/v1/';

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = res.json();
        return body;
    }

    delResource = async (url) => {
        const res = await fetch('https://608298915dbd2c0017579fcc.mockapi.io/api/v1/' + url, {
            method: 'DELETE',
        });

        const body = res.json();
        return body;
    }



    getProducts = async () => {
        const items = await this.getResource(`products`);
        return items;
    }

    getProductById = async (id) => {
        const item = await this.getResource(`products/${id}`);
        return item;
    }

    delProductById = async (id) => {
        const delItem = await this.delResource(`products/${id}`);
        return delItem;
    }

    //     getPopularGoods = async (catId) => {
    //         const { data } = await axios.get(`${this._baseUrl}shopItems`, {
    //             params: {
    //                 category: catId,
    //                 _sort: 'rating',
    //                 _order: 'desc',
    //                 _start: 0,
    //                 _end: 4
    //             }
    //         })
    //         return data;
    //     }

    //     getShopItemById = async (id) => {
    //         const { data } = await axios.get(`${this._baseUrl}shopItems`, {
    //             params: {
    //                 id: id
    //             }
    //         })
    //         return data;
    //     }

    //     getShopCategories = async () => {
    //         const items = await this.getResource(`shopCategories`);
    //         return items;
    //     }

    //     getAdvantages = async () => {
    //         const items = await this.getResource(`advantages`);
    //         return items;
    //     }

}

export default ApiServices;

