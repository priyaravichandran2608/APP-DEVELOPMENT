import React, { useRef } from 'react';
import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/tiptap/styles.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Homepage from './Pages/Homepage';
import {  Route, Routes, } from 'react-router-dom';
import LoginPage from './Pages/Loginpage';
import SignupPage from './Signuppage';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfile from './Pages/TalentProfile';
import PostJob from './PostJob/PostJob';
import JobDescPage from './Pages/JobDescPage';
import PostJobPage from './Pages/PostJobPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import Homeafterlogin from './Pages/Homeafterlogin';

function App() {
  const myRef = useRef(null); // Initialize with null
  const theme= createTheme({
    focusRing:"never",
    primaryColor:'bright-sun',
    primaryShade:4,
    colors:{
     'bright-sun': ['#fffbeb','#fff3c6','#ffe588', '#ffd149','#ffbd20',
       '#f99b07', '#dd7302', '#b75006','#943c0c', '#7a330d', '#461902'],
     'mine-shaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0', '#888888',
      '#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d']
    },
    fontFamily:"poppins,snas-serif"
  })
  return (
    
    <MantineProvider defaultColorScheme='dark' theme={theme}>
          <div className='relative'>

      <Routes>
        <Route path='*' element={ <Homepage/>}/>
        <Route path='/homeafterlogin' element={ <Homeafterlogin/>}/>
        <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
        <Route path='/find-jobs' element={<FindJobs />}/>
        <Route path='/post-job' element={<PostJobPage/>}/>
        <Route path='/apply-job' element={<ApplyJobPage/>}/>
        <Route path='/find-talent' element={<FindTalentPage />}/>
        <Route path='/jobs' element={<JobDescPage />}/>
        <Route path='/talent-profile' element={<TalentProfile />}/>
      </Routes>
          </div>
    </MantineProvider>
  );
}

export default App;
