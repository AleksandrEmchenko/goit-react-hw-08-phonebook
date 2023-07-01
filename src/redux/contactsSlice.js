import {
  getContactThunk,
  createContactThunk,
  deleteContactThunk,
} from "./auth/thunk";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const handlePending = (state) => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
  state.contacts.isLoading = false;

  const index = state.contacts.items.findIndex(
    (contact) => contact.id === payload
  );
  if (index !== -1) {
    state.contacts.items.splice(index, 1);
  }

  // state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload)
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactThunk.pending, handlePending)
      .addCase(getContactThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactThunk.rejected, handleRejected)

      .addCase(createContactThunk.pending, handlePending)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      .addCase(createContactThunk.rejected, handleRejected)

      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
