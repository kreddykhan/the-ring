import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Timer from './pages/Timer';
import Videos from './pages/Videos';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/timer' element={<Timer/>} />
        <Route path='/videos' element={<Videos/>} />
      </Routes>
    </>
  );
}
  

export default App;

{/* <HashRouter>
    <Route
      exact
      path='/'
      component={LandingPage}
    />
    <Route
      exact
      path='/posts'
      component={Posts}
    />
  </HashRouter> */}