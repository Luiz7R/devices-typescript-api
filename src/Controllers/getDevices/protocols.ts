import { Device } from "./../../models/device";

export interface IGetDevicesRepository {
  getDevices(): Promise<Device[]>;
}
