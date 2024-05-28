import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CodingProiles from "./components/CodingProfiles";
import "@coreui/coreui/dist/css/coreui.min.css";
function App() {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <CodingProiles />
      <Contact />
    </div>
  );
}

export default App;
