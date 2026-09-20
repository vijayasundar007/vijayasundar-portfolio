import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import AutomationShowcase from "./components/AutomationShowcase";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AutomationShowcase />
        <Contact />
      </main>

    </div>
  );
}

export default App;