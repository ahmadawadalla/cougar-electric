import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Wait a tick for the page to render before scrolling to the section
            const id = hash.replace("#", "");
            requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    window.scrollTo(0, 0);
                }
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;