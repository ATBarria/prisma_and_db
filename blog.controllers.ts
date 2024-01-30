import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

type Blog = {
  id: number;
  title: string;
  content: string;
};

let FAKE_BLOGS: Blog[] = [];
const prisma = new PrismaClient();

export const createBlogPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;

    const createdBlog = await prisma.blogPost.create({
      data: {
        title,
        content,
      },
    });
    res.status(201).json({
      messagge: "blog created",
      blog: createdBlog,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      messagge: "etwas ist schief gelaufen!",
    });
  }
};
