import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
    isLoading: false,
    error: null,
};

const favoriteCarsSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavoriteCars(state, action) {
            state.favorite.push(action.payload);
        },
        deleteFavoriteCar(state, action) {
            state.favorite = state.favorite.filter(fav => fav.id !== action.payload.id);
        },
    }
});


export const { setFavoriteCars, deleteFavoriteCar } = favoriteCarsSlice.actions;
export const favoriteReducer = favoriteCarsSlice.reducer;