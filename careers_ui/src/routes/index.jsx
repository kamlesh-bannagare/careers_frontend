// src/routes/Routes.js
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/common/Loading/Loading'
const Home = lazy(() => import('../pages/HomePage/HomePage'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
