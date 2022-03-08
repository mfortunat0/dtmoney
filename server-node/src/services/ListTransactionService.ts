import { prismaClient } from "../database";

export class ListTransactionService {
  async execute() {
    const transactions = await prismaClient.transaction.findMany();
    return transactions;
  }
}
