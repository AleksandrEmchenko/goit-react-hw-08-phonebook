import { Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import LoginForm from "./Pages/LogIn/LogInForm";
import RegForm from "./Pages/RegisterPage/RegPage";
import Phonebook from "./Pages/Phonebook/Phonebook";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileThunk } from "redux/auth/thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) return;

    dispatch(getProfileThunk());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/registration" element={<RegForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
}

export default App;
