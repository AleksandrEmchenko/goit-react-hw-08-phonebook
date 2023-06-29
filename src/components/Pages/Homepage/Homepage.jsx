import { Link, useLocation } from "react-router-dom";

import { HomePageBody } from "./Homepage.styled";

function Homepage() {
  const location = useLocation();
  return (
    <HomePageBody>
      <h2>Welcome</h2>
      <p>to</p>
      <p>phonebook</p>
      <h3>
        <Link to={`registration`} state={{ from: location }}>
          SignUp
        </Link>{" "}
        or{" "}
        <Link to={`LogIn`} state={{ from: location }}>
          LogIn
        </Link>
      </h3>
    </HomePageBody>
  );
}

export default Homepage;
