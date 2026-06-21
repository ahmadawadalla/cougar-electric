import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSectionWithHighlight } from "../utils/scrollHighlight";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            // Wait a tick for the page to render before scrolling to the section
            requestAnimationFrame(() => {
                if (document.getElementById(id)) {
                    scrollToSectionWithHighlight(id);
                } else {
                    window.scrollTo(0, 0);
                }
            });
        } else {
            window.scrollTo(0, 0);
            // No specific section requested — if this page has a main
            // content block (e.g. ComingSoon/blog pages), give it a
            // brief highlight too so the new page is obvious.
            requestAnimationFrame(() => {
                const el = document.getElementById("page-content");
                if (el) {
                    el.classList.remove("section-highlight");
                    void el.offsetWidth;
                    el.classList.add("section-highlight");
                    window.clearTimeout(el._highlightTimeout);
                    el._highlightTimeout = window.setTimeout(() => {
                        el.classList.remove("section-highlight");
                    }, 1600);
                }
            });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;