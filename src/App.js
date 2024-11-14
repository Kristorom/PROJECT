import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Tours from './pages/Tours';
import Contacts from './pages/Contacts';
import LogIn from './pages/LoginRegister';
import './styles/App.css';


const App = () => {
    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
            
        </Router>
    );
};

export default App;
