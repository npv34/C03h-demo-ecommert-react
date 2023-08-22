import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    items: [
        {
            product: {},
            quantity: 0,
            money: 0
        }
    ],
    totalItems: 0,
    totalMoney: 0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            let product = action.payload;
            // kiem tra sp trong gio hang;

            const indexProduct = state.items.indexOf(item => item.product.id === product.id)

            if (indexProduct === -1) {
                let storeProduct = {
                    product: product,
                    quantity: 1,
                    money: product.price
                }
                state.items.push(storeProduct);
                state.totalItems++;
                state.totalMoney += product.price;
            } else {
                state.items[indexProduct].quantity++;
                state.items[indexProduct].money += product.price;
                state.totalMoney += product.price;
            }
        },

        deleteProduct: (state, action) => {

        },

        deleteAll: (state, action) => {
            state.items = []
            state.totalItems = 0;
            state.totalMoney = 0
        }
    }
})

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;