import express from "express";
import auth from "../middleware/authMiddleware.js";
import Task from "../models/Task.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.get("/:projectId", auth, async (req, res) => {
  const { status } = req.query;

  let query = { project: req.params.projectId };
  if (status) query.status = status;

  const tasks = await Task.find(query);
  res.json(tasks);
});

export default router;