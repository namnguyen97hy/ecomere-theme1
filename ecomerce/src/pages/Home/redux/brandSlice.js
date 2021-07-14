import homePageApi from "./api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListBrands = createAsyncThunk('brands/getListBrands' , async (params, thunkAPI) => {
    const listBrands = await homePageApi.getListBrands();
    return listBrands
})


const listBrandSlice = createSlice({
    name:"listBrands",
    initialState: {
        listBrands : [],
        loading:false,
        error:""
    }, 
    reducers:{
    },
    extraReducers: {
        [getListBrands.pending] : (state) => {
            state.loading = true
        },
        [getListBrands.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListBrands.fulfilled] : (state, action) => {
            state.loading = false;
            state.listBrands= action.payload
        }

    }
})

const {reducer : brandReducer, actions} = listBrandSlice;
export default brandReducer;