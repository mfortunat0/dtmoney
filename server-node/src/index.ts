import "dotenv/config";
import express from "express";
import cors from "cors";
import { transactionRoute } from "./routes/transaction.route";

const app = express();
const PORT = process.env.SEVER_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionRoute);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
