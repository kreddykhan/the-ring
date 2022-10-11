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
    <Router>
      <Navbar />
      <Routes>
        <Route path='the-ring/' exact element={<Home/>} />
        <Route path='the-ring/notes' element={<Notes/>} />
        <Route path='the-ring/timer' element={<Timer/>} />
        <Route path='the-ring/videos' element={<Videos/>} />
      </Routes>
    </Router>
  );
}
  

export default App;

