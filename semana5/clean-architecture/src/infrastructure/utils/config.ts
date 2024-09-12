import { Repository } from '../../infrastructure/database/repository';
import { CreateBookUseCase } from '../../application/use-cases/create-book-use-case';
import { IdentifierGenerator } from './id-generator';
import { BookController } from '../../interface/book-controller';

export function configureDependencies() {
  const bookRepository = new Repository();
  const idGenerator = new IdentifierGenerator();
  const createBookUseCase = new CreateBookUseCase(bookRepository, idGenerator);
  const bookController = new BookController(createBookUseCase);

  return {
    bookController
  };
} 