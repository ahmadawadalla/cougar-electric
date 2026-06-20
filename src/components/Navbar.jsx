import { Link } from "react-router-dom";
import ScrollLink from "./ScrollLink";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-xxl bg-white shadow-sm py-3">
            <div className="container-fluid navbar-layout px-4">

                {/* Hamburger - mobile only */}
                <button
                    className="navbar-toggler menu-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* LEFT: Nav links */}
                <div className="collapse navbar-collapse nav-menu" id="mainNavbar">
                    <ul className="navbar-nav gap-lg-3">

                        <li className="nav-item">
                            <ScrollLink className="nav-link fw-bold text-uppercase" to="/#services">Services</ScrollLink>
                        </li>

                        <li className="nav-item">
                            <ScrollLink className="nav-link fw-bold text-uppercase" to="/#service-areas">Service Areas</ScrollLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                Resources
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/resources">Blog</Link></li>
                                <li><ScrollLink className="dropdown-item" to="/#reviews">Reviews</ScrollLink></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-uppercase" to="/about">About Us</Link>
                        </li>

                    </ul>
                </div>

                {/* CENTER: Logo */}
                <Link className="navbar-brand logo-wrapper m-0" to="/">
                    <img src={logo} alt="Cougar Electric Inc." className="navbar-logo" />
                </Link>

                {/* RIGHT: Phone button */}
                <div className="phone-btn-wrapper">
                    <a href="tel:9165249636" className="phone-btn">
                        📞 916-524-9636
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;