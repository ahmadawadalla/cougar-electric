import "../styles/ServiceAreas.css";

const areas = [
    "Sacramento", "Folsom", "Roseville", "Elk Grove",
    "Rocklin", "Citrus Heights", "Davis", "Rancho Cordova",
    "Carmichael", "El Dorado Hills", "Fair Oaks", "Woodland",
];

function ServiceAreas() {
    return (
        <section className="service-areas" id="service-areas">
            <div className="service-areas-inner">
                <div className="service-areas-text">
                    <p className="service-areas-eyebrow">SERVICE AREAS</p>
                    <h2 className="service-areas-title">
                        Proudly serving Northern California
                    </h2>
                    <p className="service-areas-sub">
                        Based in Sacramento, our licensed electricians serve homes
                        and businesses throughout the greater Sacramento region.
                        Don't see your city listed? Give us a call — we likely cover it.
                    </p>
                    <a href="tel:9165249636" className="service-areas-cta">
                        Call to confirm your area →
                    </a>
                </div>

                <div className="service-areas-list">
                    {areas.map((city, i) => (
                        <div className="area-pill" key={i}>
                            <span className="area-dot" />
                            {city}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceAreas;