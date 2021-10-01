import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <div>
                <div className="backImage"></div>
                <img src="img/yo.png" alt="Yo, Valentín"/>
            </div>
            <h1>Valentín Cipriano</h1>
            <ul className="social">
                <li><a href="#"><i className="bi-linkedin"></i></a></li>
                <li><a href="#"><i className="bi-github"></i></a></li>
                <li><a href="#"><i className="bi-instagram"></i></a></li>
            </ul>

            <div>
                <p>Desarrollador Web Front-end, estudiante en Da Vinci.</p>
            </div>
        </header>
        
    )
}

export default Header
