import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartStorage") ? JSON.parse(localStorage.getItem("cartStorage")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD(state, action) {

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased quantity of ${action.payload.title} `, { position: "bottom-left", });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart`, { position: "bottom-left", });
            }
            localStorage.setItem("cartStorage", JSON.stringify(state.cartItems));

        },
        REMOVE(state, action) {
            const removedItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removedItems;
            toast.error(`${action.payload.title} removed from cart`, { position: "bottom-left", });
        },
        DECREMENT(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased quantity of ${action.payload.title} `, { position: "bottom-left", });
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const removedItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                state.cartItems = removedItems;
                toast.error(`${action.payload.title} removed from cart`, { position: "bottom-left", });

            }

        },

        SUBTOTAL(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },






    },
});

export const { ADD, REMOVE, DECREMENT, SUBTOTAL } = cartSlice.actions;

export default cartSlice.reducer;


