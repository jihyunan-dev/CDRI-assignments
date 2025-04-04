import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { listBooks } from '@/apis/listBooks';
import { Button } from '@/components/Button';
import { EmptyState } from '@/components/EmptyState';
import { Page } from '@/components/Page';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { PAGE_SIZE } from '@/constants/page';
import { BookList } from '@/features/search/components/BookList';
import { SearchField } from '@/features/search/components/searchField';

export function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const { data } = useQuery({
    queryKey: ['books', searchValue, currentPage], // option 포함
    queryFn: () => listBooks({ searchValue, options: { page: currentPage, size: PAGE_SIZE } }),
  });

  const books = data?.documents ?? [];
  const bookMeta = data?.meta ?? null;

  const moveToPage = (page: number) => setCurrentPage(page);

  const submitSearchValue = (value: string) => {
    setSearchValue(value);
    moveToPage(1);
  };

  return (
    <Page>
      <Stack dir="column" gap={24} width="100%">
        <Stack as="section" dir="column" gap={16} width="568px">
          <Typography.Title type="title2">도서 검색</Typography.Title>
          <Stack width="100%" align="center" gap={16}>
            <SearchField placeholder="검색어를 입력하세요" submitValue={submitSearchValue} />
            <Button size="small" color="outline">
              상세검색
            </Button>
          </Stack>
        </Stack>
        {books.length === 0 ? (
          <Stack justify="center" align="center" width="100%">
            <EmptyState message="검색된 결과가 없습니다." />
          </Stack>
        ) : (
          <BookList books={books} meta={bookMeta} currentPage={currentPage} moveToPage={moveToPage} />
        )}
      </Stack>
    </Page>
  );
}
