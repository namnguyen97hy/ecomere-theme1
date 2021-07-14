import homePageApi from "./api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk('product/getListProduct' , async (params, thunkAPI) => {
    const listProduct = await homePageApi.getListProduct();
    return listProduct
})


const productSlice = createSlice({
    name:"product",
    initialState: {
        listProduct : [],
        loading:false,
        error:""
    }, 
    reducers:{
    },
    extraReducers: {
        [getListProduct.pending] : (state) => {
            state.loading = true
        },
        [getListProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListProduct.fulfilled] : (state, action) => {
            state.loading = false;
            state.listProduct = action.payload
        }

    }
})

const {reducer : productReducer, actions} = productSlice;
export default productReducer;