import { useEffect, useRef, useState } from "react";
import halfFaceLeft from "../assets/Half_Face_left.png";
import halfFaceRight from "../assets/Half_Face_right.png";
import githubLogo from "../assets/icons/githublogo.png";
import gmailLogo from "../assets/icons/gmaillogo.png";
import linkedinLogo from "../assets/icons/linkedinlogo.png";
import "../css/aboutpage.css";

const AboutPage = () => {
  const aboutRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress goes 0 → 2 while the section crosses one viewport height
      let progress = 1 - rect.top / windowHeight;
      progress = Math.min(Math.max(progress, 0), 2);

      setScrollProgress(progress);
      const inView = rect.top < windowHeight && rect.bottom > 0;
      setIsInView(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftTrackY = (1 - scrollProgress) * 200;
  const rightTrackY = (scrollProgress - 1) * 200;

  // Slow down scrolling while About section is in view
  useEffect(() => {
    if (!isInView) return;

    let rafId = null;
    let pendingDeltaY = 0;
    const slowFactor = 0.35; // smaller = slower

    const flushScroll = () => {
      window.scrollBy(0, pendingDeltaY);
      pendingDeltaY = 0;
      rafId = null;
    };

    const handleWheel = (e) => {
      // Prevent default to take control and apply slow motion
      e.preventDefault();
      pendingDeltaY += e.deltaY * slowFactor;
      if (rafId === null) rafId = requestAnimationFrame(flushScroll);
    };

    // Basic touch support (slows vertical drags)
    let lastTouchY = null;
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) lastTouchY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (lastTouchY == null) return;
      const currentY = e.touches[0].clientY;
      const dy = lastTouchY - currentY; // natural scroll direction
      if (Math.abs(dy) > 0) {
        e.preventDefault();
        pendingDeltaY += dy * slowFactor;
        if (rafId === null) rafId = requestAnimationFrame(flushScroll);
      }
      lastTouchY = currentY;
    };
    const handleTouchEnd = () => {
      lastTouchY = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isInView]);

  return (
    <>
      <div ref={aboutRef} className="about-container">
        {/* Right side faces (move in opposite directions) */}
        <div className="face-wrapper">
          <img
            src={halfFaceLeft}
            alt="Left Face"
            className="face left"
            style={{ transform: `translateY(${leftTrackY}px)`, opacity: isInView ? 1 : 0 }}
          />
          <img
            src={halfFaceRight}
            alt="Right Face"
            className="face right"
            style={{ transform: `translateY(${rightTrackY}px)`, opacity: isInView ? 1 : 0 }}
          />
        </div>

        {/* Left side content (moves up with scroll) */}
        <div
          className="left-content"
          style={{ transform: `translateY(calc(-50% + ${leftTrackY}px))` }}
        >
          <h1>JOHN</h1>
          <h1>JAHAZIEL</h1>
          <br />
          <h4>Flutter App Developer</h4>

          <div className="social-buttons">
            <a href="mailto:yourmail@gmail.com" className="icon-btn gmail">
              <img src={gmailLogo} alt="Gmail" className="icon" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="icon-btn github"
            >
              <img src={githubLogo} alt="GitHub" className="icon" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="icon-btn linkedin"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
      </div>
      {/* Extra space to allow scroll past the section so animations continue off-screen */}
      <div className="after-space" />
    </>
  );
};

export default AboutPage;
