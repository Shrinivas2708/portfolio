import { Toaster } from "sonner";
import About from "./components/about";
import Certification from "./components/certification";
import Contact from "./components/contact";
import Container from "./components/container";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetail from "./components/projectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="fixed inset-0 mx-auto min-h-screen w-full max-w-4xl">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-black/10 bg-gradient-to-b"></div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-black/10 bg-gradient-to-b"></div>
        </div>

        <Toaster position="top-right" />
        <Navbar />
        <Container className="mt-24 md:mt-34">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Education />
                  <Certification />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/projects/:category" element={<ProjectDetail />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
