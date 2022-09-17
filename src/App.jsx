import React from 'react';
import Form from './pages/Form';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDoctor from './pages/AddDoctor';
import ViewDoctor from './pages/ViewDoctor';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/ViewDoctor" element={<ViewDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
