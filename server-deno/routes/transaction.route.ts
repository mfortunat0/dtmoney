import { CreateTransactionController } from "../controllers/CreateTransactionController.ts";
import { ListTransactionController } from "../controllers/ListTransactionController.ts";
import { Router } from "../deps.ts";

const transactionRoute = Router();
const listTransactionController = new ListTransactionController();
const createTransactionController = new CreateTransactionController();

transactionRoute.get("", listTransactionController.handle);
transactionRoute.post("", createTransactionController.handle);

export { transactionRoute };
