import React from "react";
import CarList from "../../components/CarList/CarList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { fetchCars, fetchOnePageCars } from "../../redux/operations";
import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchOnePageCars(page));
  }, [dispatch, page]);

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <section>
      <Filter />
      <div>{cars && <CarList />}</div>
      <button
        className={css.btnCatalog}
        type="button"
        onClick={handleChangePage}
      >
        Load more
      </button>
    </section>
  );
};

export default CatalogPage;
