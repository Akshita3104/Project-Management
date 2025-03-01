const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// Create a new project
router.post("/create", async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;

    if (!name || !createdBy) {
      return res.status(400).json({ error: "Project name and creator ID are required" });
    }

    const newProject = new Project({ name, description, createdBy });
    await newProject.save();
    
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "username");
    res.json({ projects });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Get a single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("createdBy", "username");

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ project });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Update a project
router.put("/:id", async (req, res) => {
  try {
    const { name, description } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true } // Ensures updated document returns
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ message: "Project updated successfully", project: updatedProject });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

module.exports = router;
