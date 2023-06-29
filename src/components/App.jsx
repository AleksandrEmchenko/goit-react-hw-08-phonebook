import { Route, Routes } from "react-router-dom";

// import { useSelector } from "react-redux";
import Homepage from "./Pages/Homepage/Homepage";
import LoginForm from "./Pages/LogIn/LogInForm";
import RegForm from "./Pages/RegisterPage/RegPage";
import Phonebook from "./Pages/Phonebook/Phonebook";
import Layout from "./Layout/Layout";

function App() {
  // const isLoading = useSelector((store) => store.contacts.contacts.loading);
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
