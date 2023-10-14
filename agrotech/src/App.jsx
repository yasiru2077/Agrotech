import { useContext, useState } from 'react';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import { AuthContext } from './context/AuthContext';
import Welcome from './pages/welcome/Welcome';
import Grow from './pages/grow/Grow';
import Sell from './pages/sell/Sell';
import SellsConformationPage from './pages/sell/SellsConformationPage';
import AboutPage from './pages/aboutpage/AboutPage';



function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Welcome />} ></Route>

    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
        <Route path="/grow" element={<Grow/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/sellConfor" element={<SellsConformationPage/>} />
        <Route path="/about" element={<AboutPage/>} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
