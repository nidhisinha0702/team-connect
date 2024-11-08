import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Map from './components/Map';
import Project from './components/Project';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li><ThemeToggle /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/team">Team Members</Link></li>
                    <li><Link to="/map">Interactive Map</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/map" element={<Map />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </div>
    );
}

export default App;
