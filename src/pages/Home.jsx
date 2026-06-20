import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trustbar from "../components/Trustbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas.jsx";
import FinalCTA from "../components/FinalCTA.jsx";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trustbar />
            <Services />
            <Testimonials />
            <ServiceAreas />
            <FinalCTA />
            <Footer />
        </>
    );
}

export default Home;