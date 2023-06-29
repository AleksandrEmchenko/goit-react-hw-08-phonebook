import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavHeader } from "./Layout.styled";

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavHeader>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Registration">Registration</NavLink>
            <NavLink to="/LogIn">LogIn</NavLink>
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
