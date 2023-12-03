import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from '../redux/carsSlice';
import { filterReducer } from '../redux/filterSlice';
import { favoriteReducer } from '../redux/favoriteCarsSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {

  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'favorite',
  storage,
}

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer)

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cars: carsReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);