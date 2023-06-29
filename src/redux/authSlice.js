import {createSlice} from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './thunk';

const initialState ={
    access_token: '',
    isLoading: false,
    error: '',
}

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
} 

const handleFulfilled =(state, {payload}) => {
    state.isLoading = false;
    state.access_token = payload.access_token;
}

const handleFulfilledProfile =(state, {payload}) => {
    state.isLoading = false;
    state.profile = payload;
}

const handleRejected = (state, {error, payload}) => {
    state.isLoading = false;
    state.error = payload ?? error.message;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(loginThunk.fulfilled, handleFulfilled)
        .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
        .addMatcher(({type}) => type.endsWith('/pending'), handlePending)
        .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const authReducer = authSlice.reducer;