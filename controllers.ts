import { PrismaClient } from "@prisma/client";

type Blog = {
  id: number;
  title: string;
  content: string;
};

let DUMMY_BLOGS: Blog[] = [];
const prisma = new PrismaClient();
