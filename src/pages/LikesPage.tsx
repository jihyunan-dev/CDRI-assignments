import { BookListCount } from '@/components/BookListCount';
import { EmptyState } from '@/components/EmptyState';
import { Page } from '@/components/Page';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { BookListItem } from '@/components/bookListItem';
import { useLikeStore } from '@/store/useLikeStore';

export function LikesPage() {
  const { likes } = useLikeStore();
  const totalLikes = likes.length;

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
              {likes.map((book) => (
                <BookListItem key={`like-${book.isbn}`} book={book} />
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Page>
  );
}
