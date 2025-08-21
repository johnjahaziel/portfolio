import { useEffect, useRef, useState } from "react";
import "../css/projects.css";

const imageList = [
    "GraceBus_demo.png",
    "NoteMaking_demo.png",
    "Alumini_demo.png",
    "grace_demo.png",
    "pixelog_demo.png",
    "Vagabon_demo.png",
    "reegan_demo.png",
    "Water_demo.png",
];

const Projects = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);

        if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollPos = window.scrollY;

            // progress 0 → section just reached
            // progress 1 → reached end of section
            const rawProgress = (scrollPos - sectionTop) / sectionHeight;
            const factor = 0.2; // <-- smaller = normal sooner
            const adjustedProgress = rawProgress / factor;
            setProgress(Math.min(1, Math.max(0, adjustedProgress)));
        }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const topRow = imageList.slice(0, 4);
    const bottomRow = imageList.slice(4, 8);

    const renderRow = (images, direction, speed) => {
        const offset = (scrollY * speed) % (images.length * 470);
        return (
        <div
            className="projects-row"
            style={{
            transform: `translateX(${direction * -offset}px)`,
            }}
        >
            {[...images, ...images].map((img, i) => (
            <div className="project-card" key={i}>
                <img
                src={new URL(`../assets/projects/${img}`, import.meta.url).href}
                alt={`Project ${i + 1}`}
                />
            </div>
            ))}
        </div>
        );
    };

    // directly tied to scroll progress
    const tilt = 20 * (1 - progress); // 20deg → 0deg
    const opacity = 0.3 + 0.7 * progress; // 0.3 → 1
    const translateY = 100 * (1 - progress); // 100px → 0

    return (
        <div className="projects-section" ref={sectionRef}>
        <div className="projects-header">
            <h1 className="projects-title">The Ultimate</h1>
            <h1 className="projects-subtitle">Apps That Matter</h1>
            <p className="projects-description">
                A selection of my most meaningful Flutter projects — blending
                performance, clean architecture, and modern UI/UX. These apps reflect
                my hands-on experience in state management, Firebase integration, API
                handling, and deploying to both Android and iOS platforms. Each
                project showcases my commitment to writing scalable, maintainable code
                and delivering user-first experiences.
            </p>
        </div>

        <div
            className="projects-loop"
            style={{
            transform: `perspective(1000px) rotateX(${tilt}deg) translateY(${translateY}px)`,
            opacity,
            }}
        >
            {renderRow(topRow, 1, 0.1)}
            {renderRow(bottomRow, -1, 0.1)}
        </div>
        </div>
    );
};

export default Projects;
