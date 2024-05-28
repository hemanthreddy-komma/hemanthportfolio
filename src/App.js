import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CodingProiles from "./components/CodingProfiles";
import "@coreui/coreui/dist/css/coreui.min.css";
function App() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-200 relative">
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
