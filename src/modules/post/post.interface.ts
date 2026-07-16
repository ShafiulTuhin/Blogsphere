import { PostStatus } from "../../../generated/prisma/enums";
import { PostWhereInput, StringFilter } from "../../../generated/prisma/models";

export interface ICreatePostsPayload {
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured?: boolean;
  status?: PostStatus;
  tags: string[];
}

export interface IUpdatePostsPayload {
  title?: string;
  content?: string;
  thumbnail?: string;
  isFeatured?: boolean;
  status?: PostStatus;
  tags?: string[];
}

export interface IPostQuery extends PostWhereInput {
  searchTerm?: string;
  page?: string;
  limit?: string;
  sortBy: string;
  sortOrder: string;
}
