import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const location = useLocation();
    const preselectedService = location.state?.service || "";

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: wire up to your form backend / email service (e.g. Formspree, EmailJS, your own API)
        setSubmitted(true);
    }

    return (
        <>
            <Navbar />
            <section className="contact-page">
                <div className="contact-inner">
                    <div className="contact-intro">
                        <p className="contact-eyebrow">GET IN TOUCH</p>
                        <h1 className="contact-title">Request a Quote</h1>
                        <p className="contact-sub">
                            Tell us a bit about the job and we'll get back to you within
                            one business day. For urgent issues, call us directly.
                        </p>

                        <a href="tel:9165249636" className="contact-phone-link">
                            📞 916-524-9636
                        </a>
                    </div>

                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="contact-success">
                                <h2>Thanks — we got it!</h2>
                                <p>A member of our team will reach out shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="text" required />
                                </div>

                                <div className="form-row">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input id="phone" type="tel" required />
                                </div>

                                <div className="form-row">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" required />
                                </div>

                                <div className="form-row">
                                    <label htmlFor="service">Service Needed</label>
                                    <select id="service" defaultValue={preselectedService}>
                                        <option value="" disabled>Select a service</option>
                                        <option>Panel Upgrades</option>
                                        <option>EV Charger Installation</option>
                                        <option>Commercial Electrical</option>
                                        <option>Lighting Solutions</option>
                                        <option>Troubleshooting & Repairs</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-row">
                                    <label htmlFor="message">Tell us about the job</label>
                                    <textarea id="message" rows="4" />
                                </div>

                                <button type="submit" className="contact-submit">
                                    Submit Request →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;