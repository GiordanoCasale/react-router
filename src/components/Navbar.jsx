import React from 'react'
import { NavLink } from 'react-router-dom'  // Componente per la navigazione di React Router

// Componente Navbar per la navigazione dell'applicazione
const Navbar = () => {
    return (
        // Header contenitore principale
        <header>
            {/* Navbar Bootstrap scura con espansione su schermi large */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* Container per centrare il contenuto */}
                <div className="container">
                    {/* Lista non ordinata per i link di navigazione */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Link per la Homepage */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Homepage</NavLink>
                        </li>
                        {/* Link per la pagina About */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        {/* Link per la pagina Actress */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actress">Actress</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
