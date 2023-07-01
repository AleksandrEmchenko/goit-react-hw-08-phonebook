import { Link, useLocation } from "react-router-dom";

import { HomePageBody, AuthBtn } from "./Homepage.styled";

function Homepage() {
  const location = useLocation();
  return (
    <HomePageBody>
      <p>
        WELCOME
        <br />
        to
        <br />
        phonebook
      </p>
      <h3>
        <Link to={`registration`} state={{ from: location }}>
          <AuthBtn type="button">SignUp</AuthBtn>
        </Link>{" "}
        or{" "}
        <Link to={`LogIn`} state={{ from: location }}>
          <AuthBtn type="button">LogIn</AuthBtn>
        </Link>
      </h3>
    </HomePageBody>
  );
}

export default Homepage;
