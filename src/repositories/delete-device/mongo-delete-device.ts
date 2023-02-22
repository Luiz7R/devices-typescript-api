import { ObjectId } from "mongodb";
import { MongoClient } from "./../../database/mongo";
import { Device } from "../../models/device";
import { IDeleteDeviceRepository } from "./../../Controllers/deleteUser/protocols";

export class MongoDeleteDeviceRepository implements IDeleteDeviceRepository {
  async deleteDevice(id: string): Promise<Device> {
    const device = await MongoClient.db
      .collection<Omit<Device, "id">>("devices")
      .findOne({ _id: new ObjectId(id) });

    if (!device) {
      throw new Error("Device not Found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("devices")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Device not Deleted");
    }

    const { _id, ...rest } = device;

    return { id: _id.toHexString(), ...rest };
  }
}
