import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import NavTabs from './components/NavTabs'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'



function App() {
  return (
    <div>
      {/* Navbar */}


      {/* Container */}
      <Router>
        <Navbar />
        <div className="page-content">
          <div className="container">
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
