import fs from "fs/promises";
import path from "path";

const SESSIONS_DIR = path.resolve("./src/database/sessions");

async function deleteSessions(sessionId) {
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

const deleteSessionService = {
  deleteSessions,
};

export default deleteSessionService;