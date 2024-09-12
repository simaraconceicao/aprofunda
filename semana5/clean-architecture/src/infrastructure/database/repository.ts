import { BookRepository } from '../../application/repositories/book-repository';
import { Book } from '../../domain/book';

export class Repository implements BookRepository {
  private books: Book[] = [];

  save(book: Book): void {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }

}