import { CreateDeviceController } from "./Controllers/createDevice/create-device";
import { MongoCreateDeviceRepository } from "./repositories/mongo-create-device/mongo-create-device";
import { MongoClient } from "./database/mongo";
import { MongoGetDevicesRepository } from "./repositories/get-devices/mongo-get-devices";
import { GetDevicesController } from "./Controllers/getDevices/get-devices";
import express from "express";
import { config } from "dotenv";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();
  const port = process.env.PORT || 8000;

  app.get("/devices", async (req, res) => {
    const mongoGetDevicesRepository = new MongoGetDevicesRepository();

    const getDevicesController = new GetDevicesController(
      mongoGetDevicesRepository
    );

    const { body, statusCode } = await getDevicesController.handleRequisition();

    res.status(statusCode).send(body);
  });

  app.post("/device", async (req, res) => {
    const mongoCreateDeviceRepository = new MongoCreateDeviceRepository();

    const createDeviceController = new CreateDeviceController(
      mongoCreateDeviceRepository
    );

    const { body, statusCode } = await createDeviceController.handleRequisition(
      {
        body: req.body,
      }
    );

    res.status(statusCode).send(body);
  });

  app.listen(port, () => console.log(" listening on port", port));
};

main();
