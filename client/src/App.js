import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="page-content">
          <div className="container">
            <Route exact path={"/"} component={About} />
            <Route path={"/about"} component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
