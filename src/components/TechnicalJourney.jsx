import { useRef } from "react";
import "../css/technicaljourney.css";

const TechnicalJourney = () => {
    const sectionRef = useRef(null);

    return (
        <div ref={sectionRef} className="technical-journey">
            <div className="journey-header">
                <h1 className="tj-title">MY</h1>
                <h3 className="tj-subtitle">DEVELOPER JOURNEY</h3>
                <p className="journey-subtitle">1+ Years of Innovation • Flutter App Developer • Kovilpatti, India</p>
            </div>
        </div>
    );
};

export default TechnicalJourney;