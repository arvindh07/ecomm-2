import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: null,
        menProds: null,
        womenProds: null,
        filterCategory: "All"
    },
    reducers: {
        addProducts: (state, action) => {
            state.products =  action.payload;
        },
        setMenProducts: (state, action) => {
            state.menProds = action.payload;
        },
        setWomenProducts: (state, action) => {
            state.womenProds = action.payload;
        },
        setFilterCategory: (state, action) => {
            state.filterCategory = action.payload;
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;