import { useEffect, useState } from "react";
import eyesImage from "../assets/Neon_Eyes.png";
import "../css/herosection.css";

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Eye movement factor
    const eyeOffsetX = (mousePos.x / window.innerWidth - 0.5) * 30;
    const eyeOffsetY = (mousePos.y / window.innerHeight - 0.5) * 30;

    // Scroll progress (0 → 1 within first 100vh)
    const progress = Math.min(scrollY / window.innerHeight, 1);

    const topY = -120 * progress;
    const bottomY = 120 * progress;
    const eyeOpacity = progress;

    return (
        <div style={{ height: "200vh" }}>
        <div
            className="hero-container"
            style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            }}
        >
        {/* Top Text */}
        <div
            className="text top"
            style={{
                transform: `translateY(${topY}px)`,
                transition: "transform 0.1s linear",
            }}
            >
            FLUTTER
        </div>

        {/* Eyes */}
        <img
            src={eyesImage}
            alt="Neon Eyes"
            className="eyes"
            style={{
                opacity: eyeOpacity,
                transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
                transition: "opacity 0.1s linear, transform 0.05s linear",
        }}
        />

        {/* Bottom Text */}
        <div
            className="text bottom"
            style={{
                transform: `translateY(${bottomY}px)`,
                transition: "transform 0.1s linear",
            }}
            >
            FLUTTER
        </div>
        </div>
        </div>
    );
};

export default HeroSection;
