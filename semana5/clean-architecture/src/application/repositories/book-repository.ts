import { Book } from '../../domain/book';

export interface BookRepository {
  save(book: Book): void;
  findAll(): Book[];
}