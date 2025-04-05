import { BookSearchTarget } from '@/types/book';

export const QUERY_KEYS_FNS = {
  listBooks: (searchValue: string, page: number, size: number, target: BookSearchTarget) => [
    'listBooks',
    searchValue,
    { page, size, target },
  ],
};
