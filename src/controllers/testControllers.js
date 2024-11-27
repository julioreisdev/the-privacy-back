import { color } from "console-log-colors";
import testServices from "../services/testServices.js";

async function testController(req, res) {
  try {
    const response = await testServices.testService(req);
    return res.send(response);
  } catch (error) {
    console.log(color.bgRed("ERRO NO CONTROLLER DE TEST"));
    return res.status(500).send("ALGO DEU ERRADO :(");
  }
}

async function createSessionController(req, res) {
  try {
    const response = await testServices.createSessionService();
    return res.status(201).send(response);
  } catch (error) {
    console.log(color.bgRed("ERRO AO CRIAR A SESSÃO"));
    return res.status(500).send("ALGO DEU ERRADO :(");
  }
}

const testControllers = {
  testController,
  createSessionController
};

export default testControllers;
