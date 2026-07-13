import { prisma } from "../../lib/prisma";
import { ICreatePostsPayload } from "./post.interface";

const createPost = async (payload: ICreatePostsPayload, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });
  return result;
};
const getAllPosts = () => {};
const getPostById = () => {};
const updatePost = () => {};
const deletePost = () => {};
const getPostsStats = () => {};

export const postService = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsStats,
};
