import express from "express";
import * as Controller from "../controller";
import Utils from "../utils";
import { middleware } from "../middleware";

const router = Utils.catchAsyncRouter(express.Router());

router.get("/", middleware.isAuth, Controller.Post.getPosts);

router.get("/:postId", middleware.isAuth, Controller.Post.getById);

router.post("/", middleware.isAuth, Controller.Post.createPosts);

router.patch("/:postId", Controller.Post.editPosts);

router.post("/:postId/like", middleware.isAuth, Controller.Post.addLike);

router.delete("/:postId/unlike", middleware.isAuth, Controller.Post.deleteLike);

router.post("/:postId/comment", middleware.isAuth, Controller.Post.addComment);

router.get("/user/:userId", middleware.isAuth, Controller.Post.getByUserId);

export default router;
