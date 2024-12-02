import { getFile } from "../utils/files.js";
import fs from "fs/promises"; 
import path from "path";
import { nanoid } from "nanoid";

const SESSIONS_DIR = path.resolve("./src/database/sessions");

async function testService(req) {
  try {
    const data = await getFile(
      "src/database/sessions/testSessions.json",
      "utf8"
    );

    const messagesArray = JSON.parse(data);

    const text = req.params.text;
    return messagesArray;
  } catch (error) {
    console.log("ERRO AO BUSCAR MENSAGENS DE TEST", error);
  }
}
async function listMessagesService(sessionName) {
  try{
    const filePath = path.join(SESSIONS_DIR, `${sessionName}.json`);
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  }catch (error) {
    console.error("ERRO AO LISTAR MENSAGENS:", error);
    throw new Error("Não foi possível listar as mensagens");
  }
}
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
async function deleteSessionService(sessionId) {
  try {
    const filePath = path.join(SESSIONS_DIR, `${sessionId}.json`);
    await fs.access(filePath);
    await fs.unlink(filePath);
    return { message: "Arquivo deletado com sucesso" };
  } catch (error) {
    if (error.code === "ENOENT") {
      return { message: "Arquivo não encontrado" };
    }
    console.error("ERRO AO DELETAR SESSÃO:", error);
    throw new Error("Não foi possível deletar a sessão");
  }
}
const testServices = {
  testService,
  createSessionService,
  deleteSessionService,
  listMessagesService,
};

export default testServices;