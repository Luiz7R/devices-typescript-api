import { ok } from "./../helpers/helpers";
import { IUpdateDeviceRepositoryTest } from "./../Controllers/updateDevice/protocols";
import { UpdateDeviceParams } from "../Controllers/updateDevice/protocols";
import { Device } from "../models/device";

export class UpdateDeviceService {
  constructor(
    private readonly updateDeviceRepository: IUpdateDeviceRepositoryTest
  ) {}

  async getDevice(id: string) {
    const deviceBeforeUpdate = await this.updateDeviceRepository.getDevice(id);
    return deviceBeforeUpdate;
  }

  async updateDevice(id: string, device: UpdateDeviceParams) {
    const updateDevice = await this.updateDeviceRepository.updateDevice(
      id,
      device
    );
    return ok<Device>(updateDevice);
  }
}
