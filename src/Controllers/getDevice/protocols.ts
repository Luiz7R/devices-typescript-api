import { Device } from "../../models/device";

export interface GetDeviceParams {
  name?: string;
  temperature?: number;
  humidity?: number;
  luminosity?: number;
}

export interface IGetDeviceRepository {
  getDevice(id: string): Promise<Device>;
}

export interface IGetDeviceRepositoryTest {
  getDevice(id: string): Promise<Device>;
}
