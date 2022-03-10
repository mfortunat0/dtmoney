export interface TransactionDTO {
  id?: string;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt?: Date;
}
