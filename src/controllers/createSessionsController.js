import testServices from "../services/createSessionServices.js";

async function createSession(req, res) {
  try {
    const response = await testServices.createSessionService();
    return res.status(201).send(response);
  } catch (error) {
    console.log("ERRO AO CRIAR A SESSÃO:", error.message);
    return res.status(500).send("Não foi possível criar a sessão");
  }
}

const createSessionsController = {
  createSession, 
};

export default createSessionsController;
