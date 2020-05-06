import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const incomeSum = transactions.reduce(
      (total, transaction) =>
        transaction.type === 'income'
          ? total + Number(transaction.value)
          : total,
      0.0,
    );

    const outcomeSum = transactions.reduce(
      (total, transaction) =>
        transaction.type === 'outcome'
          ? total + Number(transaction.value)
          : total,
      0.0,
    );

    const balance = {
      income: incomeSum,
      outcome: outcomeSum,
      total: incomeSum - outcomeSum,
    };

    return balance;
  }
}

export default TransactionsRepository;
