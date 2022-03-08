import { Router } from "express";
import { CreateTransactionController } from "../controllers/CreateTransactionController";
import { ListTransactionController } from "../controllers/ListTransactionController";

const transactionRoute = Router();
const listTransactionController = new ListTransactionController();
const createTransactionController = new CreateTransactionController();

transactionRoute.get("", listTransactionController.handle);
transactionRoute.post("", createTransactionController.handle);

export { transactionRoute };
