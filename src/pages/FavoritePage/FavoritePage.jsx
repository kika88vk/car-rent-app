import React from "react";
import { Link } from "react-router-dom";
import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  return (
    <div>
      <h1>Pick a favorite car by touching the heart 💙 on Catalog page</h1>
      <Link to="/catalog" className={css.link}>
        Catalog page
      </Link>
    </div>
  );
};

export default FavoritePage;
