import { IController } from "./../protocols";
import { Device } from "../../models/device";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateDeviceRepository, UpdateDeviceParams } from "./protocols";
import { ok, badRequest, serverError } from "../../helpers/helpers";
import { MQTTMessage } from "../../Services/protocols";

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

  async handleMQTTMessage(
    deviceParams: MQTTMessage<UpdateDeviceParams>
  ): Promise<HttpResponse<Device | string>> {
    try {
      const id = deviceParams?.params?.id;
      const params = deviceParams?.body;
      const mqtt = require("mqtt");
      const client = mqtt.connect("mqtt:127.0.0.1:1883");

      client.subscribe("deviceChannel");

      if (!params || Object.keys(params).length == 0) {
        client.publish("deviceChannel", "Missing fields.");
        return badRequest(" Missing fields.");
      }

      if (!id) {
        client.publish("deviceChannel", " Missing device id.");
        return badRequest(" Missing device id.");
      }

      const device = await this.updateDeviceRepository.updateDevice(id, params);

      return ok<Device>(device);
    } catch (error) {
      return serverError();
    }
  }
}
