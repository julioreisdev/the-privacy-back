import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";
import createSessionRoutes from "./routes/createSessionRouter.js";
import deleteSessionRoutes from "./routes/deleteSessionRouter.js";
import listMessageRoutes from './routes/listMessageRoutes.js'; 

const app = express();

app.use(cors());          
app.use(express.json());   
app.use(testRouter);           
app.use(createSessionRoutes);   
app.use(deleteSessionRoutes);   
app.use(listMessageRoutes); 

export default app;
