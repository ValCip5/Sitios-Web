import React from 'react'
import './PaginaWeb.css'

function PaginaWeb() {
    return (
        <ul>
            <li>
                <a href="https://php-albums.herokuapp.com/">
                        <div className="left">
                            <h2>Albums (PHP)</h2>
                        </div>
                        <div className="right">
                            <i className="bi-chevron-double-right"></i>
                        </div>
                    </a>
            </li>

            <li>
            <a href="https://payloadersstrike.web.app/">
                    <div className="left">
                        <h2>Payloaders Strike! (REACT)</h2>
                    </div>
                    <div className="right">
                        <i className="bi-chevron-double-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://cv-falso.herokuapp.com/">
                        <div className="left">
                            <h2>Template de CV (REACT)</h2>
                        </div>
                        <div className="right">
                            <i className="bi-chevron-double-right"></i>
                        </div>
                </a>
            </li>
            <li>
                <a href="https://vida-saludable.herokuapp.com/">
                        <div className="left">
                            <h2>Vida Saludable (HTML)</h2>
                        </div>
                        <div className="right">
                            <i className="bi-chevron-double-right"></i>
                        </div>
                    </a>
            </li>
        </ul>
    )
}

export default PaginaWeb
