import { OpineRequest, OpineResponse } from "../deps.ts";
import { ListTransactionService } from "../services/ListTransactionService.ts";

export class ListTransactionController {
  async handle(_request: OpineRequest, response: OpineResponse) {
    const listTransactionService = new ListTransactionService();
    const transactions = await listTransactionService.execute();
    response.json({
      transactions,
    });
  }
}
