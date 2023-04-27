import express from "express";
import { taskCtrl } from "../controllers/taskController";

export const taskRouter = express.Router();

taskRouter.route("/").post(taskCtrl.create).get(taskCtrl.receiveTasks);

taskRouter.route("/:id").delete(taskCtrl.deleteTask).put(taskCtrl.updateTask);
