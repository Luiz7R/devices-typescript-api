import { IGetDevicesRepository } from "./../../Controllers/getDevices/protocols";
import { Device } from "../../models/device";
import { formatAsCelsius, formatAsPercent } from "../../helpers/formatters";

export class GetDevicesRepositoryInMemory implements IGetDevicesRepository {
  async getDevices(): Promise<Device[]> {
    const devices = [
      {
        name: "Air Conditioning",
        temperature: 27.5,
        humidity: 46,
        luminosity: 11.5,
        _id: "63f67a506d9a73aa245149df",
        temperatureFormat: "27.5°C",
        humidityFormat: "46%",
        luminosityFormat: "11.5%",
      },
      {
        name: "Air Conditioning Room",
        temperature: 22,
        humidity: 51.21,
        luminosity: 0,
        _id: "63f8f4a262c73651fea892d0",
        temperatureFormat: "22°C",
        humidityFormat: "51.2%",
        luminosityFormat: "0%",
      },
    ];

    return devices.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id,
      temperatureFormat: formatAsCelsius(rest.temperature),
      humidityFormat: formatAsPercent(rest.humidity),
      luminosityFormat: formatAsPercent(rest.luminosity),
    }));
  }
}
