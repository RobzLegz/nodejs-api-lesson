import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const taskCtrl = {
  create: async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      console.log(title, description);

      res.json({ msg: "Thanks" });
    } catch (err: any) {
      return res.status(500).json({ err: err.message });
    }
  },
};
