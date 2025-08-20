import { useEffect } from "react";
import bookimage from "../assets/Open_Book.png";
import "../css/educationpath.css";

const timeline = [
    {
        year: "2022-2026",
        title: "B.E in Computer Science & Engineering",
        type: "Foundation",
        description:
        "Built strong foundation in programming, algorithms, system design, and software engineering principles.",
    },
    {
        year: "2024",
        title: "Flutter & Dart Development",
        type: "Internship",
        description:
        "Gained expertise in cross-platform mobile app development, state management, API integration, and creating modern, responsive UIs for Android & iOS.",
    },
    {
        year: "2025",
        title: "Web Development (React.js)",
        type: "Self Learning",
        description:
        "Learned to create responsive, SEO-friendly websites, mastering frontend frameworks, animations, and deployment for modern web apps.",
    },
    ];

const EducationPath = () => {
    useEffect(() => {
        const marker = document.getElementById("scroll-marker");
        const section = document.querySelector(".timeline-section");
        const line = document.querySelector(".timeline-line");

        const handleScroll = () => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Section visible progress (0 → 1)
        const scrollProgress = Math.min(
            Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
            1
        );

        // marker position inside line
        const lineHeight = line.offsetHeight;
        const speed = 1.6;
        const offset = -100;
        const maxProgress = 0.7; // lock after 70% of line
        const cappedProgress = Math.min(scrollProgress, maxProgress);

        const markerPos = Math.min(offset + cappedProgress * lineHeight * speed, lineHeight);


        marker.style.top = `${markerPos}px`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="timeline-section">
        <h2 className="section-title">Education & Professional Path</h2>
        <div className="journey-bg-text">JOURNEY</div>
        <div className="timeline-vertical">
            <div className="timeline-line"></div>

            {/* MOVING marker */}
            <div className="timeline-marker" id="scroll-marker"></div>

            {timeline.map((item, idx) => (
            <div
                key={`card-${idx}`}
                className={`timeline-card-wrapper ${idx % 2 === 0 ? "left" : "right"}`}
                style={{ top: `calc(${idx * 280}px + 0px)` }}
            >
                <div
                className={`timeline-card ${
                    idx % 2 === 0 ? "align-right" : "align-left"
                }`}
                >
                <div className="timeline-year">
                    <img src={bookimage} alt="icon" className="timeline-icon" />{" "}
                    {item.year}
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <h6 className="timeline-type">{item.type}</h6>
                <p className="timeline-description">{item.description}</p>
                </div>
            </div>
            ))}
        </div>

        <div className="available-opportunity">
            <span className="circle"></span>
            <span>Currently Available for New Opportunities</span>
            <span className="circle"></span>
        </div>
        <div style={{height: "20vh"}}></div>
        </div>
    );
};

export default EducationPath;
