import fs from "fs";
import { promisify } from "util";

export const getFile = promisify(fs.readFile);
