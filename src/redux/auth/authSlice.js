import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk, logOutThunk, loginThunk, signUpThunk } from "./thunk";

const initialState = {
  accessToken: "",
  profile: null,
  isLoading: false,
  error: "",
};

const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.accessToken = payload.token;
  state.profile = payload.user;
  console.log(payload.token);
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.profile = payload;
};

const handleFulfilledLogout = (state) => {
  state.isLoading = false;
  state.profile = null;
  state.accessToken = "";
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload ?? "";
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledLogin)
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
