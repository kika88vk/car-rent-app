import React from "react";
import CarList from "../../components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { fetchCars } from "../../redux/operations";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section>
      <div>{cars && <CarList />}</div>
      <button className={css.btnCatalog} type="button">
        Load more
      </button>
    </section>
  );
};

export default CatalogPage;
