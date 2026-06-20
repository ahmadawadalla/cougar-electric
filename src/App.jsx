import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<ComingSoon title="About Us" />} />
                <Route path="/resources" element={<ComingSoon title="Resources" />} />
                <Route path="/financing" element={<ComingSoon title="Financing" />} />
                <Route path="/maintenance-plans" element={<ComingSoon title="Maintenance Plans" />} />
                <Route path="/careers" element={<ComingSoon title="Careers" />} />
            </Routes>
        </>
    );
}

export default App;