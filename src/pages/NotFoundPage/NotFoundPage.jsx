import React from "react";
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.title}>O no! Such page does not exist 😢</h1>

      <h3 className={css.direction}>Maybe you want go back to the Home page</h3>
      <Link to="/" className={css.link}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
