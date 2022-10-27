import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import New from './New';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<New />} />
      </Routes>
    </div>

  );
}
