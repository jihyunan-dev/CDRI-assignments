import { useState } from 'react';
import { BookListCount } from '@/components/BookListCount';
import { EmptyState } from '@/components/EmptyState';
import { Page } from '@/components/Page';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { PAGE_SIZE } from '@/constants/page';
import { LikesBookList } from '@/features/likes/components/LikesBookList';
import { useLikeStore } from '@/store/useLikeStore';

export function LikesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { likes } = useLikeStore();

  const totalLikes = likes.length;
  const lastPage = Math.ceil(totalLikes / PAGE_SIZE);

  const moveToPage = (page: number) => setCurrentPage(page);

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
            <LikesBookList currentPage={currentPage} lastPage={lastPage} books={likes} moveToPage={moveToPage} />
          )}
        </Stack>
      </Stack>
    </Page>
  );
}
