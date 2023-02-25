import { UpdateDeviceRepositoryInMemory } from "../repositories/update-device/update-device-in-memory";
import { UpdateDeviceService } from "./UpdateDeviceService";

describe("Test Route Update Device", () => {
  it("should update device", async () => {
    const params = {
      name: "test update",
      temperature: 25.2,
      humidity: 41.5,
      luminosity: 0,
    };
    const id = "63f67a506d9a73aa245149df";

    const updateDeviceRepositoryInMemory = new UpdateDeviceRepositoryInMemory();
    const updateDeviceService = new UpdateDeviceService(
      updateDeviceRepositoryInMemory
    );

    const deviceBeforeUpdate = updateDeviceService.getDevice(id);

    const { body, statusCode } = await updateDeviceService.updateDevice(
      id,
      params
    );

    expect(body).not.toEqual((await deviceBeforeUpdate).temperature);
    expect(body).not.toEqual((await deviceBeforeUpdate).humidity);
    expect(body).not.toEqual((await deviceBeforeUpdate).luminosity);
    expect(statusCode).toBe(200);
  });
});
