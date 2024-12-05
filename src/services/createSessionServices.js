import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const SESSIONS_DIR = path.resolve("./src/database/sessions/");

async function createSessionService() {
  try {
    const sessionId = nanoid(10);
    const fileName = `${sessionId}.json`;
    const filePath = path.join(SESSIONS_DIR, fileName);
    console.log(filePath)
    const data = {
      sessionId,
      createdAt: new Date().toISOString(),
      messages: [],
    };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    return { message: "Arquivo criado com sucesso", fileName };
  } catch (error) {
    console.error("ERRO AO CRIAR NOVA SESSÃO:", error);
    throw new Error("Não foi possível criar o arquivo JSON");
  }
}
const sessionServices = {
  createSessionService,
};
export default sessionServices;