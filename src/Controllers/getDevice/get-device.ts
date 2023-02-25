import { Device } from "./../../models/device";
import { IController, HttpRequest, HttpResponse } from "./../protocols";
import { ok, badRequest, serverError } from "../../helpers/helpers";
import { IGetDeviceRepository, GetDeviceParams } from "./protocols";

export class GetDeviceController implements IController {
  constructor(private readonly getDeviceRepository: IGetDeviceRepository) {}

  async handleRequisition(
    httpRequest: HttpRequest<GetDeviceParams>
  ): Promise<HttpResponse<Device | string>> {
    try {
      const id = httpRequest?.params?.id;

      const device = await this.getDeviceRepository.getDevice(id);

      return ok<Device>(device);
    } catch (error) {
      return serverError();
    }
  }
}
