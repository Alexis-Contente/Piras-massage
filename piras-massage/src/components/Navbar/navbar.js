import { NavLink } from 'react-router-dom';
import './navbar.css';
import React, {useState, useEffect} from 'react'

function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const toggleNav = () => {
    setToggleMenu(!toggleMenu)
}

useEffect(() => {
    
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

}, [])

    return (
        // NAVBAR
        <nav>
            {(toggleMenu || screenWidth > 900) && (
                <ul className="list">
                    <li><NavLink className="items" to="/">Accueil</NavLink></li>
                    <li><NavLink className="items" to="/massages">Massages</NavLink></li>
                    <li><NavLink className="items" to="/degree">Diplômes</NavLink></li>
                    <li><NavLink className="items" to="/contact">Contact</NavLink></li>
                </ul>
            )}

            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    );
}

export default Navbar;