import React, { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./CarListItem.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import CarInfo from "../CarInfo/CarInfo";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

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
        <span className={css.descrSpan}>{address}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{rentalCompany}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{type}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{idCar}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{functionalities}</span>
      </div>

      <button type="button" className={css.carButton} onClick={onClickModal}>
        Learn more
      </button>
      {isModalOpen && (
        <ModalWindow onClick={onClickModal}>
          <CarInfo
            onClick={onClickModal}
            idCar={idCar}
            year={year}
            make={make}
            model={model}
            type={type}
            image={image}
            description={description}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            accessories={accessories}
            functionalities={functionalities}
            rentalPrice={rentalPrice}
            rentalCompany={rentalCompany}
            address={address}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </ModalWindow>
      )}
    </li>
  );
};

export default CarListItem;
