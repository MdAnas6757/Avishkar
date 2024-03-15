import React from 'react';
import { BrowserRouter,  Route, Routes,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import './App.css';
import Dashboard from './components/Aqi/Dashboard';
const App = () => {
  const user=JSON.parse(localStorage.getItem('profile'));
  return (
    
    <BrowserRouter>
        <Navbar />
        <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={< />} />
        <Route
        path="/auth"
        element={user ? <Navigate to="/" replace /> : <Auth />}
      />
         <Route path='/aqiDashboard' element={<Dashboard/>} />
       {/* Add more routes as needed */}
        </Routes>
       
    </BrowserRouter>
  );
};

export default App;