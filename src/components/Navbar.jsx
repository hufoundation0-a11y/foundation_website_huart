import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location = useLocation()

    return (
        <header className="navbar">
            <div className="announcement-bar">
                <p>Welcome to Our Family Art Gallery — Celebrating Two Generations of Creativity</p>
            </div>
            <nav className="navbar-main">
                <div className="navbar-container">
                    <Link to="/" className="logo">
                        <span className="logo-text">The Hu Art & Education Foundation</span>
                    </Link>
                    <ul className="nav-links">
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === '/' || location.pathname === '/about' ? 'active' : ''}`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gallery"
                                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
