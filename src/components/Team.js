import React from 'react';
import teamData from '../components/TeamData';


function Team() {
    return (
        <div id="team-members" className="section team">
            <h1>Meet Our Team</h1>
            <div className="card-container">
                {teamData.map(member => (
                    <div key={member.name} className="member">
                        <img src={member.avatar} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>Interests: {member.interest}</p>
                        <p>Hometown: {member.hometown}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
