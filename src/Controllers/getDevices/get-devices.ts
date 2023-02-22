import { Device } from "./../../models/device";
import { ok, serverError } from "../../helpers/helpers";
import { HttpResponse, IController } from "./../protocols";
import { IGetDevicesRepository } from "./protocols";

export class GetDevicesController implements IController {
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
