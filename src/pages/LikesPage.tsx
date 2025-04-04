import { useState } from 'react';
import { BookListCount } from '@/components/BookListCount';
import { EmptyState } from '@/components/EmptyState';
import { Page } from '@/components/Page';
import { PageController } from '@/components/PageController';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { BookListItem } from '@/components/bookListItem';
import { PAGE_SIZE } from '@/constants/page';
import { useLikeStore } from '@/store/useLikeStore';

export function LikesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { likes } = useLikeStore();
  const totalLikes = likes.length;

  const lastPage = Math.ceil(totalLikes / PAGE_SIZE);
  const books = likes.slice((currentPage - 1) * 10, currentPage * 10);

  const moveToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const moveToNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Page>
      <Stack as="section" dir="column" gap={24} width="100%">
        <Typography.Title type="title2">내가 찜한 책</Typography.Title>
        <Stack dir="column" gap={36} width="100%">
          <BookListCount title="찜한 책" count={totalLikes} unitText="건" />
          {totalLikes === 0 ? (
            <Stack justify="center" align="center" width="100%">
              <EmptyState message="찜한 책이 없습니다." />
            </Stack>
          ) : (
            <Stack dir="column">
              {books.map((book) => (
                <BookListItem key={`like-${book.isbn}`} book={book} />
              ))}
            </Stack>
          )}
        </Stack>
        <PageController
          currentPage={currentPage}
          lastPage={lastPage}
          onClickPrevButton={moveToPrevPage}
          onClickNextButton={moveToNextPage}
        />
      </Stack>
    </Page>
  );
}
