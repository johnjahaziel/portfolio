import { useRef } from "react";
import bookimage from "../assets/Open_Book.png";
import "../css/technicaljourney.css";

const timeline = [
    {
        year: "2022-2026",
        title: "B.E in Computer Science & Engineering",
        type: "Foundation",
        description: "Built strong foundation in programming, algorithms, system design, and software engineering principles.",
    },
    {
        year: "2024",
        title: "Flutter & Dart Development",
        type: "Internship",
        description: "Gained expertise in cross-platform mobile app development, state management, API integration, and creating modern, responsive UIs for Android & iOS.",
    },
    {
        year: "2025",
        title: "Web Development (React.js)",
        type: "Self Learning",
        description: "Learned to create responsive, SEO-friendly websites, mastering frontend frameworks, animations, and deployment for modern web apps.",
    },
];

const TechnicalJourney = () => {
    const sectionRef = useRef(null);

    return (
        <div ref={sectionRef} className="technical-journey">
            <div className="journey-header">
                <h1 className="tj-title">MY</h1>
                <h3 className="tj-subtitle">DEVELOPER JOURNEY</h3>
                <p className="journey-subtitle">1+ Years of Innovation • Flutter App Developer • Kovilpatti, India</p>
            </div>

            <div className="timeline-section">
                <h2 className="section-title">Education & Professional Path</h2>
                <div className="journey-bg-text">JOURNEY</div>
                <div className="timeline-vertical">
                    <div className="timeline-line"></div>
                    {timeline.map((item, idx) => (
                        <>
                            {/* Marker: always centered */}
                            <div
                                className="timeline-marker"
                                style={{ top: `calc(${idx * 260}px + 60px)` }} // adjust +60px for vertical alignment with card
                                key={`marker-${idx}`}
                            ></div>
                            {/* Card: left or right */}
                            <div
                                key={`card-${idx}`}
                                className={`timeline-card-wrapper ${idx % 2 === 0 ? "left" : "right"}`}
                                style={{ top: `calc(${idx * 260}px + 0px)` }}
                            >
                                <div className="timeline-card">
                                    <div className="timeline-year">
                                        <img src={bookimage} alt="icon" className="timeline-icon" /> {item.year}
                                    </div>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <h6 className="timeline-type">{item.type}</h6>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalJourney;