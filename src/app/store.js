import cartReducer from '../features/Cart/CartSlice'
import authReducer from '../features/Auth/AuthSlice'

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    auth: authReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store 