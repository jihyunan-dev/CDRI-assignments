import { css } from '@emotion/react';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { BookPriceLarge } from './BookPriceLarge';
import { SizeToggleButton } from './SizeToggleButton';
import { useBookListItemContext } from './context';

export function BookControlSection() {
  const { isOpen } = useBookListItemContext();

  if (!isOpen) {
    return (
      <Stack width="240px" gap={8} css={style}>
        <Button color="primary" width="115px">
          구매하기
        </Button>
        <SizeToggleButton />
      </Stack>
    );
  }

  return (
    <Stack dir="column" justify="between" align="end" width="240px" gap={8} css={style}>
      <SizeToggleButton />
      <Stack dir="column" justify="end" align="end" gap={28} className="book-control-bottom">
        <BookPriceLarge />
        <Button color="primary" width="240px" className="book-purchase-button">
          구매하기
        </Button>
      </Stack>
    </Stack>
  );
}

const style = css`
  height: 100%;

  .book-control-bottom {
    flex-grow: 1;
  }

  .book-purchase-button {
    justify-self: flex-end;
  }
`;
