import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import StorageKeys from '../../constants/storage-keys';


export const register = createAsyncThunk(
    'auth/register',
    async (payload) => {
        //call api to register
        const response = await authApi.register(payload);
        console.log(response)
        //save data to local storage
        // localStorage.setItem(StorageKeys.user, JSON.parse(response.config.data).username);
        // localStorage.setItem(StorageKeys.access, response.data.access);
        // localStorage.setItem(StorageKeys.refresh, response.data.refresh);
        return JSON.parse(response.config.data).username;
    }
)


export const login = createAsyncThunk(
    'auth/login',
    async (payload) => {
        try {
            const response = await authApi.login(payload);
            console.log(response)
            localStorage.setItem(StorageKeys.access, response.data.access);
            localStorage.setItem(StorageKeys.refresh, response.data.refresh);
            const username = JSON.parse(response.config.data).username
            const responseUser = await authApi.getUser({ username: username })
            const user = {...responseUser.data[0]}
            console.log(responseUser)
            const responseProfile = await authApi.getProfile({user: user.id})
            const profile = {...responseProfile.data}
            console.log(responseProfile)
            const data = {
                ...user,
                ...profile,
            }
            localStorage.setItem(StorageKeys.user, JSON.stringify(data));
            return data
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.user)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            state.current = {}
            localStorage.removeItem(StorageKeys.access)
            localStorage.removeItem(StorageKeys.refresh)
            localStorage.removeItem(StorageKeys.user)
        }
    },
    extraReducers: {
        //'user/register/fulfilled': () => {}
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
})

const { actions, reducer } = AuthSlice
export const { logout } = actions
export default reducer