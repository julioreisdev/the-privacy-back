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

const testControllers = {
  testController,
};

export default testControllers;
