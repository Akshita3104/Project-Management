import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import './App.css';
import welcomeImage from "../public/image/welcome.svg";
import About from "./components/About";

const isAuthenticated = false;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Project Management</h1>
      <div className="nav-links">
        <Link to="/">Workspace</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        {isAuthenticated ? (
          <button className="logout-button">
            <FiLogOut /> Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-button">
              <FiLogIn /> Login
            </Link>
            <Link to="/signup" className="signup-button">
              <FiUserPlus /> Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function Sidebar() {
  const [projects, setProjects] = useState(["Project Alpha", "Project Beta"]);
  return (
    <div className="sidebar">
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <AiOutlineProject /> {project}
          </li>
        ))}
      </ul>
      <h2>Workspace</h2>
      <button className="add-project-button" onClick={() => setProjects([...projects, `Project ${projects.length + 1}`])}>
        <FaPlus /> Add New Project
      </button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to your project management dashboard.</p>
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
    </div>
  );
}

function Contact() {
  return <div className="page">Contact Page</div>;
}
function Login() {
  return <div className="page">Login Page</div>;
}
function Signup() {
  return <div className="page">Signup Page</div>;
}

export default App;
