import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/Navbar";
import { SocialLinks } from "./Components/Socials/SocialLinks";
import { AboutMe } from "./Components/About/AboutMe";
import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume/Resume";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <SocialLinks />
              <AboutMe />
              <Resume />
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
