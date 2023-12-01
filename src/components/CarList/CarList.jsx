import React from "react";
import CarListItem from "../CarListItem/CarListItem";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";

const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul>
      {cars.map((car) => (
        <CarListItem
          key={car.id}
          image={car.img}
          make={car.make}
          model={car.model}
          year={car.year}
          rentalPrice={car.rentalPrice}
          address={car.address}
          rentalCompany={car.rentalCompany}
          type={car.type}
          idCar={car.id}
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

export default CarList;
