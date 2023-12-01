import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';


const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='favorites' element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </main>
  );
}

export default App;
