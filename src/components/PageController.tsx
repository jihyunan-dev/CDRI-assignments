import { Button } from './Button';
import { Stack } from './Stack';
import { Typography } from './Typography';

type PageControllerProps = {
  currentPage: number;
  lastPage: number;
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
};

export function PageController({ currentPage, lastPage, onClickPrevButton, onClickNextButton }: PageControllerProps) {
  return (
    <Stack justify="between" align="center" width="100%">
      <Button key="prev-button" color="secondary" disabled={currentPage === 1} onClick={onClickPrevButton}>
        이전 페이지
      </Button>
      <Typography.Caption>
        {currentPage} / {lastPage}
      </Typography.Caption>
      <Button key="next-button" color="secondary" disabled={currentPage === lastPage} onClick={onClickNextButton}>
        다음 페이지
      </Button>
    </Stack>
  );
}
