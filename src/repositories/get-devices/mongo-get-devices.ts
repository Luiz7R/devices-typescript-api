import { IGetDevicesRepository } from "./../../Controllers/getDevices/protocols";
import { Device } from "../../models/device";

export class MongoGetDevicesRepository implements IGetDevicesRepository {
  async getDevices(): Promise<Device[]> {
    return [
      {
        name: "Air Conditioning",
        temperature: 17,
        humidity: 71.7,
        luminosity: 0,
      },
    ];
  }
}
