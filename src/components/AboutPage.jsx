import { useEffect, useRef, useState } from "react";
import download from "../assets/Download.png";
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

  // Tune per-side movement to control perceived speed
  const LEFT_MOVE_PX = 120;   // slower left side
  const RIGHT_MOVE_PX = 200;  // keep right side as-is

  const leftTrackY = (1 - scrollProgress) * LEFT_MOVE_PX;
  const rightTrackY = (scrollProgress - 1) * RIGHT_MOVE_PX;

  // Slow down scrolling while About section is in view
  useEffect(() => {
    if (!isInView) return;

    let rafId = null;
    let pendingDeltaY = 0;
    const slowFactor = 0.3; // smaller = slower

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

  // Cursor-following fill effect for the Download button
  const handleButtonMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

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
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqbzljwsWPlsQMrnjcTJZlFTTNDGvjSTdcXvCmVLsLBhZCQwwVjpGMLmCVZWlHFlSlNrLB" className="icon-btn gmail">
              <img src={gmailLogo} alt="Gmail" className="icon" />
            </a>
            <a
              href="https://github.com/johnjahaziel"
              target="_blank"
              rel="noreferrer"
              className="icon-btn github"
            >
              <img src={githubLogo} alt="GitHub" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-jahaziel-b1882b28b"
              target="_blank"
              rel="noreferrer"
              className="icon-btn linkedin"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="icon" />
            </a>
          </div>
          <div>
            <a href="/John_Jahaziel_Resume.pdf" download className="download" onMouseMove={handleButtonMouseMove}>
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="bubble" aria-hidden="true"></span>
              ))}
              Download Resume
              <img src={download} alt="Download" />
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
