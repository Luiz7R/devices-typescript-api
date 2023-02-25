import { IDeleteDeviceRepository } from "./../../Controllers/deleteUser/protocols";
import { Device } from "../../models/device";

export class DeleteDeviceRepositoryInMemory implements IDeleteDeviceRepository {
  async deleteDevice(id: string): Promise<Device> {
    const params = {
      name: "test update",
      temperature: 22.2,
      humidity: 39.5,
      luminosity: 10,
    };

    const device = Object.assign(params, {
      id: id,
    });

    return device;
  }
}
