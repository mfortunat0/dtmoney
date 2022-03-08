import { prismaClient } from "../database";
import { TransactionDTO } from "../dtos/transaction.dto";

export class CreateTransactionService {
  async execute({ amount, category, title, type }: TransactionDTO) {
    const transaction = await prismaClient.transaction.create({
      data: {
        amount,
        category,
        title,
        type,
      },
    });
    return transaction;
  }
}
