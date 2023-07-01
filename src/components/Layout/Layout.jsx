import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavHeader } from "./Layout.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "redux/selectors";
import { logOutThunk } from "redux/auth/thunk";

function Layout() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <NavHeader>
            <NavLink to="/">Home</NavLink>
            {isAuth ? (
              <button onClick={handleLogOut}>LogOut</button>
            ) : (
              <>
                <NavLink to="/registration">Registration</NavLink>
                <NavLink to="/logIn">LogIn</NavLink>
              </>
            )}
          </NavHeader>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
