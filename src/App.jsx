import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
