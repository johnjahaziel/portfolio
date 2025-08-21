import AboutPage from "./components/AboutPage";
import EducationPath from "./components/EducationPath";
import Experience from "./components/Experience";
import HeroSection from "./components/Herosection";
import Projects from "./components/Projects";
import TechnicalJourney from "./components/TechnicalJourney";
import Techstack from "./components/Techstack";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <HeroSection />
      <AboutPage />
      <TechnicalJourney />
      <EducationPath />
      <Experience />
      <Techstack />
      <Projects />
      {/* <Contact /> */}
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
