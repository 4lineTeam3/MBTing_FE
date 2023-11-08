import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionMain from "./pages/questionPages/questionMain"; 
import React,{useEffect, useState}  from 'react';
import '../src/App.css'; 
import MatchingMain from './pages/matchingPages/matchingMain';
import MorePage from './pages/matchingPages/morePage';

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
      <Route path="/Question" element={<QuestionMain/>} /> 
      <Route path="/Matching" element={<MatchingMain/>} /> 
      <Route path="/More" element={<MorePage/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
