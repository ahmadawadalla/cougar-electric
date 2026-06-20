import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ComingSoon.css";

function ComingSoon({ title }) {
    return (
        <>
            <Navbar />
            <section className="coming-soon">
                <p className="coming-soon-eyebrow">PAGE IN PROGRESS</p>
                <h1 className="coming-soon-title">{title}</h1>
                <p className="coming-soon-text">
                    This page is on its way. In the meantime, give us a call
                    and we'll help you directly.
                </p>
                <a href="tel:9165249636" className="coming-soon-cta">
                    📞 916-524-9636
                </a>
            </section>
            <Footer />
        </>
    );
}

export default ComingSoon;