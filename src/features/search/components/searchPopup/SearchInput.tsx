import { InputHTMLAttributes, forwardRef } from 'react';
import { css } from '@emotion/react';

export const SearchInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input ref={ref} type="text" {...props} css={style} />;
});

const style = css`
  flex-grow: 1;
  height: 36px;
  border: none;
  border-bottom: 1px solid var(--palette-primary);
  outline: none;
  color: var(--text-primary);
  background-color: transparent;
  font-weight: 500;
  padding: 0 10px;

  &::placeholder {
    color: var(--text-subtitle);
  }
`;
