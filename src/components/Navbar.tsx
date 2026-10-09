import { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        const newTheme = !isDark;

        setIsDark(newTheme);

        document.documentElement.setAttribute(
            'data-theme',
            newTheme ? 'light' : 'dark'
        );
    }
    return (
        <nav className="navbar">
            <a href="#home" className="navbar-name">
                Dilvir Parmar</a>

            <div className="navbar-right">
                <div className="navbar-links">

                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
                
                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDark ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </nav>
    )
}

export default Navbar;