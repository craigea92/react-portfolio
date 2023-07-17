import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
