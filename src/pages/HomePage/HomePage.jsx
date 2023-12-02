import React from "react";
import css from "./HomePage.module.css";
import image from "./../../assets/images/red-car-png.png";

const HomePage = () => {
  return (
    <div>
      <img src={image} className={css.imgHome} alt="car" loading="lazy" />
      <h2 className={css.title}>Car rent website</h2>
      <p className={css.text}>You can find any vehicle for every taste</p>
    </div>
  );
};

export default HomePage;
