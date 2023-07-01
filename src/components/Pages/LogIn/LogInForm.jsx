import { useDispatch, useSelector } from "react-redux";
import { HomePageBody } from "../Homepage/Homepage.styled";
import { useEffect, useState } from "react";
import {
  Container,
  ContactFild,
  ContactLabel,
} from "../../ContactForm/ContactForm.styled";
import { loginThunk } from "redux/auth/thunk";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import { selectIsAuth } from "redux/selectors";
import { LogBtn } from "./LogInForm.styled";

function LoginForm() {
  const isAuth = useSelector(selectIsAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    isAuth && navigate("/phonebook");
    isAuth && Notify.success("Auth successful");
  }, [isAuth, navigate]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/phonebook");
      });
    setEmail("");
    setPassword("");
  };

  return (
    <HomePageBody>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmitForm}>
        <Container>
          <ContactLabel>
            Login
            <ContactFild
              type="email"
              name="email"
              placeholder="Enter login"
              value={email}
              onChange={handleChange}
              required
            />
          </ContactLabel>
          <ContactLabel>
            Password
            <ContactFild
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange}
              required
            />
          </ContactLabel>
          <LogBtn type="submit" disabled={!email || !password}>
            LogIn
          </LogBtn>
        </Container>
      </form>
    </HomePageBody>
  );
}

export default LoginForm;
