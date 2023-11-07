import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from "./pages/Result"; 
import PageENTP from "./pages/MBTI/PageENTP"; 
import PageENFP from "./pages/MBTI/pageENFP"; 
import PageESTP from "./pages/MBTI/pageESTP"; 
import PageENTJ from "./pages/MBTI/pageENTJ"; 
import PageESTJ from "./pages/MBTI/pageESTJ"; 
import PageESFP from "./pages/MBTI/pageESFP"; 
import PageENFJ from "./pages/MBTI/pageENFJ"; 
import PageESFJ from "./pages/MBTI/pageESFJ"; 
import PageINTP from "./pages/MBTI/pageINTP"; 
import PageINFP from "./pages/MBTI/pageINFP"; 
import PageISTP from "./pages/MBTI/pageISTP"; 
import PageINTJ from "./pages/MBTI/pageINTJ"; 
import PageISTJ from "./pages/MBTI/pageISTJ"; 
import PageISFP from "./pages/MBTI/pageISFP"; 
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
        <Route path="/enfp" element={<PageENFP />} /> 
        <Route path="/estp" element={<PageESTP />} /> 
        <Route path="/entj" element={<PageENTJ />} /> 
        <Route path="/estj" element={<PageESTJ />} /> 
        <Route path="/esfp" element={<PageESFP />} /> 
        <Route path="/enfj" element={<PageENFJ />} /> 
        <Route path="/esfj" element={<PageESFJ />} /> 
        <Route path="/intp" element={<PageINTP />} /> 
        <Route path="/infp" element={<PageINFP />} /> 
        <Route path="/istp" element={<PageISTP />} /> 
        <Route path="/intj" element={<PageINTJ />} /> 
        <Route path="/istj" element={<PageISTJ />} /> 
        <Route path="/isfp" element={<PageISFP />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
