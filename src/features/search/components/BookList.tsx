import { BookListCount } from '@/components/BookListCount';
import { Stack } from '@/components/Stack';
import { BookListItem } from '@/components/bookListItem';
import { BookDocument, BookMeta } from '@/types/book';

type BookListProps = {
  books: BookDocument[];
  meta: BookMeta | null;
};

export function BookList({ books, meta }: BookListProps) {
  return (
    <Stack dir="column" gap={36}>
      <BookListCount title="도서 검색 결과" count={meta?.pageable_count ?? 0} unitText="건" />
      <Stack dir="column" width="100%" gap={16} as="ul">
        {books.map((book) => {
          return <BookListItem key={book.isbn} book={book} />;
        })}
      </Stack>
    </Stack>
  );
}
