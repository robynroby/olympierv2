import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="your-logo.png" alt="Logo" />
                <h4>Olympier Org</h4>
            </div>
            <ul className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact" className="navbar__contact-btn">Contact Us</a>
                </li>
            </ul>
            <div className="navbar__menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <span>x</span> : <span>&#9776;</span>}
            </div>
        </nav>
    );
};

export default Navbar;
