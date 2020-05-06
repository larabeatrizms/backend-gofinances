import { getCustomRepository, getRepository } from 'typeorm';
// import { response } from 'express';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    const validBalance =
      type === 'income' ? true : balance.income >= value + balance.outcome;

    if (!validBalance) {
      throw new AppError('This transaction goes beyond the companys cash');
    }

    const categoriesRepository = getRepository(Category);

    let existsCategory = await categoriesRepository.findOne({
      where: { category },
    });

    if (!existsCategory) {
      existsCategory = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(existsCategory);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: existsCategory,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
