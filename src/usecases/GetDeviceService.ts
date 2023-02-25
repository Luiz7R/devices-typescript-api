import { IGetDevicesRepository } from "./../Controllers/getDevices/protocols";
import { HttpResponse, IController } from "./../Controllers/protocols";
import { Device } from "./../models/device";
import { serverError, ok } from "./../helpers/helpers";

export class GetDevicesService implements IController {
  constructor(private readonly getDevicesRepository: IGetDevicesRepository) {}

  async handleRequisition(): Promise<HttpResponse<Device[] | string>> {
    try {
      const devices = await this.getDevicesRepository.getDevices();

      return ok<Device[]>(devices);
    } catch (error) {
      return serverError();
    }
  }
}
