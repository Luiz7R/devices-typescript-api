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
