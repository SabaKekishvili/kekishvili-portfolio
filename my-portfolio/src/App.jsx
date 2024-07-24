import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myportfolio from './components/myportfolio';
import Contact from './components/contact';

const basePath = '/kekishvili-portfolio/';

function App() {
    return (
        <Router basename={basePath}>
            <Routes>
                <Route path="/" element={<Myportfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        
    );
}

export default App;
