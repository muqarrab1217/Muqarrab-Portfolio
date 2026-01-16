/**
 * @copyright 2024 muqarrabahmed
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AndroidAppShowcase from "./components/AndroidAppShowcase";


const Home = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Experience />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )

}


const App = () => {
  return (
    <Router basename="/Muqarrab-Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/android" element={<AndroidAppShowcase />} />
      </Routes>
    </Router>
  )
}


export default App;