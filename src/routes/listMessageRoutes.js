import express from "express";
import listMessagesController from "../controllers/listMessagesController.js";

const messageRouter = express.Router();

messageRouter.get("/messages/:sessionName", listMessagesController.listMessages);

export default messageRouter;
