import React from "react"
import { BrowserRouter as Router,
  Switch, NavLink} from "react-router-dom"
import PDF from "./PDF"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
    <h1> Hi I'm Deep Prajapati a Science Minded Tech Enthusiast</h1>
        <p>
          <h3> About Me</h3>
          I graduated from college with a degree in Neuroscience and worked as a research assistant at a translational research lab and as a Psychometrician. At both places I was exposed to how software works hand in hand with science to achieve results. I wanted to play a bigger role in the building process of those programs to help solve problems across all disciplines. During quarantine I took the time to learn the basics of coding and decided to make the jump from pre-health to software development. I joined GraceHopper Program to develop the skill set I need to learn quickly and efficiently. I bring my skills of inquiry, collaboration and attention to detail to web-development.

        </p>
        <span>
          Connect With Me
        </span>
        <a
          className="github-link"
          href="https://https://github.com/dprajapati4"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="linkedIn-link"
          href="https://www.linkedin.com/in/deepprajapati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>
        <div className = "Pdf-viewer">
        <NavLink to="/src/PDF.js" > Resume </NavLink>
      </div>
      </header>

    </div>
    </Router>
  );
}

export default App;
