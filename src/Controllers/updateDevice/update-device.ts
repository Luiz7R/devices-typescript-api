import { IController } from "./../protocols";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateDeviceRepository, UpdateDeviceParams } from "./protocols";

export class UpdateDeviceController implements IController {
  constructor(
    private readonly updateDeviceRepository: IUpdateDeviceRepository
  ) {}

  async handleRequisition(
    httpRequest: HttpRequest<UpdateDeviceParams>
  ): Promise<HttpResponse<Device>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return {
          statusCode: 500,
          body: " Missing fields.",
        };
      }

      if (!id) {
        return {
          statusCode: 500,
          body: " Missing device id.",
        };
      }

      const device = await this.updateDeviceRepository.updateDevice(id, body);

      return {
        statusCode: 200,
        body: device,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: " Something went Wrong.",
      };
    }
  }
}
