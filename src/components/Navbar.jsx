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

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Residential</a></li>
                                <li><a className="dropdown-item" href="#">Commercial</a></li>
                                <li><a className="dropdown-item" href="#">EV Chargers</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                Service Areas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sacramento</a></li>
                                <li><a className="dropdown-item" href="#">Folsom</a></li>
                                <li><a className="dropdown-item" href="#">Roseville</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                Resources
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                <li><a className="dropdown-item" href="#">Videos</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link fw-bold text-uppercase" href="#">About Us</a>
                        </li>

                    </ul>
                </div>

                {/* CENTER: Logo */}
                <a className="navbar-brand logo-wrapper m-0" href="/">
                    <img src={logo} alt="Cougar Electric Inc." className="navbar-logo" />
                </a>

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