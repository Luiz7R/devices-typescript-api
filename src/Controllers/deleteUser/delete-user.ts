import { badRequest, ok, serverError } from "./../helpers";
import { IController } from "./../protocols";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { IDeleteDeviceRepository } from "./protocols";

export class DeleteDeviceController implements IController {
  constructor(
    private readonly deleteDeviceRepository: IDeleteDeviceRepository
  ) {}

  async handleRequisition(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Device | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Missing Device id");
      }

      const device = await this.deleteDeviceRepository.deleteDevice(id);

      return ok<Device>(device);
    } catch (error) {
      return serverError();
    }
  }
}
