import { DeviceRepositoryInMemory } from "../repositories/create-device/device-in-memory";
import { CreateDeviceService } from "./CreateDeviceService";

describe("Test Route Create Device", () => {
  it("should get create device", async () => {
    const params = {
      name: "teste",
      temperature: 22.2,
      humidity: 39.5,
      luminosity: 10,
    };

    const createDeviceRepositoryInMemory = new DeviceRepositoryInMemory();

    const createDeviceService = new CreateDeviceService(
      createDeviceRepositoryInMemory
    );

    const { body, statusCode } = await createDeviceService.createDevice(params);
    expect(body).toHaveProperty("id");
    expect(statusCode).toBe(201);
  });
});

// describe("Create Device use case", () => {
//   it("should be able to create a new device", async () => {
//     await MongoClient.connect();

//     const mongoCreateDeviceRepository = new MongoCreateDeviceRepository();

//     const deviceParamsTest: CreateDeviceParams = {
//       name: "Device Test I",
//       temperature: 23.8,
//       humidity: 40,
//       luminosity: 10,
//     };

//     const createDeviceController = new CreateDeviceController(
//       mongoCreateDeviceRepository
//     );

//     const { body, statusCode } = await createDeviceController.handleRequisition(
//       {
//         body: deviceParamsTest,
//       }
//     );
//     console.log(body);
//     console.log(statusCode);
//     //expect(statusCode === 201).toBeTruthy();
//     //expect(body as Device).toBeTruthy();
//     // res.status(statusCode).send(body);
//   });
// });
