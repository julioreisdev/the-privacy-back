import testServices from "../services/deleteSessionServices.js";

async function deleteSessions(req, res) {
  const { id } = req.params;
  try {
    const response = await testServices.deleteSessions(id); 
    return res.status(200).send(response);
  } catch (error) {
    console.log("ERRO AO DELETAR SESSÃO:", error.message);
    return res.status(500).send("Não foi possível deletar a sessão");
  }
}

const deleteSessionsController = {
  deleteSessions,
};

export default deleteSessionsController;
