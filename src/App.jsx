import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import EducationPath from "./components/EducationPath";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import TechnicalJourney from "./components/TechnicalJourney";
import Techstack from "./components/Techstack";

const App = () => {
  return (
    <HelmetProvider>
      <div style={{ background: "black", position: "relative", zIndex: 0 }}>
        {/* SEO Meta Tags */}
        <Helmet>
          <title>John Jahaziel | Portfolio</title>
          <meta
            name="description"
            content="Official portfolio of John Jahaziel, Flutter Developer. Explore my projects, experience, and journey."
          />
          <meta name="keywords" content="John Jahaziel, Portfolio, Flutter Developer" />
          <meta name="author" content="John Jahaziel" />
          <link rel="canonical" href="https://johnjahaziel.vercel.app/" />
        </Helmet>

        {/* Sections */}
        <HeroSection />
        <AboutPage />
        <TechnicalJourney />
        <EducationPath />
        <Experience />
        <Techstack />
        <Projects />
        <Contact />
      </div>
    </HelmetProvider>
  );
};

export default App;
