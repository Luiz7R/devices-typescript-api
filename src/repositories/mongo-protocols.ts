import { Device } from "./../models/device";

export type MongoDevice = Omit<Device, "id">;
