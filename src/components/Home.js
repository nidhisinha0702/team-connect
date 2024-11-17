import React from 'react';
import {Link,Routes,Route,useNavigate} from 'react-router-dom';
import Team from './Team';
import Map from './Map';
import Project from './Project';

function Home() {
    const navigate = useNavigate();
    return (
        <>
        <div id="home" className="section home">
            <h1>Welcome to Mavericks</h1>
            <p>Get to know our amazing team and explore our projects.</p>
        </div>
        <div id="team" className="section team">
            <h1>Meet the Team</h1>
            <p>Get to know the amazing people behind our projects.</p>
            <button onClick={() => navigate('/team')}>Learn More</button>
            {/* <Link to="/team" className='team-link'>Learn More</Link> */}
        </div>
        <div id="map" className='section map'>
            <h1>See where our team members belong</h1>
            <p>Explore our team's locations and find out more about them</p>
            <button onClick={() => navigate('/map')}>View Map</button>
        </div>
        <div id="project" className='section project'>
            <h1>Explore Our Previous Projects</h1>
            <p>Check out our additional work and projects.</p>
            <button onClick={() => navigate('/project')}>View Projects</button>
        </div>
        <Routes>
                <Route path="/team" element={<Team />} />
                <Route path="/map" element={<Map />} />
                <Route path="/project" element={<Project />} />
        </Routes>
        </>
    );
}

export default Home;
