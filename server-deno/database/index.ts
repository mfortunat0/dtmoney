import { PostgresConnector, Database } from "../deps.ts";

const postgresConnection = new PostgresConnector({
  host: "database",
  username: Deno.env.get("DATABASE_USER") || "dtmoney",
  password: Deno.env.get("DATABASE_PASSWORD") || "dtmoney",
  database: Deno.env.get("DATABASE_DB_NAME") || "dtmoney",
});

const denoDb = new Database(postgresConnection);

export { denoDb };
