import { DeleteDeviceRepositoryInMemory } from "../repositories/delete-device/delete-device-in-memory";
import { DeleteDeviceService } from "./DeleteDeviceService";

describe("Test Route Delete Device", () => {
  it("should delete device", async () => {
    const id = "63f67a506d9a73aa245179df";

    const deleteDeviceRepositoryInMemory = new DeleteDeviceRepositoryInMemory();
    const deleteDeviceService = new DeleteDeviceService(
      deleteDeviceRepositoryInMemory
    );

    const { body, statusCode } = await deleteDeviceService.delete(id);

    expect(statusCode).toBe(200);
  });
});
