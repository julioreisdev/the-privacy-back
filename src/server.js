import app from "./app.js";
import dotenv from "dotenv";
import { color } from "console-log-colors";


dotenv.config();

const port = process.env.PORT || 8008;

app.listen(port, () => {
  console.log(color.bgGreen.bold.underline(`SERVER RUNNIG IN ${port}`));
});
