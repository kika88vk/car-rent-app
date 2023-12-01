import React from "react";
import sprite from "../../assets/sprite.svg";

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
    <li>
      <img src={image} alt={model} />
      <svg>
        <use href={`${sprite}#icon-heart-normal`} />
      </svg>
      <p>{make}</p>
      <p>{model},</p>
      <p>{year}</p>
      <p>{rentalPrice}</p>
      <span>{address}</span>
      <span>{rentalCompany}</span>
      <span>{type}</span>
      <span>{idCar}</span>
      <span>{functionalities}</span>
      <button type="button">Learn more</button>
    </li>
  );
};

export default CarListItem;
