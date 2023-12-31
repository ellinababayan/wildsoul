import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Features from "./components/features/Features";
import Discover from "./components/discover/Discover";
import Book from "./components/book/Book";
import Plans from "./components/gallery/Plans";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <Discover scrollToSection={scrollToSection} />
      <Features scrollToSection={scrollToSection} />
      <Plans scrollToSection={scrollToSection} />
      <Book scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
}

export default App;
