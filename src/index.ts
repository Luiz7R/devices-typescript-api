import { UpdateDeviceController } from "./Controllers/updateDevice/update-device";
import { MongoUpdateDeviceRepository } from "./repositories/update-device/mongo-update-device";
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

  app.patch("/device/:id", async (req, res) => {
    const mongoUpdateDeviceRepository = new MongoUpdateDeviceRepository();

    const updateDeviceController = new UpdateDeviceController(
      mongoUpdateDeviceRepository
    );

    const { body, statusCode } = await updateDeviceController.handleRequisition(
      {
        body: req.body,
        params: req.params,
      }
    );

    res.status(statusCode).send(body);
  });

  app.listen(port, () => console.log(" listening on port", port));
};

main();
