export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  createdAt: string;
  status: 'read' | 'unread' | 'donated';
}

