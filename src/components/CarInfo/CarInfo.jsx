import React from "react";
import css from "./CarInfo.module.css";
import sprite from "./../../assets/sprite.svg";

const CarInfo = ({
  onClick,
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
    <div className={css.CarInfoContainer}>
      <img src={image} alt={model} className={css.carImgModal} />

      <div className={css.carName}>
        <p>{make}</p>
        <p className={css.accent}>{model},</p>
        <p>{year}</p>
      </div>

      <div className={css.descrText}>
        <span className={css.descrSpan}>{address}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>Id: {idCar}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>Year: {year}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>Type: {type}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>
          Fuel Consumption: {fuelConsumption}
        </span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>Engine size: {engineSize}</span>
      </div>
      <p className={css.description}>{description}</p>
      <p className={css.accessTitle}>Accessories and functionalities:</p>
      <div>
        <span>{accessories}</span>
        <span>{functionalities}</span>
      </div>
      <p className={css.accessTitle}>Rental Conditions:</p>
      <div>
        <p>Minimum age: {rentalConditions}</p>
        <p>Mileage: {mileage}</p>
        <p>Price: {rentalPrice}</p>
      </div>
      <a href="tel:+380730000000" className={css.carModalBtn}>
        Rental car
      </a>
    </div>
  );
};

export default CarInfo;
