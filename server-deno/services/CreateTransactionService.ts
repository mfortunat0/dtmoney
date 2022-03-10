import { TransactionDTO } from "../dtos/transaction.dto.ts";
import { Transaction } from "../models/transaction.model.ts";

export class CreateTransactionService {
  async execute({ type, amount, category, title }: TransactionDTO) {
    const transaction = await Transaction.create({
      type,
      amount,
      category,
      title,
    });

    return transaction;
  }
}
