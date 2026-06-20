import shieldIcon from "../assets/Trustbar_Images/sheild.png";
import lightningIcon from "../assets/Trustbar_Images/lightning_bolt.png";
import clockIcon from "../assets/Trustbar_Images/clock.png";
import customerIcon from "../assets/Trustbar_Images/customer.png";
import "../styles/Trustbar.css";

const items = [
    {
        icon: shieldIcon,
        title: "Licensed & Insured",
        sub: "CA LIC. #1070881",
    },
    {
        icon: lightningIcon,
        title: "Quality Workmanship",
        sub: "Done right the first time",
    },
    {
        icon: clockIcon,
        title: "Fast Response",
        sub: "We're there when you need us",
    },
    {
        icon: customerIcon,
        title: "Customer Focused",
        sub: "Your satisfaction is our priority",
    },
];

function Trustbar() {
    return (
        <section className="trust-bar" id="trust">
            {items.map((item, i) => (
                <div className="trust-item" key={i}>
                    <img src={item.icon} alt={item.title} className="trust-icon" />
                    <div className="trust-text">
                        <p className="trust-title">{item.title}</p>
                        <p className="trust-sub">{item.sub}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Trustbar;