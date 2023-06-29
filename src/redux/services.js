import axios from "axios";

const BASE_URL = "https://648e04be2de8d0ea11e87e41.mockapi.io";

export const getContacts = async () => {
  const data = await axios.get(`${BASE_URL}/contacts`);
  return data.data;
};

export const createContacts = async (contact) => {
  const responce = await axios.post(`${BASE_URL}/contacts`, contact);
  return responce.data;
};

export const deleteContacts = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data.id;
};
/////
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = token;
}



export const signUp = async (body) => {
  return await instance.post("/users/signup", body);
};

export const login = async (body) => {
  // return await instance.post("/users/login", body);
  const {data} =  await instance.post("/users/login", body);
  if ('access_token' in data) setToken (`Bearer ${data.access_token}`)
  return data;
};

export const getProfile = async () => {
  // return await instance.post("/users/login", body);
  const {data} =  await instance("/users/profile");
  return data;
};