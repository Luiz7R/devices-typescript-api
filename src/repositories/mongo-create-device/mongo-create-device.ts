import { MongoClient } from "./../../database/mongo";
import { Device } from "../../models/device";
import {
  CreateDeviceParams,
  ICreateDeviceRepository,
} from "./../../Controllers/createDevice/protocols";

export class MongoCreateDeviceRepository implements ICreateDeviceRepository {
  async createDevice(params: CreateDeviceParams): Promise<Device> {
    const { insertedId } = await MongoClient.db
      .collection("devices")
      .insertOne(params);

    const device = await MongoClient.db
      .collection<Omit<Device, "id">>("devices")
      .findOne({ _id: insertedId });

    if (!device) {
      throw new Error("Device not Created");
    }

    const { _id, ...rest } = device;

    return { id: _id.toHexString(), ...rest };
  }
}
