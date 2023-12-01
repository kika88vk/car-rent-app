import React from "react";
import sprite from "../../assets/sprite.svg";
import css from "./CarListItem.module.css";

const CarListItem = ({
  idCar,
  year,
  make,
  model,
  type,
  image,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  return (
    <li className={css.listItem}>
      <img src={image} alt={model} className={css.carImg} />
      <svg className={css.icon}>
        <use href={`${sprite}#icon-heart-normal`} />
      </svg>
      <div className={css.wrapName}>
        <div className={css.carName}>
          <p>{make}</p>
          <p className={css.accent}>{model},</p>
          <p>{year}</p>
        </div>
        <p className={css.price}>{rentalPrice}</p>
      </div>

      <div className={css.descrText}>
        <span>{address}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{idCar}</span>
        <span>{functionalities}</span>
      </div>

      <button type="button">Learn more</button>
    </li>
  );
};

export default CarListItem;
