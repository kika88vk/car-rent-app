import React from "react";
import CarList from "../../components/CarList/CarList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { fetchCars, fetchOnePageCars } from "../../redux/operations";
import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import { LIMIT } from "../../redux/operations";

const CatalogPage = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const onePageCars = useSelector(fetchOnePageCars);

  useEffect(() => {
    dispatch(fetchCars());

    if (page === 0) {
      setPage(page + 1);
      return;
    }
    dispatch(fetchOnePageCars(page));
  }, [dispatch, page]);

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const totalPage = onePageCars?.length < LIMIT / page;

  return (
    <section>
      <Filter />
      <div>{cars && <CarList />}</div>
      {totalPage && (
        <button
          className={css.btnCatalog}
          type="button"
          onClick={handleChangePage}
        >
          Load more
        </button>
      )}
    </section>
  );
};

export default CatalogPage;
