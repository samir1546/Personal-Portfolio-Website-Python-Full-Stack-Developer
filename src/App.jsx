import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Squares from "./SquaresGSAP";

const App = () => {
  return (
    <>
      <Squares
        direction="diagonal"
        speed={1}
        borderColor="#88888854"
        squareSize={35}
        hoverFillColor="#222"
      />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
