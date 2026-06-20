import "../styles/Testimonials.css";

const reviews = [
    {
        name: "Daniel R.",
        location: "Folsom, CA",
        text: "Our panel was over 30 years old and the inspector flagged it during a refinance. Cougar had us upgraded and re-inspected within the week. Clean work, no surprises on the invoice.",
        rating: 5,
    },
    {
        name: "Marisol T.",
        location: "Sacramento, CA",
        text: "Called about a tripping breaker on a Saturday morning expecting a voicemail. A tech called back in twenty minutes and was at the house by early afternoon. Found a loose neutral the last company missed.",
        rating: 5,
    },
    {
        name: "Greg H.",
        location: "Roseville, CA",
        text: "Used them for EV charger install in the garage. They walked me through the permit process before starting, which I appreciated — no shortcuts taken.",
        rating: 5,
    },
];

function Stars({ count }) {
    return (
        <div className="stars" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="star">★</span>
            ))}
        </div>
    );
}

function Testimonials() {
    return (
        <section className="testimonials" id="reviews">
            <div className="testimonials-header">
                <p className="testimonials-eyebrow">CLIENT REVIEWS</p>
                <h2 className="testimonials-title">What Sacramento homeowners are saying</h2>
            </div>

            <div className="testimonials-grid">
                {reviews.map((r, i) => (
                    <div className="review-card" key={i}>
                        <Stars count={r.rating} />
                        <p className="review-text">"{r.text}"</p>
                        <div className="review-author">
                            <span className="review-name">{r.name}</span>
                            <span className="review-location">{r.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;