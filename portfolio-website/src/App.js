import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";
import "./styles/Toolbar.css";
import DetailPage from "./pages/DetailPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-toolbar">
            <div className="toolbar-left">
              <Link to="/">
                <h1>Simon Chen</h1>
              </Link>
            </div>
            <div className="toolbar-right">
              <Link to="/detail">
                <button>Detail</button>
              </Link>
              <Link to="/projects">
                <button>Projects</button>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Simon Chen. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
