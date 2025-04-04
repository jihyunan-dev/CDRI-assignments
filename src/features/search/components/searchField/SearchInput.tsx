import { InputHTMLAttributes, KeyboardEvent } from 'react';
import { css } from '@emotion/react';
import IconSearch from '@/assets/icon-search.svg?react';
import { Stack } from '@/components/Stack';

export type SearchInputProps = {
  submitValue?(value: string): void;
} & InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ submitValue, ...props }: SearchInputProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) return;
      const inputValue = e.currentTarget.value;
      submitValue?.(inputValue);
    }
  };

  return (
    <Stack align="center" width="100%" gap={12} css={inputFieldStyle}>
      <IconSearch />
      <input type="text" className="inputField-input" onKeyDown={onKeyDown} {...props} />
    </Stack>
  );
}

const inputFieldStyle = css`
  padding: 10px;
  .inputField-input {
    flex-grow: 1;
    border: none;
    background-color: transparent;
    font-size: var(--typo-caption-size);
    line-height: var(--typo-caption-line-height);
    outline: none;

    &::placeholder {
      color: var(--text-subtitle);
    }
  }
`;
