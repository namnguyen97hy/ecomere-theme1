import homePageApi from "./api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListReview= createAsyncThunk('clientReview/getClientReview' , async (params, thunkAPI) => {
    const listClientReview = await homePageApi.getListClientReview();
    return listClientReview
})


const clientReviewSlice = createSlice({
    name:"clientReview",
    initialState: {
        listReview : [],
        loading:false,
        error:""
    }, 
    reducers:{
    },
    extraReducers: {
        [getListReview.pending] : (state) => {
            state.loading = true
        },
        [getListReview.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListReview.fulfilled] : (state, action) => {
            state.loading = false;
            state.listReview = action.payload
        }

    }
})

const {reducer : clientReviewReducer, actions} = clientReviewSlice;
export default clientReviewReducer;