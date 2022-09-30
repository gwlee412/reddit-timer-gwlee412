import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>

  );
}

export default Router;
