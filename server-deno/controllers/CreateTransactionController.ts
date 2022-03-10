import { CreateTransactionService } from "../services/CreateTransactionService.ts";
import { OpineRequest, OpineResponse } from "../deps.ts";

export class CreateTransactionController {
  async handle(request: OpineRequest, response: OpineResponse) {
    const { type, amount, category, title } = request.body;
    const createTransactionService = new CreateTransactionService();
    const transaction = await createTransactionService.execute({
      type,
      amount,
      category,
      title,
    });

    response.setStatus(201).json({
      transaction,
    });
  }
}
