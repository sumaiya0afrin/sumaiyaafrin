import Ball from "../Ball";
import About from "./components/About";
import "./App.css";

import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myself from "./components/Myself";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
// import ScrollToTop from "react-scroll-to-top";
// import { CiSaveUp1 } from "react-icons/ci";

function App() {
  return (
    <>
      <Ball />
      {/* <ScrollToTop
        smooth
        style={{
          backgroundColor: "#071e1f",
          width: "50px",
          height: "50px",
        }}
        component={
          <CiSaveUp1
            style={{
              color: "#11f7d5",
              fontSize: "30px",
              justifySelf: "center",
            }}
          />
        }
      /> */}

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
