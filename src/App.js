import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home.jsx';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import {BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
