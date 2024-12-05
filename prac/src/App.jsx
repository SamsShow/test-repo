import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Regestration';


function App() {
  const [store, setStore] = useState("");
  const regData = (data) => {
    setStore(data);
  }
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration regData={setStore}/>} />
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;