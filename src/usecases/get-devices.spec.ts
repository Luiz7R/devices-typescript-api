import { Device } from "./../models/device";
import { GetDevicesRepositoryInMemory } from "./../repositories/get-devices/get-device-in-memory";
import { GetDevicesService } from "./GetDeviceService";

describe("Test Route Get Devices", () => {
  it("should get devices", async () => {
    const getDevicesRepositoryInMemory = new GetDevicesRepositoryInMemory();

    const getDevicesService = new GetDevicesService(
      getDevicesRepositoryInMemory
    );

    const { body, statusCode } = await getDevicesService.handleRequisition();
    expect(body).toBeInstanceOf<Device>;
    expect(statusCode).toBe(200);
  });
});
