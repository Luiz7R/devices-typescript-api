import { IController } from "./../protocols";
import { MongoDeleteDeviceRepository } from "./../../repositories/delete-device/mongo-delete-device";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { IDeleteDeviceRepository } from "./protocols";

export class DeleteDeviceController implements IController {
  constructor(
    private readonly deleteDeviceRepository: IDeleteDeviceRepository
  ) {}

  async handleRequisition(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Device>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing Device id",
        };
      }

      const device = await this.deleteDeviceRepository.deleteDevice(id);

      return {
        statusCode: 200,
        body: device,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
