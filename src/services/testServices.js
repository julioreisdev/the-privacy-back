import { getFile } from "../utils/files.js";

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

const testServices = {
  testService,
};

export default testServices;