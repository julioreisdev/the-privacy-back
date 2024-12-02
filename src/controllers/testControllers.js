import testServices from "../services/testServices.js";

async function testController(req, res) {
  try {
    const response = await testServices.testService(req);
    return res.send(response);
  } catch (error) {
    console.log("ERRO NO CONTROLLER DE TEST:", error.message);
    return res.status(500).send("ALGO DEU ERRADO :(");
  }
}

async function listMessagesController(req, res) {
  const { sessionName } = req.params; 
  try {
    const messages = await testServices.listMessagesService(sessionName);
    return res.status(200).send(messages);
  } catch (error) {
    console.log("ERRO NO CONTROLLER DE LISTAR MENSAGENS:", error.message);
    return res.status(500).send("Não foi possível listar as mensagens");
  }
}

async function createSessionController(req, res) {
  try {
    const response = await testServices.createSessionService();
    return res.status(201).send(response);
  } catch (error) {
    console.log("ERRO AO CRIAR A SESSÃO:", error.message);
    return res.status(500).send("Não foi possível criar a sessão");
  }
}

async function deleteSessionController(req, res) {
  const { id } = req.params;
  try {
    const response = await testServices.deleteSessionService(id);
    return res.status(200).send(response);
  } catch (error) {
    console.log("ERRO AO DELETAR SESSÃO:", error.message);
    return res.status(500).send("Não foi possível deletar a sessão");
  }
}

const testControllers = {
  testController,
  listMessagesController,
  createSessionController,
  deleteSessionController,
};

export default testControllers;
