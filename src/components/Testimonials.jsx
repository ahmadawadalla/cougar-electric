import { useState, useEffect, useRef } from "react";
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
    {
        name: "Priya N.",
        location: "Elk Grove, CA",
        text: "Had them rewire a detached garage we converted into a home office. Inspector signed off on the first visit, which our contractor said almost never happens.",
        rating: 5,
    },
    {
        name: "Tom B.",
        location: "Davis, CA",
        text: "Lighting retrofit for our storefront. They worked around our business hours and finished a day ahead of schedule.",
        rating: 5,
    },
    {
        name: "Aisha K.",
        location: "Rancho Cordova, CA",
        text: "Quoted fairly, showed up on time, explained everything in plain language. Will be calling them again for our next project.",
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

const PER_VIEW = 3;
const SLIDE_COUNT = reviews.length;
const AUTO_ADVANCE_MS = 4500;
const SLIDE_TRANSITION_MS = 1500;

function Testimonials() {
    // `index` can grow unbounded (1, 2, 3, 4...) — we use it to drive a
    // CSS transform so the track slides smoothly. The underlying array is
    // padded with a duplicate of the first PER_VIEW cards at the end, so
    // when we reach the end of the real list we let the slide animate
    // into the duplicates, then silently snap back to index 0 with no
    // transition — giving a seamless infinite loop.
    const [index, setIndex] = useState(0);
    const [withTransition, setWithTransition] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const timerRef = useRef(null);

    const extendedReviews = [...reviews, ...reviews.slice(0, PER_VIEW)];

    function goNext() {
        setWithTransition(true);
        setIndex((prev) => prev + 1);
    }

    function goPrev() {
        setWithTransition(true);
        setIndex((prev) => {
            if (prev === 0) {
                // Jump to the end instantly, then animate backward visually
                // by landing one before the duplicated wrap point.
                return SLIDE_COUNT - 1;
            }
            return prev - 1;
        });
    }

    function goTo(i) {
        setWithTransition(true);
        setIndex(i);
    }

    // Snap back to the real start (no animation) once we've slid past
    // the last real card into the duplicated buffer.
    useEffect(() => {
        if (index === SLIDE_COUNT) {
            const timeout = setTimeout(() => {
                setWithTransition(false);
                setIndex(0);
            }, SLIDE_TRANSITION_MS);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    // Auto-advance every few seconds, paused on hover/focus or while a
    // review is expanded in the modal.
    useEffect(() => {
        if (isPaused || selectedReview) return;
        timerRef.current = setInterval(() => {
            goNext();
        }, AUTO_ADVANCE_MS);
        return () => clearInterval(timerRef.current);
    }, [isPaused, index, selectedReview]);

    const activeDot = index % SLIDE_COUNT;

    return (
        <section className="testimonials" id="reviews">
            <div className="testimonials-header">
                <p className="testimonials-eyebrow">CLIENT REVIEWS</p>
                <h2 className="testimonials-title">What Sacramento homeowners are saying</h2>
            </div>

            <div
                className="testimonials-carousel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button className="carousel-arrow carousel-arrow-left" onClick={goPrev} aria-label="Previous reviews">
                    ‹
                </button>

                <div className="testimonials-viewport">
                    <div
                        className="testimonials-track"
                        style={{
                            width: `${(extendedReviews.length / PER_VIEW) * 100}%`,
                            transform: `translateX(-${(index * 100) / extendedReviews.length}%)`,
                            transition: withTransition ? `transform ${SLIDE_TRANSITION_MS}ms ease` : "none",
                        }}
                    >
                        {extendedReviews.map((r, i) => (
                            <button
                                className="review-card"
                                key={i}
                                onClick={() => setSelectedReview(r)}
                                type="button"
                            >
                                <Stars count={r.rating} />
                                <p className="review-text">"{r.text}"</p>
                                <div className="review-author">
                                    <span className="review-name">{r.name}</span>
                                    <span className="review-location">{r.location}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <button className="carousel-arrow carousel-arrow-right" onClick={goNext} aria-label="Next reviews">
                    ›
                </button>
            </div>

            <div className="carousel-dots">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel-dot ${i === activeDot ? "carousel-dot-active" : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to review ${i + 1}`}
                    >
                        {i === activeDot && (
                            <span
                                // Re-mounting via key restarts the CSS animation
                                // every time we land on this dot (auto-advance,
                                // arrow click, or manual dot click all count).
                                key={`${i}-${isPaused}`}
                                className="carousel-dot-fill"
                                style={{
                                    animationDuration: `${AUTO_ADVANCE_MS}ms`,
                                    animationPlayState: (isPaused || selectedReview) ? "paused" : "running",
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {selectedReview && (
                <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />
            )}
        </section>
    );
}

function ReviewModal({ review, onClose }) {
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div className="review-modal-overlay" onClick={onClose}>
            <div className="review-modal" onClick={(e) => e.stopPropagation()}>
                <button className="review-modal-close" onClick={onClose} aria-label="Close">
                    ×
                </button>

                <Stars count={review.rating} />
                <p className="review-modal-text">"{review.text}"</p>
                <div className="review-modal-author">
                    <span className="review-modal-name">{review.name}</span>
                    <span className="review-modal-location">{review.location}</span>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;