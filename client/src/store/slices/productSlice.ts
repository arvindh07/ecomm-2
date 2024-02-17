import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        addProducts: (_, action) => {
            return action.payload;
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice.reducer;