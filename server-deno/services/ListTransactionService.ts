import { Transaction } from "../models/transaction.model.ts";

export class ListTransactionService {
  async execute() {
    return await Transaction.all();
  }
}
