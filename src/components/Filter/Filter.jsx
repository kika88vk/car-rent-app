import React from "react";
import { options } from "../../redux/carsCategoriesConstans";
import css from "./Filter.module.css";
import sprite from "./../../assets/sprite.svg";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFilterList } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    dispatch(setFilterList(e.value));
  };
  return (
    <div className={css.filterContainer}>
      <Select
        options={options}
        placeholder="Enter the text"
        onChange={handleSelectChange}
      />
      {/* <select className={css.filterSelect} placeholder="Enter the text">
        <option>red</option>
        <option>green</option>
        <option>blue</option>
      </select>
      <svg className={css.iconChevron}>
        <use href={`${sprite}#icon-chevron-down-new`} />
      </svg> */}
    </div>
  );
};

export default Filter;
