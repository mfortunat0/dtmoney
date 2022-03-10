import { transactionRoute } from "./routes/transaction.route.ts";
import { denoDb } from "./database/index.ts";
import { Transaction } from "./models/transaction.model.ts";
import { opine, json, opineCors } from "./deps.ts";

const PORT = Number(Deno.env.get("SERVER_PORT")) || 3001;
const app = opine();

app.use(opineCors());
app.use(json());
app.use("/api/transactions", transactionRoute);

denoDb.link([Transaction]);
denoDb.sync();

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
