import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { postController } from "./post.controller";
const router = Router();

router.post(
  "/",
  auth(Role.USER, Role.AUTHOR, Role.ADMIN),
  postController.createPost,
);
router.get("/", postController.getAllPosts);

router.get(
  "/my-posts",
  auth(Role.USER, Role.AUTHOR, Role.ADMIN),
  postController.getMyPosts,
);

router.get("/:postId", postController.getPostById);
router.patch(
  "/:postId",
  auth(Role.USER, Role.AUTHOR, Role.ADMIN),
  postController.updatePost,
);
router.delete(
  "/:postId",
  auth(Role.USER, Role.AUTHOR, Role.ADMIN),
  postController.deletePost,
);
router.get("/stats", auth(Role.ADMIN), postController.getPostsStats);
export const postRoutes = router;
