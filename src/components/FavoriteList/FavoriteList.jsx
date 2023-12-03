import React from "react";
import { selectFavoriteCars } from "../../redux/selectors";
import { useSelector } from "react-redux";
import css from "./FavoriteList.module.css";
import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";

const FavoriteList = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <ul className={css.carList}>
      {favoriteCars?.map((car) => (
        <FavoriteListItem
          key={car.idCar}
          image={car.image}
          make={car.make}
          model={car.model}
          year={car.year}
          rentalPrice={car.rentalPrice}
          address={car.address}
          rentalCompany={car.rentalCompany}
          type={car.type}
          idCar={car.idCar}
          functionalities={car.functionalities}
          description={car.description}
          fuelConsumption={car.fuelConsumption}
          engineSize={car.engineSize}
          accessories={car.accessories}
          rentalConditions={car.rentalConditions}
          mileage={car.mileage}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
