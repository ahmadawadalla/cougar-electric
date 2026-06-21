/**
 * Scrolls to a section by id and briefly applies a highlight class
 * so the user's eye is drawn to the right part of the page.
 */
export function scrollToSectionWithHighlight(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Restart the animation even if it's already highlighted from a
    // previous click by removing then re-adding the class on next frame.
    el.classList.remove("section-highlight");
    // Force reflow so the browser registers the class removal
    void el.offsetWidth;
    el.classList.add("section-highlight");

    window.clearTimeout(el._highlightTimeout);
    el._highlightTimeout = window.setTimeout(() => {
        el.classList.remove("section-highlight");
    }, 1600);
}