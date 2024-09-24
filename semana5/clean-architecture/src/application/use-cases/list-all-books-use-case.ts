import { BookRepository } from '../repositories/book-repository';

export class ListAllBooksUseCase {
  constructor(private bookRepository: BookRepository) {}
  
  execute() {
    const books = this.bookRepository.findAll();
    return books;
  }
}