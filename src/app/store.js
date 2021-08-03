import cartReducer from '../features/Cart/CartSlice'


const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store 