import { ObjectId } from "mongodb";
import { MongoDevice } from "./../mongo-protocols";
import { IGetDeviceRepository } from "./../../Controllers/getDevice/protocols";
import { MongoClient } from "./../../database/mongo";

import { Device } from "../../models/device";

export class MongoGetDeviceRepository implements IGetDeviceRepository {
  async getDevice(id: string): Promise<Device> {
    const device = await MongoClient.db
      .collection<MongoDevice>("devices")
      .findOne({ _id: new ObjectId(id) });

    if (!device) {
      throw new Error("Device not Find");
    }

    return MongoClient.mapId(device);
  }
}
