import express from "express";
import testControllers from "../controllers/testControllers.js"; 

const testRouter = express.Router();

testRouter.get("/test/:text", testControllers.testController);

export default testRouter;
