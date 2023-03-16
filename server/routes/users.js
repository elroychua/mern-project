import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Create read routes - routes you grab info from.
/* READ */
//Query string.
router.get("/:id", verifyToken, getUser); //if FE is sending a userId, we can grab and call db w id.
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); // similar to FB
