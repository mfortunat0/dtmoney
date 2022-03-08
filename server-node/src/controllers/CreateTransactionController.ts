import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { amount, category, title, type } = request.body;
    const createTransactionService = new CreateTransactionService();
    const transaction = await createTransactionService.execute({
      amount,
      category,
      title,
      type,
    });
    response.status(201).json({ transaction });
  }
}
