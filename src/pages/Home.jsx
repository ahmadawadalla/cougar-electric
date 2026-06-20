import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trustbar from "../components/Trustbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trustbar />
            <Services />
            <Footer />
        </>
    );
}

export default Home;