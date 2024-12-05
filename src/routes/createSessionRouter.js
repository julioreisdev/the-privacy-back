import express from "express";
import createSessionsController from "../controllers/createSessionsController.js";

const sessionRouter = express.Router();

sessionRouter.post("/sessions", createSessionsController.createSession);

export default sessionRouter;
