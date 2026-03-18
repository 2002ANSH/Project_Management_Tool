import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "../models/User.js";
import Project from "../models/Project.js";
import Task from "../models/Task.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await User.deleteMany();
await Project.deleteMany();
await Task.deleteMany();

const user = await User.create({
  email: "test@example.com",
  password: await bcrypt.hash("Test@123", 10),
});

for (let i = 1; i <= 2; i++) {
  const project = await Project.create({
    title: `Project ${i}`,
    description: "Demo project",
    user: user._id,
  });

  for (let j = 1; j <= 3; j++) {
    await Task.create({
      title: `Task ${j}`,
      project: project._id,
    });
  }
}

console.log("Seed Done ✅");
process.exit();