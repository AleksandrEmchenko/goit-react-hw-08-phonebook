import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createContacts,
  deleteContacts,
  getContacts,
  getProfile,
  login,
} from "./services";

export const getContactThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const contacts = createContacts(contact);

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await deleteContacts(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
////////
export const getProfileThunk = createAsyncThunk("auth/profile", () => {
  getProfile();
});

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(body);
      dispatch(getProfileThunk());
      return data;
    } catch (error) {
      
      return rejectWithValue(error.response.data.message);
    }
  }
);
