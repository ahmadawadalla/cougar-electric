import { Link } from "react-router-dom";
import "../styles/FinalCTA.css";

function FinalCTA() {
    return (
        <section className="final-cta">
            <div className="final-cta-inner">
                <div>
                    <p className="final-cta-eyebrow">READY WHEN YOU ARE</p>
                    <h2 className="final-cta-title">
                        Got an electrical issue? Let's fix it right.
                    </h2>
                </div>
                <div className="final-cta-actions">
                    <a href="tel:9165249636" className="final-cta-btn final-cta-btn-primary">
                        📞 916-524-9636
                    </a>
                    <Link to="/contact" className="final-cta-btn final-cta-btn-secondary">
                        Request a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;