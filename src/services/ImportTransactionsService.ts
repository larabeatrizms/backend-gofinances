import Transaction from '../models/Transaction';

interface Request {
  fileName: string;
  path: string;
}
class ImportTransactionsService {
  async execute({ fileName, path }: Request): Promise<Transaction[]> {
    // TODO
  }
}

export default ImportTransactionsService;
