import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);