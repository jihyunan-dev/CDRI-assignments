import { css } from '@emotion/react';

type SearchOverlayProps = {
  onClick: () => void;
};

export function SearchOverlay({ onClick }: SearchOverlayProps) {
  return <div css={style} onClick={onClick} />;
}

const style = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;
