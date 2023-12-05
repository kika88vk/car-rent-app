// import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.cars;

export const selectOnePageCars = state => state.cars.onePageCars;

export const selectFilterList = state => state.filter.filter;

export const selectFavoriteCars = state => state.favorite.favorite;