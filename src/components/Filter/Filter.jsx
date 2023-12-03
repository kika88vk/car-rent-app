import React from "react";
import { options } from "../../redux/carsCategoriesConstans";
import css from "./Filter.module.css";
// import sprite from "./../../assets/sprite.svg";
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
    </div>
  );
};

export default Filter;
