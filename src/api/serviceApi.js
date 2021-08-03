import axiosClient from "./axiosClient";

const serviceApi = {
    async getAll(params){
        const newParams = { ...params}
        const services  = await axiosClient.get('services/', {params: newParams})
        return  services
    },

    get(id) {
        const url = `/services/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/services/`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/services/${data.id}/`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/services/${id}/`;
        return axiosClient.delete(url);
    },

}

export default serviceApi