import { MongoDevice } from "./../mongo-protocols";
import { MongoClient } from "./../../database/mongo";
import { IGetDevicesRepository } from "./../../Controllers/getDevices/protocols";
import { Device } from "../../models/device";

export class MongoGetDevicesRepository implements IGetDevicesRepository {
  async getDevices(): Promise<Device[]> {
    const devices = await MongoClient.db
      .collection<MongoDevice>("devices")
      .find({})
      .toArray();

    return devices.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
