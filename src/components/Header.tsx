import { Link, useLocation } from 'react-router';
import { css } from '@emotion/react';
import { HEADER_CONTENT_MAX_WIDTH, HEADER_HEIGHT } from '@/constants/layouts';
import { PATH } from '@/routes/path';
import { Stack } from './Stack';
import { Typography } from './Typography';

export function Header() {
  return (
    <Stack as="header" align="center" css={headerStyle}>
      <Stack align="center" className="header-content">
        <Typography.Title type="title1" color="primary" className="header-title">
          CERTICOS BOOKS
        </Typography.Title>
        <Stack as="nav" align="center" gap={56} className="header-nav">
          <HeaderNavButton to={PATH.home}>도서 검색</HeaderNavButton>
          <HeaderNavButton to={PATH.likes}>내가 찜한 책</HeaderNavButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

function HeaderNavButton({ to, children }: { to: string; children: React.ReactNode }) {
  const isActive = useLocation().pathname === to;
  return (
    <Stack justify="center" align="center" data-active={isActive} css={navButtonStyle}>
      <Link to={to} className="nav-button">
        <Typography.Body type="body1" weight="medium" color="primary">
          {children}
        </Typography.Body>
      </Link>
    </Stack>
  );
}

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: var(--palette-white);

  .header-content {
    flex-grow: 1;
    max-width: ${HEADER_CONTENT_MAX_WIDTH}px;
    width: 100%;
    padding: 0 24px;
    margin: 0 auto;
  }

  .header-title {
    flex-shrink: 0;
  }

  .header-nav {
    margin-left: 400px;
  }
`;

const navButtonStyle = css`
  padding: 4px;
  &[data-active='true'] {
    border-bottom: 1px solid var(--palette-primary);
  }

  .nav-button {
    text-decoration: none;
  }
`;
