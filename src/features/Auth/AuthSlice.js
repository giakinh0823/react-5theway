import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import StorageKeys from '../../constants/storage-keys';


export const register = createAsyncThunk(
    'auth/register',
    async (payload) => {
        //call api to register
        const response = await authApi.register(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.user, JSON.parse(response.config.data).username);
        localStorage.setItem(StorageKeys.access, response.data.access);
        localStorage.setItem(StorageKeys.refresh, response.data.refresh);
        return JSON.parse(response.config.data).username;
    }
)


export const login = createAsyncThunk(
    'auth/login',
    async (payload) => {
        //call api to register
        const response = await authApi.login(payload);
        // save data to local storage
        await localStorage.setItem(StorageKeys.access, response.data.access);
        await localStorage.setItem(StorageKeys.refresh, response.data.refresh);
        const username = JSON.parse(response.config.data).username
        console.log(username)
        const user =  await authApi.getUser({username: username})
        console.log(user)
        localStorage.setItem(StorageKeys.user, JSON.stringify(user));
        return user;
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
export const {logout} = actions
export default reducer