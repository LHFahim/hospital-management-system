import React from 'react';
import Form from './pages/Form';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDoctor from './pages/AddDoctor';
import ViewDoctor from './pages/ViewDoctor';
import Appoinment from './pages/Appoinment';
import MedicalServices from './pages/MedicalServices';
import ViewMedicalServices from './pages/ViewMedicalServices';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/ViewDoctor" element={<ViewDoctor />} />
        <Route path="/makeAppointment" element={<Appoinment />} />

        <Route path="/addMedicalServices" element={<MedicalServices />} />
        <Route path="viewMedicalServices" element={<ViewMedicalServices />} />
      </Routes>
    </div>
  );
}

export default App;
