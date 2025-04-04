import { css } from '@emotion/react';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import { useBookListItemContext } from './context';

export function BookPriceLarge() {
  const {
    book: { price, sale_price: salePrice },
  } = useBookListItemContext();

  if (salePrice === -1) {
    return (
      <Typography.Title type="title3" color="primary">
        {price.toLocaleString()}원
      </Typography.Title>
    );
  }
  return (
    <Stack as="dl" dir="column" align="end" css={style}>
      <BookPriceLargeRow>
        <dt>원가</dt>
        <dd className="original-price">
          <s>{price.toLocaleString()}원</s>
        </dd>
      </BookPriceLargeRow>
      <BookPriceLargeRow>
        <dt>할인가</dt>
        <dd className="sale-price">{salePrice.toLocaleString()}원</dd>
      </BookPriceLargeRow>
    </Stack>
  );
}

function BookPriceLargeRow({ children }: { children: React.ReactNode }) {
  return (
    <Stack gap={8} justify="end" align="center">
      {children}
    </Stack>
  );
}

const style = css`
  dt {
    font-size: 10px;
    line-height: 22px;
    color: var(--text-subtitle);
    font-weight: 500;
  }

  dd {
    display: flex;
    justify-content: flex-end;
    width: 76px;
    font-size: 18px;
    line-height: 26px;
    color: var(--text-primary);
  }

  .sale-price {
    font-weight: 700;
  }
`;
