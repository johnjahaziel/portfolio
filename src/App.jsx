import AboutPage from "./components/AboutPage";
import EducationPath from "./components/EducationPath";
import Experience from "./components/Experience";
import HeroSection from "./components/Herosection";
import TechnicalJourney from "./components/TechnicalJourney";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <HeroSection />
      <AboutPage />
      <TechnicalJourney />
      <EducationPath />
      <Experience />
      {/* <Projects />
      <Contact /> */}
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
