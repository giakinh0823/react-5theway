import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        addToCart(state, action) {
            //newItem ={id, product, quantity}
            const newItem = action.payload;
            const index = state.cartItems.findIndex(item => (item.id === newItem.id && item.size === newItem.size));
            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action) {
            const { id, quantity, size } = action.payload;
            const index = state.cartItems.findIndex(item => (item.id === id && item.size === size));
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action) {
            const {id, size} = action.payload;
            const newCartItems = state.cartItems
            const index = newCartItems.findIndex((item) => (item.id === id && item.size === size))
            console.log(index)
            delete newCartItems[index]
            state.cartItems = newCartItems.filter((item) => item)
        },
    },
})

const { actions, reducer } = CartSlice
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions
export default reducer