import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={css.header}>
          <NavLink className={css.headerText} to="/">
            Home
          </NavLink>
          <NavLink className={css.headerText} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={css.headerText} to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </header>
      <main className={css.mainStyle}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
