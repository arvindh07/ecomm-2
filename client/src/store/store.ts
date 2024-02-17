import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        userInfo: userSlice,
        products: productSlice
    }
});

export type StoreState = ReturnType<typeof store.getState>
export default store;