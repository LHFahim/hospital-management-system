import React from 'react';
import Form from './pages/Form';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDoctor from './pages/AddDoctor';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
