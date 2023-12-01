import React from "react";
import CarList from "../components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../redux/selectors";
import { fetchCars } from "../redux/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <div>{cars && <CarList />}</div>;
};

export default CatalogPage;
