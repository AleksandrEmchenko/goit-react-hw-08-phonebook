import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const authInterceptor = (config) => {
  config.headers["Authorization"] = JSON.parse(localStorage.getItem("token")) ?? "";
  return config;
};

instance.interceptors.request.use(authInterceptor);

export const getContacts = async () => {
  const { data } = await instance.get(`/contacts`);
  return data;
};

export const createContacts = async (contact) => {
  const { data } = await instance.post(`/contacts`, contact);
  return data;
};

export const deleteContacts = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const signUp = async (body) => {
  const { data } = await instance.post("/users/signup", body);
  localStorage.setItem("token", JSON.stringify(data.token));

  return data;
};

export const login = async (body) => {
  const { data } = await instance.post("/users/login", body);
  localStorage.setItem("token", JSON.stringify(data.token));
  return data;
};

export const getProfile = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};

export const logOut = async () => {
  const { data } = await instance.post("/users/logout");
  localStorage.removeItem("token");
  return data;
};
