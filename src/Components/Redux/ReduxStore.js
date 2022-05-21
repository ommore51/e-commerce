import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { SUBTOTAL } from "./Reducer"
import authReducer from '../../AuthSlice/authSlice';

export const ReduxStore = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },

});
ReduxStore.dispatch(SUBTOTAL());


