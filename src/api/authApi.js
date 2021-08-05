  
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const authApi = {
    register(data){
        const url ='auth/';
        return axiosClient.post(url,data);
    },
    login(data){
        const url ='api/token/';
        return axiosClient.post(url,data);
    },
    async getUser(params){
        const newParams = { ...params}
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url ='auth/';
        const response = await axiosClient.get(url, {
            params: {...newParams},
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        });
        console.log(response)
        const user = {...response.data[0]}
        const responseProfile = await axiosClient.get('profile/', {
            params: {user: user.id},
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const profile =  {...responseProfile.data[0]}
        return {
            ...profile,
            ...user,
        }
    },
}

export default authApi