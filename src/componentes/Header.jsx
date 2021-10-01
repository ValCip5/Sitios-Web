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
                <li><a target="_blank" href="https://www.linkedin.com/in/valent%C3%ADn-cipriano-1245391a3/"><i className="bi-linkedin"></i></a></li>
                <li><a target="_blank" href="https://github.com/ValCip5"><i className="bi-github"></i></a></li>
                <li><a target="_blank" href="https://www.instagram.com/valcip5/"><i className="bi-instagram"></i></a></li>
            </ul>

            <div>
                <p>Desarrollador Web Front-end, estudiante en Da Vinci.</p>
            </div>
        </header>
        
    )
}

export default Header
