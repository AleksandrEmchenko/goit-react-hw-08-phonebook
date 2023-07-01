import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useDispatch, useSelector } from "react-redux";
import { signUpThunk } from "redux/auth/thunk";

import {
  Container,
  ContactFild,
  ContactLabel,
} from "../../ContactForm/ContactForm.styled";
import { HomePageBody } from "../Homepage/Homepage.styled";
import { selectIsAuth } from "redux/selectors";
import { RegBtn } from "./RegPage.styled";

function RegForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
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
    dispatch(
      signUpThunk({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        Notify.success("Successful registration");

        navigate("/phonebook");
      });
  };

  return (
    <HomePageBody>
      <h1>Registration</h1>
      <form onSubmit={handleSubmitForm}>
        <Container>
          <ContactLabel>
            Name
            <ContactFild
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactLabel>

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
          <RegBtn type="submit" disabled={!email || !password}>
            Registration
          </RegBtn>
        </Container>
      </form>
    </HomePageBody>
  );
}

export default RegForm;
