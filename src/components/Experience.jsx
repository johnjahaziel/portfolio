import "../css/experience.css";

const experiences = [
    {
        id: 1,
        company: "Bluon Tech",
        role: "Flutter Developer",
        date: "Feburary 2025 – Present",
        description: "Developed and delivered 3+ real-time mobile applications for enterprise clients under NDA, focusing on performance, scalability, and seamless user experience. Collaborated with cross-functional teams to ensure secure deployments and client satisfaction.",
        tech: ["Flutter", "Dart", "Provider", "REST API"],
        bullets: [
            "Delivered 3+ NDA projects in healthcare, logistics, and real estate.",
            "Specialized in API integration, performance tuning, and responsive UI/UX.",
            "Contributed in agile sprints, ensuring timely and quality delivery."
        ]
    },
    {
        id: 2,
        company: "Oneyes Infotech Solutions – Intern",
        role: "Flutter Developer",
        date: "Feburary 2025 – March 2025",
        description: "Developed and delivered a fully functional Note-Taking app during internship, showcasing end-to-end Flutter development, clean UI, and efficient state management.",
        tech: ["Flutter", "Dart"],
        bullets: [
            "Solely developed a fully functional Note-Taking App from scratch.",
            "Implemented features like add, edit, delete, and organize notes.",
            "Gained hands-on experience in Flutter development, state management, and UI design."
        ]
    },
    {
        id: 3,
        company: "Freelance & Personal Projects",
        role: "Flutter Developer",
        date: "May 2024 – January 2025",
        description: "Developed multiple freelance and personal projects, including a Bus Tracking System App and a Water Management App, focusing on real-time data handling, clean UI, and practical problem-solving.",
        tech: ["Flutter", "Dart", "Firebase", "Socket.io"],
        bullets: [
            "Built end-to-end solutions from idea to deployment.",
            "Integrated real-time tracking and resource management features.",
            "Strengthened skills in Flutter, Firebase, API integration, and state management."
        ]
    },
    {
        id: 4,
        company: "Corizo – Intern",
        role: "Flutter Developer",
        date: "Feburary 2024 – April 2024",
        description: "Assisted in developing a Travel Place Suggestion app as part of a collaborative internship project at Corizo. Strengthened Flutter skills while contributing to UI design, API integration, and teamwork in an agile environment.",
        tech: ["Flutter", "Dart", "Firebase"],
        bullets: [
            "Learned Flutter development fundamentals through hands-on projects.",
            "Collaborated with a team to build a Travel Place Suggestion app.",
            "Gained experience in teamwork, version control, and real-world app workflows."
        ]
    },
    {
        id: 5,
        company: "Oneyes Infotech Solutions – Intern",
        role: "Full Stack Development",
        date: "December 2023 – January 2024",
        description: "Completed an internship in Full Stack Development, gaining hands-on exposure to frontend and backend technologies.",
        tech: ["HTML", "CSS", "JavaScript", "SQL", "Laravel (PHP)"],
        bullets: [
            "Learned the basics of HTML, CSS, JavaScript, Laravel (PHP), and SQL.",
            "Built simple web modules to understand frontend–backend integration.",
            "Strengthened understanding of database design and server-side logic."
        ]
    }
];

const Experience = () => {
    return (
        <div className="experience-section">
            <h1 className="section-title1">MY</h1>
            <h3 className="section-title2">EXPERIENCE</h3>
            <div className="experience-bar"></div>
            <p className="journey-subtitle">Crafting digital experiences through code, one project at a time.</p>
            <div className="experience-cards-container">
                {experiences.map((exp, idx) => (
                    <div className="experience-card" key={exp.id}>
                        <div className="experience-card-header">
                            <span className="experience-card-number">#{idx + 1}</span>
                            <span className="experience-card-date">{exp.date}</span>
                        </div>
                        <h2 className="experience-card-company">{exp.company}</h2>
                        <h3 className="experience-card-role">{exp.role}</h3>
                        <p className="experience-card-description">{exp.description}</p>
                        <div className="experience-card-tech">
                            {exp.tech.map((t) => (
                                <span className="experience-card-tech-item" key={t}>{t}</span>
                            ))}
                        </div>
                        <ul className="experience-card-bullets">
                            {exp.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;