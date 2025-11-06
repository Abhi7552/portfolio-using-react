import NavBar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Technologies from "./components/Technology";
import WorkExperience from "./components/workExperience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import SocialLinksHorizontal from "./components/SocialLinksHorizontal";

function App() {
  return (
    <>
    <NavBar/>
    <div className="h-20" />
  <Home/>
  <About/>
  <Education/>
  <Technologies/>
  <Portfolio/>
  <WorkExperience/>
    <Contact/>
    <SocialLinks/>
    <SocialLinksHorizontal/>
    </>
  );
}

export default App;
