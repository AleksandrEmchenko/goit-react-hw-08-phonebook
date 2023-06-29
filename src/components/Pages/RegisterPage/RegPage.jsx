// import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  Container,
  ContactFild,
  ContactLabel,
  ButtonSub,
} from "../../ContactForm/ContactForm.styled";
import { HomePageBody } from "../Homepage/Homepage.styled";

import { signUp } from "redux/services";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function RegForm() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
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

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
    //   dispatch(loginUser({ name: userName, number: password }));

    signUp({
      name,
      email,
      password,
    }).then(() => {
      Notify.success('Successful registration');
      Notify.success('Enter your e-mail and password');
      navigate("/login");
      
    });
    
    // setName("");
    // setEmail("");
    // setPassword("");
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
          <ButtonSub type="submit">Registration</ButtonSub>
        </Container>
      </form>
     
      
    </HomePageBody>
  );
}

export default RegForm;
