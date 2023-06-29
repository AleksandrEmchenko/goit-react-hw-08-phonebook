import { useDispatch, useSelector } from "react-redux";
import {HomePageBody} from "../Homepage/Homepage.styled";
import { useEffect, useState } from "react";
import {
    Container,
    ContactFild,
    ContactLabel,
    ButtonSub,
  } from "../../ContactForm/ContactForm.styled";
// import { login } from "redux/services";
import { loginThunk } from "redux/thunk";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

function LoginForm() {
  const isAuth = useSelector(state=>state.auth.access_token)

  const navigate = useNavigate()
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
      isAuth && navigate('/')
      isAuth && Notify.success('Auth successful')
    },[isAuth, navigate])
  
    const handleSubmitForm = (event) => {
      event.preventDefault();
  // console.log({email, password})
  // login ({
  //   email,
  //   password
  // })
    //   dispatch(loginUser({ name: userName, number: password }));
      // setUserName("-");
      // setPassword("-");
      dispatch(loginThunk({email, password}))
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
                value={email.value}
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
                value={password.value}
                onChange={handleChange}
                
                required
              />
            </ContactLabel>
          <ButtonSub type="submit">LogIn</ButtonSub>
          </Container>
  
        </form>
      </HomePageBody>
    );
  }
  
  export default LoginForm;