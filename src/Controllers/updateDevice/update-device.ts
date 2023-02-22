import { badRequest } from "./../helpers";
import { IController } from "./../protocols";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateDeviceRepository, UpdateDeviceParams } from "./protocols";
import { ok, serverError } from "../helpers";

export class UpdateDeviceController implements IController {
  constructor(
    private readonly updateDeviceRepository: IUpdateDeviceRepository
  ) {}

  async handleRequisition(
    httpRequest: HttpRequest<UpdateDeviceParams>
  ): Promise<HttpResponse<Device | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest(" Missing fields.");
      }

      if (!id) {
        return badRequest(" Missing device id.");
      }

      const device = await this.updateDeviceRepository.updateDevice(id, body);

      return ok<Device>(device);
    } catch (error) {
      return serverError();
    }
  }
}
