import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSectionWithHighlight } from "../utils/scrollHighlight";

/**
 * A Link that scrolls to a section by hash, even when the URL already
 * matches the target (e.g. clicking "Services" again while already
 * scrolled to #services). React Router won't re-trigger navigation
 * in that case, so we detect it and scroll manually. Also briefly
 * highlights the target section so it's obvious what was navigated to.
 */
function ScrollLink({ to, className, onClick, children }) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleClick(e) {
        const [path, hash] = to.split("#");
        const currentPath = location.pathname;
        const currentHash = location.hash;

        const samePath = (path || "/") === currentPath;
        const sameHash = hash ? `#${hash}` === currentHash : !currentHash;

        if (samePath && sameHash && hash) {
            // Already at this exact URL — manually scroll since router won't fire
            e.preventDefault();
            scrollToSectionWithHighlight(hash);
        } else if (samePath && hash) {
            // Same page, different hash — navigate updates the URL, then we
            // scroll + highlight manually to guarantee it happens.
            e.preventDefault();
            navigate(to);
            requestAnimationFrame(() => {
                scrollToSectionWithHighlight(hash);
            });
        }
        // else: different page entirely — let Link handle normal navigation,
        // ScrollToTop will pick up the hash + highlight on mount.

        if (onClick) onClick(e);
    }

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}

export default ScrollLink;