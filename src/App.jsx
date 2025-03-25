import Ball from "../Ball";
import About from "./components/About";
import "./index.css";

import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myself from "./components/Myself";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Ball />
      <ScrollToTop />

      <Header />
      <Banner />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Counter />
        <Myself />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
