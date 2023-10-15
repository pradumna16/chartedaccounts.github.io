import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CAprofile from './CAprofile';
import Mid from './Mid';
import ResultC from './ResultC';
function Routing() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Mid />} />
        <Route path="/ca-profile/:id" element={<CAprofile />} />
        <Route path="/search" component={ResultC} />
      </Routes>
    </Router>
    
  );
}

export default Routing;
