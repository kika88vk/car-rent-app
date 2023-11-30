import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.cars;