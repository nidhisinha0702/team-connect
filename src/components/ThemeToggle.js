import React, { useState, useEffect } from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            <img id="theme-icon" src={darkMode ? '/assets/moon.png' : '/assets/sun.png'} alt="Toggle Theme" class="resizable-img" />
        </button>
    );
}

export default ThemeToggle;
