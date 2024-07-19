import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Secondpage from './containers/Secondpage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Secondpage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
