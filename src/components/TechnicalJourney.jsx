import { useEffect, useRef, useState } from "react";
import django from "../assets/django.png";
import figma from "../assets/Figma.png";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import "../css/technicaljourney.css";

const skills = [
    { name: "Flutter", icon: flutter },
    { name: "Django", icon: django },
    { name: "React Js", icon: react },
    { name: "Figma", icon: figma },
];

const TechnicalJourney = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                // Only trigger animation the first time it enters the viewport
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="technical-journey">
            <div className={`journey-header${hasAnimated ? " animate" : ""}`}>
                <h1 className="tj-title">MY</h1>
                <h3 className="tj-subtitle">DEVELOPER JOURNEY</h3>
                <div className="journey-bar"></div>
                <p className="journey-subtitle">1+ Years of Innovation • Flutter App Developer • Kovilpatti, India</p>
            </div>
            <div className="technical-expertise">
                <h2 className="expertise-title">Technical Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <div className="skill-icon">
                                <img src={skill.icon} alt={skill.name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                            </div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalJourney;