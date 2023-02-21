import { HttpResponse } from "./../protocols";
import { Device } from "./../../models/device";
export interface IGetDevicesController {
  handleRequisition(): Promise<HttpResponse<Device[]>>;
}

export interface IGetDevicesRepository {
  getDevices(): Promise<Device[]>;
}
