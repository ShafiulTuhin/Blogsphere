import { CommentStatus } from "../../../generated/prisma/enums";

export interface ICreateCommentPayload {
  content: string;
  postId: string;
  authorId: string;
  status?: CommentStatus;
}
