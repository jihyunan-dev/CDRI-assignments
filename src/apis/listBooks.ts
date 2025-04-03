import axios from 'axios';
import { BookDocument, BookMeta, BookSearchTarget, BookSortMethod } from '@/types/book';

export type ListBookOptions = {
  page?: number;
  size?: number;
  target?: BookSearchTarget;
  sort?: BookSortMethod;
};

export type ListBookRequest = {
  searchValue: string;
  options?: ListBookOptions;
};

export type ListBookResponse = {
  documents: BookDocument[];
  meta: BookMeta;
};

export const listBooks = async ({ searchValue, options = {} }: ListBookRequest): Promise<ListBookResponse> => {
  const response = await axios.get('https://dapi.kakao.com/v3/search/book', {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
    },
    params: {
      query: searchValue,
      ...options,
    },
  });
  return response.data;
};
