import { Device } from "./../../models/device";

export interface IDeleteDeviceRepository {
  deleteDevice(id: string): Promise<Device>;
}
