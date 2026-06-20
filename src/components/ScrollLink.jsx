import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * A Link that scrolls to a section by hash, even when the URL already
 * matches the target (e.g. clicking "Services" again while already
 * scrolled to #services). React Router won't re-trigger navigation
 * in that case, so we detect it and scroll manually.
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
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (samePath && hash) {
            // Same page, different hash — navigate will update the URL but
            // won't necessarily scroll if hash listener doesn't catch it,
            // so nudge it along too.
            e.preventDefault();
            navigate(to);
            requestAnimationFrame(() => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
        // else: different page entirely — let Link handle normal navigation,
        // ScrollToTop will pick up the hash on mount.

        if (onClick) onClick(e);
    }

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}

export default ScrollLink;