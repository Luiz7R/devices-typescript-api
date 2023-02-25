import { HttpRequest, HttpResponse } from "./../protocols";
import { Device } from "../../models/device";

export interface UpdateDeviceParams {
  name?: string;
  temperature?: number;
  humidity?: number;
  luminosity?: number;
}

export interface IUpdateDeviceRepository {
  updateDevice(id: string, params: UpdateDeviceParams): Promise<Device>;
}

export interface IUpdateDeviceRepositoryTest {
  updateDevice(id: string, params: UpdateDeviceParams): Promise<Device>;
  getDevice(id: string): Promise<Device>;
}
