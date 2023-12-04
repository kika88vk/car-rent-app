import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (

    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<CatalogPage />} />
        <Route path='favorites' element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>

  );
}

export default App;
