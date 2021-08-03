import axiosClient from "./axiosClient";

const categoryApi = {
    async getAll(params){
        const newParams = { ...params}
        const categorys  = await axiosClient.get('categorys/', {params: newParams})
        return  categorys
    },

    get(id) {
        const url = `/categorys/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/categorys/`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/categorys/${data.id}/`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/categorys/${id}/`;
        return axiosClient.delete(url);
    },

}

export default categoryApi