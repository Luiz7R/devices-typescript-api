import { HttpRequest, HttpResponse } from "./../protocols";
import { Device } from "./../../models/device";

export interface IDeleteDeviceController {
  handleRequisition(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Device>>;
}

export interface IDeleteDeviceRepository {
  deleteDevice(id: string): Promise<Device>;
}
