import { color } from "console-log-colors";
import testServices from "../services/testServices.js";

async function testController(req, res) {
  try {
    const response = await testServices.testService(req);
    return res.send(response);
  } catch (error) {
    console.log(color.bgRed("ERRO NO CONTROLLER DE TEST"));
  }
  return res.status(500).send("ALGO DEU ERRADO :(");
}

const testControlles = {
  testController,
};

export default testControlles;
