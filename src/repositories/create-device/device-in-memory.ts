import { Device } from "../../models/device";
import {
  CreateDeviceParams,
  ICreateDeviceRepository,
} from "../../Controllers/createDevice/protocols";

export class DeviceRepositoryInMemory implements ICreateDeviceRepository {
  async createDevice(params: CreateDeviceParams): Promise<Device> {
    const genRanHex = (size: number) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
    const id = genRanHex(40);
    const device = Object.assign(params, {
      id: id,
    });

    return device;
  }
}
