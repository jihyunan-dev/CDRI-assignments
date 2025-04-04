import { createContext, useContext } from 'react';
import { BookDocument } from '@/types/book';

type BookListItemContextType = {
  book: BookDocument;
  isOpen: boolean;
  toggleOpen: () => void;
};

export const BookListItemContext = createContext<BookListItemContextType>({
  book: {} as BookDocument,
  isOpen: false,
  toggleOpen: () => {},
});
export const useBookListItemContext = () => useContext(BookListItemContext);
