import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Mid from './component/Mid.jsx';
import Footer from './component/Footer';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'
import Routing from './component/Routing.jsx';
import CAprofile from './component/CAprofile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Router>
      <Mid />
      <CAprofile/>
      <App />
    <Footer />
    </Router>
    
    <Routing/>
  </React.StrictMode>
);
