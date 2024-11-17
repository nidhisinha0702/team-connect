import React from 'react';

function Project() {
            {/* <a href="/devicedemo/index.html" target="_blank" rel="noopener noreferrer" className="project">View Projects</a> */}

    const openDeviceDemo = () => {
        document.querySelector("button").addEventListener("click", () => {
            console.log("Button clicked!");
          });        
      window.open('/devicedemo/index.html', '_blank');
    };
    return (
        <div id="project" className="section project">
            <h1>Explore Our Previous Projects</h1>
            <p>Check out our additional work and projects.</p>
        <button onClick={openDeviceDemo} className="button">Open Device Demo in New Tab</button>
      </div>
    );
  };

export default Project;