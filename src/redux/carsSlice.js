import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import { fetchOnePageCars } from "./operations";

const initialState = {
    cars: [],
    onePageCars: [],
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cars = action.payload;
                state.error = null;
            })
            .addCase(fetchOnePageCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.onePageCars = [...state.onePageCars, ...action.payload];
                state.error = null;
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const carsReducer = carsSlice.reducer;