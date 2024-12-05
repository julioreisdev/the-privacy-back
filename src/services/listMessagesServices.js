import fs from "fs/promises";
import path from "path";

const SESSIONS_DIR = path.resolve("./src/database/sessions");

async function listMessagesService(sessionName) {
  try {
    const filePath = path.join(SESSIONS_DIR, `${sessionName}.json`);
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("ERRO AO LISTAR MENSAGENS:", error);
    throw new Error("Não foi possível listar as mensagens");
  }
}

const listMessagesServices = {
  listMessagesService,
};

export default listMessagesServices;