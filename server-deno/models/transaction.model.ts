import { Model, DataTypes } from "../deps.ts";

export class Transaction extends Model {
  static table = "transactions";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    amount: DataTypes.FLOAT,
  };
}
