import { IController } from "./../protocols";
import { IGetDevicesRepository } from "./protocols";

export class GetDevicesController implements IController {
  constructor(private readonly getDevicesRepository: IGetDevicesRepository) {}

  async handleRequisition() {
    try {
      const devices = await this.getDevicesRepository.getDevices();

      return {
        statusCode: 200,
        body: devices,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong, on get devices.",
      };
    }
  }
}
