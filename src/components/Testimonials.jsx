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

let PER_VIEW = 3;
const SLIDE_COUNT = reviews.length;
const AUTO_ADVANCE_MS = 4000;
const SLIDE_TRANSITION_MS = 800;
const DOT_STEP = 20; // dot width (8px) + gap (12px), used to slide the dot strip

function Testimonials() {
    // To make BOTH directions slide smoothly and loop seamlessly, we pad
    // the array on both ends: the last PER_VIEW reviews are duplicated at
    // the front (prefix), and the first PER_VIEW are duplicated at the
    // back (suffix). The "real" start (review 0) now lives at slot
    // PER_VIEW in this padded array, so `index` is offset by PER_VIEW.
    // When the slide animates into a duplicate buffer zone on either end,
    // we wait for the transition to finish, then silently (no animation)
    // snap to the equivalent real position.
    const prefix = reviews.slice(-PER_VIEW);
    const suffix = reviews.slice(0, PER_VIEW);
    const extendedReviews = [...prefix, ...reviews, ...suffix];

    const [index, setIndex] = useState(PER_VIEW);
    const [withTransition, setWithTransition] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const timerRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        handleResize(); // set the width immediately when component loads

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function goNext() {
        setWithTransition(true);
        setIndex((prev) => {
            // Don't advance further once we've reached the far duplicate
            // buffer slot — wait for the snap-back instead of running off
            // the end of extendedReviews on rapid clicks.
            if (prev >= SLIDE_COUNT + PER_VIEW) return prev;
            return prev + 1;
        });
    }

    function goPrev() {
        setWithTransition(true);
        setIndex((prev) => {
            if (prev <= 0) return prev;
            return prev - 1;
        });
    }

    function goTo(i) {
        setWithTransition(true);
        setIndex(i + PER_VIEW);
    }

    // Snap back (no animation) once we've slid into either duplicate
    // buffer zone, landing on the equivalent real position.
    useEffect(() => {
        if (index >= SLIDE_COUNT + PER_VIEW) {
            const timeout = setTimeout(() => {
                setWithTransition(false);
                setIndex(index - SLIDE_COUNT);
            }, SLIDE_TRANSITION_MS);
            return () => clearTimeout(timeout);
        }
        if (index < PER_VIEW) {
            const timeout = setTimeout(() => {
                setWithTransition(false);
                setIndex(index + SLIDE_COUNT);
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

    // Active "real" review index (0-based into `reviews`), wrapped safely
    // even while sliding through a duplicate buffer zone.
    const activeDot = ((index - PER_VIEW) % SLIDE_COUNT + SLIDE_COUNT) % SLIDE_COUNT;

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
                            width: windowWidth > 1000
                                ? `${(extendedReviews.length / PER_VIEW) * 100}%`
                                : `${extendedReviews.length * 100}%`,
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

            <div className="carousel-dots-window">
                <div
                    className="carousel-dots-track"
                    style={{
                        transform: `translateX(calc(50% - ${activeDot * DOT_STEP}px - ${DOT_STEP / 2}px))`,
                        transition: `transform ${SLIDE_TRANSITION_MS}ms ease`,
                    }}
                >
                    {reviews.map((_, i) => {
                        // Shortest circular distance from this dot to the active one,
                        // so the window wraps correctly at the start/end of the list.
                        const rawDist = i - activeDot;
                        const dist = Math.abs(
                            ((rawDist + SLIDE_COUNT / 2 + SLIDE_COUNT) % SLIDE_COUNT) - SLIDE_COUNT / 2
                        );

                        let opacity = 1;
                        if (dist >= 2) opacity = 0;
                        else if (dist > 1) opacity = 1 - (dist - 1); // fades between dist 1 and 2

                        const isActive = i === activeDot;

                        return (
                            <button
                                key={i}
                                className={`carousel-dot ${isActive ? "carousel-dot-active" : ""}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to review ${i + 1}`}
                                style={{ opacity }}
                            >
                                {isActive && (
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
                        );
                    })}
                </div>
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