import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const taskCtrl = {
  create: async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const task = await prisma.task.create({
        data: {
          title,
          description,
        },
      });

      res.json(task);
    } catch (err: any) {
      return res.status(500).json({ err: err.message });
    }
  },
  receiveTasks: async (req: Request, res: Response) => {
    try {
      const tasks = await prisma.task.findMany();

      res.json(tasks);
    } catch (err: any) {
      return res.status(500).json({ err: err.message });
    }
  },
  deleteTask: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await prisma.task.delete({ where: { id: id } });

      res.json({ msg: `Task with id ${id} deleted successfully` });
    } catch (err: any) {
      return res.status(500).json({ err: err.message });
    }
  },
  updateTask: async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const { id } = req.params;

      const task = await prisma.task.update({
        where: { id: id },
        data: { title, description },
      });

      res.json({ msg: `Task updated successfully`, task });
    } catch (err: any) {
      return res.status(500).json({ err: err.message });
    }
  },
};
