/**
 * @component EmptyState
 * @description 리스트가 비었을때 보여줄 컴포넌트
 */
import { css } from '@emotion/react';
import IconBook from '@/assets/icon-book.svg?react';
import { Stack } from './Stack';
import { Typography } from './Typography';

type EmptyStateProps = {
  message?: string;
};

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Stack dir="column" align="center" gap={24} css={style}>
      <IconBook />
      <Typography.Caption color="secondary">{message}</Typography.Caption>
    </Stack>
  );
}

const style = css`
  margin-top: 120px;
`;
