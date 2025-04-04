import { css } from '@emotion/react';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import { useBookListItemContext } from './context';

export function BookTextSection() {
  const {
    isOpen,
    book: { title, contents, authors, price, sale_price: salePrice },
  } = useBookListItemContext();

  return (
    <Stack as="section" align="center" dir={isOpen ? 'column' : 'row'} css={style}>
      <Stack align="center" gap={16} width="100%">
        <Typography.Title type="title3" color="primary">
          {title}
        </Typography.Title>
        <Typography.Body type="body2" color="secondary">
          {authors.join(', ')}
        </Typography.Body>
      </Stack>

      {!isOpen && (
        <Typography.Title type="title3" color="primary" className="book-price">
          {salePrice === -1 ? price.toLocaleString() : salePrice.toLocaleString()}원
        </Typography.Title>
      )}

      {isOpen && (
        <Stack dir="column" gap={12} width="100%" className="book-content">
          <Typography.Body type="body2" weight="bold" className="book-content-title">
            책 소개
          </Typography.Body>
          <Typography.Small className="book-content-description">{contents}</Typography.Small>
        </Stack>
      )}
    </Stack>
  );
}

const style = css`
  flex-grow: 1;

  .book-content {
    margin-top: 16px;
  }

  .book-content-title {
    line-height: 26px;
  }

  .book-content-description {
    line-height: 16px;
    white-space: pre-wrap;
  }

  .book-price {
    flex-shrink: 0;
    margin-left: 22px;
  }
`;
