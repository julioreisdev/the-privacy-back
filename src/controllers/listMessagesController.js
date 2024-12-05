import testServices from "../services/listMessagesServices.js";

async function listMessages(req, res) {
  const { sessionName } = req.params;
  try {
    const messages = await testServices.listMessagesService(sessionName);
    return res.status(200).send(messages);
  } catch (error) {
    console.log("ERRO NO CONTROLLER DE LISTAR MENSAGENS:", error.message);
    return res.status(500).send("Não foi possível listar as mensagens");
  }
}

const listMessagesController = {
  listMessages,
};

export default listMessagesController;