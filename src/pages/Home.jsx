import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TrustBar from "../components/Trustbar.jsx";
import Services from "../components/Services.jsx";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustBar />
            <Services />
        </>
    );
}

export default Home;