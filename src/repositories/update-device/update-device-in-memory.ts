import { CreateDeviceParams } from "./../../Controllers/createDevice/protocols";
import {
  IUpdateDeviceRepository,
  UpdateDeviceParams,
} from "./../../Controllers/updateDevice/protocols";
import { Device } from "../../models/device";

export class UpdateDeviceRepositoryInMemory implements IUpdateDeviceRepository {
  async updateDevice(id: string, params: UpdateDeviceParams): Promise<Device> {
    // const genRanHex = (size: number) =>
    //   [...Array(size)]
    //     .map(() => Math.floor(Math.random() * 16).toString(16))
    //     .join("");
    // const id = genRanHex(40);
    const device = Object.assign(params);

    return device;
  }

  async getDevice(id: string): Promise<Device> {
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
