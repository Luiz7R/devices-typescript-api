import { MongoDevice } from "./../repositories/mongo-protocols";
import { Device } from "./../models/device";
import { MongoClient as Mongo, Db, WithId } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "localhost:27017";
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db("devices-db");

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!");
  },

  mapId(device: WithId<MongoDevice>): Device {
    const { _id, ...rest } = device;

    return { id: _id.toHexString(), ...rest };
  },
};
