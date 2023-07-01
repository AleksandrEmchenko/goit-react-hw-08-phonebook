import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createContacts,
  deleteContacts,
  getContacts,
  getProfile,
  logOut,
  login,
  signUp,
} from "../../services/services";

export const getContactThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const newContact = await createContacts(contact);

      return newContact;
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
export const signUpThunk = createAsyncThunk(
  "users/signUp",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await signUp(body);
      // dispatch(signUp());
      return data;
    } catch (error) {
      // return error
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProfile();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(body);
      dispatch(getProfileThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "users/logOut",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOut();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
