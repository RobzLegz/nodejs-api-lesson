import express from "express";
import { taskCtrl } from "../controllers/taskController";

export const taskRouter = express.Router();

taskRouter.route("/").post(taskCtrl.create);
