import Ball from "../Ball";
import "./index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Ball />
      <ScrollToTop />

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
