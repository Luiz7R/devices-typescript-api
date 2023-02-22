import { badRequest, created, serverError } from "./../helpers";
import { IController } from "./../protocols";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { CreateDeviceParams, ICreateDeviceRepository } from "./protocols";

export class CreateDeviceController implements IController {
  constructor(
    private readonly createDeviceRepository: ICreateDeviceRepository
  ) {}

  async handleRequisition(
    httpRequest: HttpRequest<CreateDeviceParams>
  ): Promise<HttpResponse<Device | string>> {
    try {
      const requiredFields = ["name", "temperature", "humidity", "luminosity"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateDeviceParams]) {
          return badRequest(`Field ${field} is required`);
        }
      }

      const device = await this.createDeviceRepository.createDevice(
        httpRequest.body!
      );

      return created<Device>(device);
    } catch (error) {
      return serverError();
    }
  }
}
