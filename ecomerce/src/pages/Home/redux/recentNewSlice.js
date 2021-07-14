import homePageApi from "./api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListRecentNews = createAsyncThunk('recentNews/getListRecentNews' , async (params, thunkAPI) => {
    const listRecentNews = await homePageApi.getListRecentNews();
    return listRecentNews
})


const recentNewsSlice = createSlice({
    name:"recentNews",
    initialState: {
        listRecentNews : [],
        loading:false,
        error:""
    }, 
    reducers:{
    },
    extraReducers: {
        [getListRecentNews.pending] : (state) => {
            state.loading = true
        },
        [getListRecentNews.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListRecentNews.fulfilled] : (state, action) => {
            state.loading = false;
            state.listRecentNews= action.payload
        }

    }
})

const {reducer : recentNewsReducer, actions} = recentNewsSlice;
export default recentNewsReducer;