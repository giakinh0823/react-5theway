import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params) {
        var qs = require('qs');
        const response = await axiosClient.get('products/', {
            params: {
                ...params,
            },
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })
        return {
            ...response,
            maxItem: 16,
        }
    },

    get(id) {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/products/`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}/`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}/`;
        return axiosClient.delete(url);
    },

}

export default productApi