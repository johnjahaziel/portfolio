import AboutPage from "./components/AboutPage";
import HeroSection from "./components/Herosection";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <HeroSection />
      <AboutPage />
      {/* You can keep adding more sections */}
    </div>
  );
};

export default App;
