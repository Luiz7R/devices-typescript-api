import { MongoClient } from "./database/mongo";
import { MongoGetDevicesRepository } from "./repositories/get-devices/mongo-get-devices";
import { GetDevicesController } from "./Controllers/getDevices/get-devices";
import express from "express";
import { config } from "dotenv";

const main = async () => {
  config();

  const app = express();
  await MongoClient.connect();
  const port = process.env.PORT || 8000;

  app.get("/devices", async (req, res) => {
    const mongoGetDevicesRepository = new MongoGetDevicesRepository();

    const getDevicesController = new GetDevicesController(
      mongoGetDevicesRepository
    );

    const { body, statusCode } = await getDevicesController.handleRequisition();

    res.send(body).status(statusCode);
  });

  app.listen(port, () => console.log(" listening on port", port));
};

main();
