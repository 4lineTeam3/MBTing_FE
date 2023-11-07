import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from "./pages/Result"; 
import PageENTP from "./pages/MBTI/PageENTP"; 
import React,{useEffect, useState}  from 'react';
import './style/App.css'; 

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/result" element={<Result />} /> 
        <Route path="/entp" element={<PageENTP />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
