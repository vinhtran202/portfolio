import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Started from "./components/Started";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Work />
      <Blog />
      <Started />
      <Contact />
      <Footer />
    </>
  );
}
