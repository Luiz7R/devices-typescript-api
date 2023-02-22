import { MongoDevice } from "./../mongo-protocols";
import { MongoClient } from "./../../database/mongo";
import { Device } from "../../models/device";
import {
  IUpdateDeviceRepository,
  UpdateDeviceParams,
} from "./../../Controllers/updateDevice/protocols";
import { ObjectId } from "mongodb";

export class MongoUpdateDeviceRepository implements IUpdateDeviceRepository {
  async updateDevice(id: string, params: UpdateDeviceParams): Promise<Device> {
    await MongoClient.db.collection("devices").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const device = await MongoClient.db
      .collection<MongoDevice>("devices")
      .findOne({ _id: new ObjectId(id) });

    if (!device) {
      throw new Error("Device not Updated");
    }

    return MongoClient.mapId(device);
  }
}
