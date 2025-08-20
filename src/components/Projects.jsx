import { useEffect, useRef, useState } from "react";
import "../css/projects.css";

const Projects = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Ciyaaryahan",
            description: "Flutter soccer app with live scores, news, chat, and match streams",
            image: "https://via.placeholder.com/400x300/00d4ff/ffffff?text=Ciyaaryahan",
            technologies: ["Flutter", "Dart", "Socket.IO", "Provider"],
            link: "#",
            category: "Mobile App"
        },
        {
            id: 2,
            title: "Shaafi",
            description: "Telehealth application with video consultations and health tracking",
            image: "https://via.placeholder.com/400x300/61dafb/ffffff?text=Shaafi",
            technologies: ["Flutter", "Agora RTC", "Firebase", "Provider"],
            link: "#",
            category: "Healthcare"
        },
        {
            id: 3,
            title: "Almuqtadir Gold",
            description: "E-commerce shopping app with secure payments and inventory management",
            image: "https://via.placeholder.com/400x300/f7df1e/000000?text=Almuqtadir",
            technologies: ["Flutter", "Firebase", "REST API", "Provider"],
            link: "#",
            category: "E-commerce"
        },
        {
            id: 4,
            title: "BUS3",
            description: "Ticket booking app with seat selection and integrated payment system",
            image: "https://via.placeholder.com/400x300/339933/ffffff?text=BUS3",
            technologies: ["Flutter", "Sqflite", "REST API", "Provider"],
            link: "#",
            category: "Transportation"
        },
        {
            id: 5,
            title: "FINORA",
            description: "Money management system backend with secure financial transactions",
            image: "https://via.placeholder.com/400x300/ff6b6b/ffffff?text=FINORA",
            technologies: ["Go", "PostgreSQL", "Redis", "REST API"],
            link: "#",
            category: "Backend"
        },
        {
            id: 6,
            title: "Oiot",
            description: "Ride booking application with real-time tracking and driver management",
            image: "https://via.placeholder.com/400x300/00d4ff/ffffff?text=Oiot",
            technologies: ["Flutter", "Firebase", "Google Maps", "Provider"],
            link: "#",
            category: "Transportation"
        }
    ];

    return (
        <div ref={sectionRef} className="projects-section">
            <div className="projects-header">
                <h1 className="projects-title">THE ULTIMATE</h1>
                <h2 className="projects-subtitle">Apps That Matter</h2>
                <p className="projects-description">
                    A selection of my most meaningful Flutter projects — blending performance, clean architecture, 
                    and modern UI/UX. Each project showcases my commitment to writing scalable, maintainable code 
                    and delivering user-first experiences.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${isInView ? 'animate-in' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.link} className="project-link">
                                        <span>View Project</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
