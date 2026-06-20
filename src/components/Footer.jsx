import "../styles/Footer.css";

const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Service Areas",
    "Resources",
    "Financing",
    "Maintenance Plans",
    "Reviews",
    "Careers",
    "Contact Us",
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">

                {/* Column 1: Map + CTAs */}
                <div className="footer-col footer-map-col">
                    <div className="footer-map">
                        <iframe
                            title="Cougar Electric Inc. Location"
                            src="https://www.google.com/maps?q=Sacramento,CA+95818&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <a href="#" className="footer-btn footer-btn-white">
                        SCHEDULE MY SERVICE <span className="footer-arrow">›</span>
                    </a>
                    <a href="tel:9165249636" className="footer-btn footer-btn-gold">
                        916-524-9636 <span className="footer-arrow">›</span>
                    </a>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col footer-links-col">
                    <h3 className="footer-heading">QUICK LINKS</h3>
                    <ul className="footer-link-list">
                        {quickLinks.map((link, i) => (
                            <li className="footer-link-item" key={i}>
                                <a href="#" className="footer-link">
                                    {link}
                                    <span className="footer-link-arrow">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-col footer-contact-col">
                    <h3 className="footer-heading">CONTACT INFO</h3>

                    <div className="footer-contact-item">
                        <span className="footer-icon">📍</span>
                        <div>
                            <p className="footer-contact-title">Main Office</p>
                            <p className="footer-contact-text">Sacramento, CA 95818</p>
                            <p className="footer-contact-text">Serving Northern California</p>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <span className="footer-icon">🕐</span>
                        <div>
                            <p className="footer-contact-text">Monday – Friday: 8:00 AM – 5:00 PM</p>
                            <p className="footer-contact-text">Saturday – Sunday: By Appointment</p>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <span className="footer-icon">📄</span>
                        <p className="footer-contact-text">License: Pending</p>
                    </div>

                    <div className="footer-contact-item">
                        <span className="footer-icon">✉️</span>
                        <a href="mailto:info@cougarelectricinc.com" className="footer-contact-text footer-contact-link">
                            info@cougarelectricinc.com
                        </a>
                    </div>

                    <div className="footer-contact-item">
                        <span className="footer-icon">📞</span>
                        <a href="tel:9165249636" className="footer-contact-text footer-contact-link">
                            916-524-9636
                        </a>
                    </div>

                    <div className="footer-social">
                        <a href="#" className="footer-social-icon" aria-label="Facebook">f</a>
                        <a href="#" className="footer-social-icon" aria-label="Instagram">◎</a>
                        <a href="#" className="footer-social-icon" aria-label="YouTube">▶</a>
                        <a href="#" className="footer-social-icon" aria-label="Google">G</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Cougar Electric Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;