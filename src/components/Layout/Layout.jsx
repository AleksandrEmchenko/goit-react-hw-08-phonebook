import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavHeader, MenuButton } from "./Layout.styled";
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
            <NavLink to="/">
              <MenuButton type="button">Home</MenuButton>
            </NavLink>
            {isAuth ? (
              <MenuButton onClick={handleLogOut}>LogOut</MenuButton>
            ) : (
              <>
                <NavLink to="/registration">
                  {" "}
                  <MenuButton type="button">Registration</MenuButton>
                </NavLink>
                <NavLink to="/logIn">
                  {" "}
                  <MenuButton type="button">LogIn</MenuButton>
                </NavLink>
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
