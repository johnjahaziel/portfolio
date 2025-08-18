import { useEffect, useState } from "react";
import "./index.css";
import eyesImage from "./Neon_Eyes.png"; // ✅ put the image in src/

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lockPoint = 70; // adjust based on where eyes are fully shown

    const handleScroll = () => {
      if (animationDone) {
        window.scrollTo(0, 0); // force stay until the animation completes
      } else if (window.scrollY > lockPoint && !animationDone) {
        window.scrollTo(0, lockPoint); // force stay at lock point
      } else {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Eye movement factor
  const eyeOffsetX = (mousePos.x / window.innerWidth - 0.5) * 30;
  const eyeOffsetY = (mousePos.y / window.innerHeight - -1) * 30;

  return (
    <div>
      <div style={{ height: "00vh", background: "black" }}></div>

      <div className="container">
        {/* Top Half */}
        <div
          className="text top"
          style={{ transform: `translateY(${-scrollY * 0}px)` }}
        >
          FLUTTER
        </div>

        {/* Bottom Half */}
        <div
          className="text bottom"
          style={{ transform: `translateY(${scrollY * 1.6}px)` }}
        >
          FLUTTER
        </div>

        {/* Eyes Image */}
        <img
          src={eyesImage}
          alt="Neon Eyes"
          className="eyes"
          style={{
            opacity: Math.min(scrollY / 75, 4), // fade in with scroll
            transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`
          }}
        />
      </div>

      {/* Extra content for scrolling */}
      <div style={{ height: "100vh", background: "black" }}></div>
    </div>
  );
};

export default App;
