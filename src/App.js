import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Features from "./components/features/Features";
import Discover from "./components/discover/Discover";
import Book from "./components/book/Book";
import Navbar from "./components/navbar/Navbar";

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
      {/* <Navbar scrollToSection={scrollToSection} /> */}
      <Header scrollToSection={scrollToSection} />
      {/* <Discover />
      <Features />
      <Book />
      <Footer /> */}
    </div>
  );
}

export default App;
