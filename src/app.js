import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(testRouter);

export default app;
