import { MongoDevice } from "./../mongo-protocols";
import { MongoClient } from "./../../database/mongo";
import { IGetDevicesRepository } from "./../../Controllers/getDevices/protocols";
import { Device } from "../../models/device";
import { formatAsCelsius, formatAsPercent } from "../../helpers/formatters";

export class MongoGetDevicesRepository implements IGetDevicesRepository {
  async getDevices(): Promise<Device[]> {
    const devices = await MongoClient.db
      .collection<MongoDevice>("devices")
      .find({})
      .toArray();

    return devices.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
      temperatureFormat: formatAsCelsius(rest.temperature),
      humidityFormat: formatAsPercent(rest.humidity),
      luminosityFormat: formatAsPercent(rest.luminosity),
    }));
  }
}
