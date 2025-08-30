import { useEffect, useRef, useState } from "react";
import "../css/techstack.css";

import dart from "../assets/dart.png";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/flutter.png";
import git from "../assets/git.png";
import react from "../assets/react.png";

const techStacks = [
    {
        name: "Flutter",
        type: "Mobile",
        type1: "Mobile App Development",
        desc: "Creating beautiful, high-performance cross-platform mobile applications with native performance.",
        proficiency: 90,
        icon: flutter,
    },
    // {
    //     name: "Django",
    //     type: "Backend",
    //     type1: "Backend Development",
    //     desc: "Building robust, scalable backend systems and APIs using Django and Python.",
    //     proficiency: 45,
    //     icon: django,
    // },
    {
        name: "React.js",
        type: "Frontend",
        type1: "Web Development",
        desc: "Developing interactive and dynamic user interfaces with React.js.",
        proficiency: 50,
        icon: react,
    },
    {
        name: "Figma",
        type: "Design",
        type1: "UI/UX",
        desc: "Designing modern, user-friendly interfaces and prototypes in Figma.",
        proficiency: 90,
        icon: figma,
    },
    {
        name: "Git",
        type: "Version Control",
        type1: "Collaboration",
        desc: "Efficient source code management and collaboration using Git.",
        proficiency: 88,
        icon: git,
    },
    {
        name: "Dart",
        type: "Language",
        type1: "Programming",
        desc: "Programming efficient and scalable applications with Dart.",
        proficiency: 87,
        icon: dart,
    },
    {
        name: "Firebase",
        type: "Backend",
        type1: "Database",
        desc: "Integrating real-time databases, authentication, and cloud functions with Firebase.",
        proficiency: 89,
        icon: firebase,
    },
];

const Techstack = () => {
    const [rotation, setRotation] = useState(0);
    const [startIdx, setStartIdx] = useState(0);
    const carouselRef = useRef(null);

    // --- DRAG STATE ---
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragDeltaX = useRef(0);

    const handleNext = () => {
        setRotation((prev) => prev - 360 / techStacks.length);
        setStartIdx((prev) => (prev + 1) % techStacks.length);
    };

    const handlePrev = () => {
        setRotation((prev) => prev + 360 / techStacks.length);
        setStartIdx((prev) =>
            prev === 0 ? techStacks.length - 1 : prev - 1
        );
    };

    // --- TOUCH SUPPORT ---
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 50) handleNext();
        if (deltaX < -50) handlePrev();
    };

    // --- MOUSE DRAG SUPPORT ---
    const handleMouseDown = (e) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        dragDeltaX.current = e.clientX - dragStartX.current;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (dragDeltaX.current > 50) handlePrev();
        else if (dragDeltaX.current < -50) handleNext();
        dragDeltaX.current = 0;
    };

    // --- AUTOPLAY ---
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="techstack-section">
            <h1 className="techstack-title1">TECH STACK</h1>
            <div className="techstack-bar"></div>
            <p className="journey-subtitle">
                Technologies that power innovation and exceptional digital experiences.
            </p>

            <div
                className="techstack-carousel-wrapper"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // handle case when cursor leaves
            >
                <div
                    className="techstack-cards-row"
                    style={{ transform: `translateZ(-500px) rotateY(${rotation}deg)` }}
                >
                    {techStacks.map((tech, idx) => {
                        const angle = (360 / techStacks.length) * idx;
                        const isActive = idx === startIdx;
                        return (
                            <div
                                className={`techstack-card ${isActive ? "active" : ""}`}
                                key={idx}
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(700px)`,
                                }}
                            >
                                <div className="techstack-card-icon">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        style={{ width: 48, height: 48 }}
                                    />
                                </div>
                                <h2 className="techstack-card-title">{tech.name}</h2>
                                <span className="techstack-card-type">{tech.type}</span>
                                <span className="techstack-card-type1">{tech.type1}</span>
                                <p className="techstack-card-desc">{tech.desc}</p>
                                <div className="techstack-card-proficiency">
                                    <span>Proficiency</span>
                                    <span className="techstack-card-percent">
                                        {tech.proficiency}%
                                    </span>
                                </div>
                                <div className="techstack-card-bar">
                                    <div
                                        className="techstack-card-bar-fill"
                                        style={{ width: `${tech.proficiency}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Techstack;