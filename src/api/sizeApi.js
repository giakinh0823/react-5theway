import axiosClient from "./axiosClient";

const sizeApi = {
    async getAll(params){
        const newParams = { ...params}
        const sizes  = await axiosClient.get('sizes/', {params: newParams})
        return  sizes
    },

    get(id) {
        const url = `/sizes/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/sizes/`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/sizes/${data.id}/`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/sizes/${id}/`;
        return axiosClient.delete(url);
    },

}

export default sizeApi