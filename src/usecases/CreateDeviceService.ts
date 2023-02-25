import { Device } from "./../models/device";
import {
  CreateDeviceParams,
  ICreateDeviceRepository,
} from "./../Controllers/createDevice/protocols";
import { created } from "../helpers/helpers";

export class CreateDeviceService {
  constructor(
    private readonly createDeviceRepository: ICreateDeviceRepository
  ) {}

  async createDevice(device: CreateDeviceParams) {
    const deviceCreate = await this.createDeviceRepository.createDevice(device);
    return created<Device>(deviceCreate);
  }
}
