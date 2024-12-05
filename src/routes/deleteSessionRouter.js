import express from "express"; 
import deleteSessionController from "../controllers/deleteSessionsController.js";

const deleteSessionRouter = express.Router();

deleteSessionRouter.delete("/sessions/:id", deleteSessionController.deleteSessions);

export default deleteSessionRouter;
