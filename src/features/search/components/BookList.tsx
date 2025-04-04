import { BookListCount } from '@/components/BookListCount';
import { Button } from '@/components/Button';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { BookListItem } from '@/components/bookListItem';
import { PAGE_SIZE } from '@/constants/page';
import { BookDocument, BookMeta } from '@/types/book';

type BookListProps = {
  books: BookDocument[];
  meta: BookMeta | null;
  currentPage: number;
  moveToPage(page: number): void;
};

export function BookList({ books, meta, currentPage, moveToPage }: BookListProps) {
  const lastPage = meta?.pageable_count ? Math.ceil(meta?.pageable_count / PAGE_SIZE) : 1;

  const onClickPrevButton = () => {
    if (currentPage === 1) return;
    moveToPage(currentPage - 1);
  };

  const onClickNextButton = () => {
    if (currentPage === lastPage) return;
    moveToPage(currentPage + 1);
  };

  return (
    <Stack dir="column" gap={36} width="100%">
      <BookListCount title="도서 검색 결과" count={meta?.pageable_count ?? 0} unitText="건" />
      <Stack dir="column" width="100%" gap={16} as="ul">
        {books.map((book) => {
          return <BookListItem key={book.isbn} book={book} />;
        })}
      </Stack>
      <Stack justify="between" align="center" width="100%">
        <Button key={'prev-button'} color="secondary" disabled={currentPage === 1} onClick={onClickPrevButton}>
          이전 페이지
        </Button>
        <Typography.Caption>{currentPage} 페이지</Typography.Caption>
        <Button key={'next-button'} color="secondary" onClick={onClickNextButton}>
          다음 페이지
        </Button>
      </Stack>
    </Stack>
  );
}
