import { css } from '@emotion/react';
import { HEADER_HEIGHT, MAIN_CONTENT_MAX_WIDTH } from '@/constants/layouts';

type PageProps = {
  bgColor?: string;
  children: React.ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <main css={style}>
      <div className="page-content">{children}</div>
    </main>
  );
}

const style = ({ bgColor = 'white' }: { bgColor?: string }) => css`
  margin-top: ${HEADER_HEIGHT}px;
  width: 100%;
  background-color: ${bgColor};

  .page-content {
    width: 100%;
    max-width: ${MAIN_CONTENT_MAX_WIDTH}px;
    margin: 0 auto;
  }
`;
