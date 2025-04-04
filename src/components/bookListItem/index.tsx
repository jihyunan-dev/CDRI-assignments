import { useState } from 'react';
import { css } from '@emotion/react';
import { BookDocument } from '@/types/book';
import { Stack } from '../Stack';
import { BookControlSection } from './BookControlSection';
import { BookTextSection } from './BookTextSection';
import { BookThumbnail } from './BookThumbnail';
import { BookListItemContext } from './context';

type BookListItemProps = {
  book: BookDocument;
};

export function BookListItem({ book }: BookListItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen((pre) => !pre);

  return (
    <BookListItemContext.Provider value={{ book, isOpen, toggleOpen }}>
      <Stack as="li" width="100%" align="center" gap={48} data-open={isOpen} css={style}>
        <BookThumbnail />
        <BookTextSection />
        <BookControlSection />
      </Stack>
    </BookListItemContext.Provider>
  );
}

const style = css`
  border-bottom: 1px solid var(--palette-light-gray);

  &[data-open='true'] {
    height: 344px;
    padding: 24px 16px 40px 56px;
  }

  &[data-open='false'] {
    padding: 16px 16px 16px 48px;
  }
`;
