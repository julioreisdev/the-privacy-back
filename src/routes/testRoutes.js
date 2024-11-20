import express from "express";
import testControlles from "../controllers/testControllers.js";

const testRouter = express.Router();

testRouter.get("/test/:text", testControlles.testController);

export default testRouter;
