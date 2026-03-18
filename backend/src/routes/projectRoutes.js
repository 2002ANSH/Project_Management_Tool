import express from "express";
import auth from "../middleware/authMiddleware.js";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    ...req.body,
    user: req.user.id,
  });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
});

export default router;