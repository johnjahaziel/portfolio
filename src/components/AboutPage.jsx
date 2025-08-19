import { useEffect, useState } from "react";
import halfFaceLeft from "../assets/Half_Face_Left.png";
import halfFaceRight from "../assets/Half_Face_Right.png";
import githubLogo from "../assets/icons/githublogo.png";
import gmailLogo from "../assets/icons/gmaillogo.png";
import linkedinLogo from "../assets/icons/linkedinlogo.png";
import "../css/aboutpage.css";

const AboutPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="about-container">
            <div className="face-wrapper">
                <img
                src={halfFaceLeft}
                alt="Left Face"
                className="face left"
                style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
                />
                <img
                src={halfFaceRight}
                alt="Right Face"
                className="face right"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                />
            </div>

            <h1>JOHN</h1>
            <h1>JAHAZIEL</h1>
            <br />
            <h4>Flutter App Developer</h4>

            <div className="social-buttons">
                <a href="mailto:yourmail@gmail.com" className="icon-btn gmail">
                    <img src={gmailLogo} alt="Gmail" className="icon" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="icon-btn github">
                    <img src={githubLogo} alt="GitHub" className="icon" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="icon-btn linkedin">
                    <img src={linkedinLogo} alt="LinkedIn" className="icon" />
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
