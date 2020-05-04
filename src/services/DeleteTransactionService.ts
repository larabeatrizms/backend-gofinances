import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}
class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne({ where: { id } });

    if (!transaction) {
      throw new AppError('There is no such transaction.');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
