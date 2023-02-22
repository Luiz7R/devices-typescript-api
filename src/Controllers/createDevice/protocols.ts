import { HttpRequest, HttpResponse } from "./../protocols";
import { Device } from "./../../models/device";

export interface ICreateDeviceController {
  handleRequisition(
    httpRequest: HttpRequest<Device>
  ): Promise<HttpResponse<Device>>;
}

export interface CreateDeviceParams {
  name: string;
  temperature: number;
  humidity: number;
  luminosity: number;
}

export interface ICreateDeviceRepository {
  createDevice(params: CreateDeviceParams): Promise<Device>;
}
