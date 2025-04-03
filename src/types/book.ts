/**
 * 검색 필드 제한
 * 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
 */
export const enum BookSearchTarget {
  Title = 'title',
  ISBN = 'isbn',
  Publisher = 'publisher',
  Person = 'person',
}

/**
 * 결과 문서 정렬 방식
 * 사용 가능한 값: accuracy(정확도순), latest(발간일순)
 */
export const enum BookSortMethod {
  Accuracy = 'accuracy',
  Latest = 'latest',
}

/**
 * 카카오 API에서 제공하는 책 검색 결과
 * @see https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book-response-body-document
 */
export interface BookDocument {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

/**
 * 카카오 API에서 제공하는 책 검색 결과(메타데이터)
 * @see https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book-response-body-meta
 */
export interface BookMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}
