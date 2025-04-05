import { PageController } from '@/components/PageController';
import { Stack } from '@/components/Stack';
import { BookListItem } from '@/components/bookListItem';
import { BookDocument } from '@/types/book';

type LikesBookListProps = {
  books: BookDocument[];
  currentPage: number;
  lastPage: number;
  moveToPage(page: number): void;
};

export function LikesBookList({ books, currentPage, lastPage, moveToPage }: LikesBookListProps) {
  const renderedBooks = books.slice((currentPage - 1) * 10, currentPage * 10);

  const moveToPrevPage = () => {
    if (currentPage === 1) return;
    moveToPage(currentPage - 1);
  };
  const moveToNextPage = () => {
    if (currentPage === lastPage) return;
    moveToPage(currentPage + 1);
  };
  return (
    <Stack dir="column" gap={36} width="100%">
      <Stack dir="column" width="100%">
        {renderedBooks.map((book) => (
          <BookListItem key={`like-${book.isbn}`} book={book} />
        ))}
      </Stack>
      <PageController
        currentPage={currentPage}
        lastPage={lastPage}
        onClickPrevButton={moveToPrevPage}
        onClickNextButton={moveToNextPage}
      />
    </Stack>
  );
}
