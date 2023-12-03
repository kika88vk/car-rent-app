import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from '../redux/carsSlice';
import { filterReducer } from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cars: carsReducer,

  },
});
