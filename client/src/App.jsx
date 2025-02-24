import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";

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

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to your project management dashboard.</p>
      <img src="/image/welcome.svg" alt="Welcome" className="welcome-image" />
    </div>
  );
}

export default App;
