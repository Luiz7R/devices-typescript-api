import { Device } from "./../../models/device";

export interface CreateDeviceParams {
  name: string;
  temperature: number;
  humidity: number;
  luminosity: number;
}

export interface ICreateDeviceRepository {
  createDevice(params: CreateDeviceParams): Promise<Device>;
}
