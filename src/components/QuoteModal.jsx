import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuoteModal.css";

function QuoteModal({ service, onClose }) {
    const navigate = useNavigate();

    // Close on Escape key
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    function handleConfirm() {
        navigate("/contact", { state: { service } });
        onClose();
    }

    return (
        <div className="quote-modal-overlay" onClick={onClose}>
            <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
                <button className="quote-modal-close" onClick={onClose} aria-label="Close">
                    ×
                </button>

                <p className="quote-modal-eyebrow">SERVICE SELECTED</p>
                <h3 className="quote-modal-title">{service}</h3>
                <p className="quote-modal-text">
                    Would you like to request a quote for this service?
                    We'll follow up within one business day.
                </p>

                <div className="quote-modal-actions">
                    <button className="quote-modal-btn quote-modal-btn-primary" onClick={handleConfirm}>
                        Yes, Get a Quote →
                    </button>
                    <button className="quote-modal-btn quote-modal-btn-secondary" onClick={onClose}>
                        Not Now
                    </button>
                </div>

                <a href="tel:9165249636" className="quote-modal-phone">
                    Or call us directly: 916-524-9636
                </a>
            </div>
        </div>
    );
}

export default QuoteModal;