export interface Expense {
  id?: string;
  title: string;
  amount: number;
  paidBy: string;      // user UID
  createdAt: any;
}