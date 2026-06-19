import panelIcon from "../assets/Service_Images/electrical_panel.png";
import evIcon from "../assets/Service_Images/ev_charger.png";
import buildingIcon from "../assets/Service_Images/building.png";
import lightbulbIcon from "../assets/Service_Images/lightbulb.png";
import screwdriverIcon from "../assets/Service_Images/screwdriver.png";
import "../styles/Services.css";

const services = [
    {
        icon: panelIcon,
        title: "Panel Upgrades",
        desc: "Upgrade your electrical panel for enhanced safety and capacity.",
    },
    {
        icon: evIcon,
        title: "EV Charger Installation",
        desc: "Professional installation for all major EV charger brands.",
    },
    {
        icon: buildingIcon,
        title: "Commercial Electrical",
        desc: "Reliable solutions for offices, retail, and industrial spaces.",
    },
    {
        icon: lightbulbIcon,
        title: "Lighting Solutions",
        desc: "Energy-efficient lighting design and installation.",
    },
    {
        icon: screwdriverIcon,
        title: "Troubleshooting & Repairs",
        desc: "Quick diagnostics and reliable repairs you can count on.",
    },
];

function Services() {
    return (
        <section className="services">
            {services.map((s, i) => (
                <div className="service-card" key={i}>
                    <img src={s.icon} alt={s.title} className="service-icon" />
                    <div className="service-text">
                        <h3 className="service-title">{s.title}</h3>
                        <p className="service-desc">{s.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Services;