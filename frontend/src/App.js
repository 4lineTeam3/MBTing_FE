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
import PageINFJ from "./pages/MBTI/pageINFJ"; 
import PageISFJ from "./pages/MBTI/pageISFJ"; 
import PageLogin from "./pages/Login/pageLogin"; 
import PwReset from "./pages/Login/pwReset"; 
import PageJoin from "./pages/Join/PageJoin"; 
import ProfileDetail from "./pages/Profile/ProfileDetail"; 
import Question from "./pages/questionPages/questionMain";
import SetProfile from "./pages/setProfilePages/setProfileMain";
import More from "./pages/matchingPages/morePage";
import Matching from "./pages/matchingPages/matchingMain";
import React,{useEffect}  from 'react';
import MatchingMain from "./pages/matchingPages/matchingMain"
import PageStart from "./pages/PageStart" ;
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
        <Route path="/" element={<PageStart />} /> 
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
        <Route path="/infj" element={<PageINFJ />} /> 
        <Route path="/isfj" element={<PageISFJ />} /> 
        <Route path="/auth/" element={<PageLogin />} /> 
        <Route path="/pwReset" element={<PwReset />} /> 
        <Route path="/register/" element={<PageJoin />} /> 
        <Route path="/Matching" element={ <MatchingMain/>} /> 
        <Route path="/profile-detail" element={<ProfileDetail />} /> 
        <Route path="/question" element={<Question />} /> 
        <Route path="/More" element={<More />} /> 
        <Route path="/setProfile" element={<SetProfile />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
