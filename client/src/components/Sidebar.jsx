import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import "../App.css";

function Sidebar() {
  const [projects, setProjects] = useState(["Project Alpha", "Project Beta"]);

  const sidebarStyle = {
    width: "280px",
    backgroundColor: "#000000",
    color: "white",
    padding: "1.5rem",
    height: "90vh",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    position: "fixed"
  };

  const projectListStyle = {
    listStyle: "none",
    padding: 0,
    flexGrow: 1
  };

  const projectItemStyle = {
    padding: "0.75rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1rem",
    borderRadius: "5px"
  };

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "0.75rem",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (
    <div style={sidebarStyle}>
      <h2>Workspace</h2>
      <ul style={projectListStyle}>
        {projects.map((project, index) => (
          <li key={index} style={projectItemStyle}>
            <AiOutlineProject /> {project}
          </li>
        ))}
      </ul>
      <button
        style={buttonStyle}
        onClick={() => setProjects([...projects, `Project ${projects.length + 1}`])}
      >
        <FaPlus /> Add New Project
      </button>
    </div>
  );
}

export default Sidebar;
