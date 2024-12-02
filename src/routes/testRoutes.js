import express from "express";
import testControllers from "../controllers/testControllers.js"; 

const testRouter = express.Router();

testRouter.get("/test/:text", testControllers.testController);

testRouter.get("/messages/:sessionName", testControllers.listMessagesController);

testRouter.post("/sessions", testControllers.createSessionController);

testRouter.delete("/sessions/:id", testControllers.deleteSessionController);


export default testRouter;
