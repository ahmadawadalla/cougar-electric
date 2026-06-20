import { Link } from "react-router-dom";
import ScrollLink from "./ScrollLink";
import heroBg from "../assets/hero.png";
import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay" />
            <div className="hero-content">
                <p className="hero-eyebrow">POWERING SOLUTIONS. BUILDING FUTURES.</p>
                <h1 className="hero-headline">
                    Reliable Electrical<br />
                    Solutions for<br />
                    <span className="hero-highlight">Homes & Businesses</span>
                </h1>
                <p className="hero-sub">
                    Cougar Electric Inc. provides expert residential, commercial,
                    and industrial electrical services with integrity, precision,
                    and a commitment to safety.
                </p>
                <div className="hero-btns">
                    <Link to="/contact" className="btn-primary-hero">REQUEST A QUOTE →</Link>
                    <ScrollLink to="/#services" className="btn-secondary-hero">OUR SERVICES →</ScrollLink>
                </div>
            </div>
        </section>
    );
}

export default Hero;