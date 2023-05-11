import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from '../pages/List';
import Dashboard from '../pages/Dashboard';

const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/List" element={<List/>} />
  </Routes>
);

export default RoutesApp;
