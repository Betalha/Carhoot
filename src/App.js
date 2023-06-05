import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/home";
import Regras from './pages/regras';
import Pergunta01 from './pages/pergunta01';
import Pergunta02 from './pages/pergunta02';
import Pergunta03 from './pages/pergunta03';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/regras" element={<Regras/>} />
        <Route path="/01" element={<Pergunta01/>} />
        <Route path="/02" element={<Pergunta02/>} />
        <Route path="/03" element={<Pergunta03/>} />

      </Routes>
    </Router>
  );
}

export default App;
