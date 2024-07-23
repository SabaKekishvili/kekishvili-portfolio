import Myportfolio from './components/myportfolio'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Myportfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
