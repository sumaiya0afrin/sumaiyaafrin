import Banner from "./components/Banner";
import About from "./components/About";
import Counter from "./components/Counter";
import Myself from "./components/Myself";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
const Layout = () => {
  return (
    <>
      <Banner />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Counter />
        <Myself />
        <Contact />
      </main>
    </>
  );
};

export default Layout;
