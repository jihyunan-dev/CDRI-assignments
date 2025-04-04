import { css } from '@emotion/react';
import { Stack } from './Stack';
import { Typography } from './Typography';

type BookListCountProps = {
  title: string;
  count: number;
  unitText: string;
};

export function BookListCount({ title, count, unitText }: BookListCountProps) {
  return (
    <Stack gap={16} css={style}>
      <Typography.Caption>{title}</Typography.Caption>
      <Typography.Caption>
        총{' '}
        <Typography.Caption as="span" className="count">
          {count.toLocaleString()}
        </Typography.Caption>
        {unitText}
      </Typography.Caption>
    </Stack>
  );
}

const style = css`
  .count {
    color: var(--palette-primary);
  }
`;
