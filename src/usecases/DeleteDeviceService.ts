import { ok } from "./../helpers/helpers";
import { Device } from "../models/device";
import { IDeleteDeviceRepository } from "../Controllers/deleteUser/protocols";

export class DeleteDeviceService {
  constructor(
    private readonly updateDeviceRepository: IDeleteDeviceRepository
  ) {}

  async delete(id: string) {
    const updateDevice = await this.updateDeviceRepository.deleteDevice(id);
    return ok<Device>(updateDevice);
  }
}
