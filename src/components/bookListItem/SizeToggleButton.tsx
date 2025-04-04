import { css } from '@emotion/react';
import IconArrowDown from '@/assets/icon-arrow-down.svg?react';
import { Button } from '../Button';
import { useBookListItemContext } from './context';

export function SizeToggleButton() {
  const { isOpen, toggleOpen } = useBookListItemContext();
  return (
    <Button
      css={style}
      color="secondary"
      width="115px"
      data-open={isOpen}
      rightSlot={<IconArrowDown className="icon-arrow" />}
      onClick={toggleOpen}>
      상세보기
    </Button>
  );
}

const style = css`
  &[data-open='true'] {
    .icon-arrow {
      transform: rotate(180deg);
    }
  }
`;
