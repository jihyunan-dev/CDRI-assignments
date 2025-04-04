import { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { Stack } from './Stack';

type ButtonColor = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'large';

export type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  width?: string;
  rightSlot?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  size = 'large',
  color = 'primary',
  width,
  type,
  rightSlot = null,
  children,
  ...props
}: ButtonProps) {
  return (
    <button css={getButtonStyle({ color, size, width })} {...props}>
      <Stack justify="center" align="center" gap={4}>
        {children}
        {rightSlot}
      </Stack>
    </button>
  );
}

const getButtonStyle = ({ color, size, width }: { color: ButtonColor; size: ButtonSize; width?: string }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  width: ${width || 'auto'};
  line-height: 1;

  ${color === 'primary' &&
  css`
    background-color: var(--palette-primary);
    color: var(--palette-white);
  `}
  ${color === 'secondary' &&
  css`
    background-color: var(--palette-light-gray);
    color: var(--text-secondary);
  `}

  ${color === 'outline' &&
  css`
    background-color: transparent;
    border: 1px solid var(--text-subtitle);
    color: var(--text-subtitle);
  `}

  ${size === 'small' &&
  css`
    height: 36px;
    padding: 0 10px;
    font-size: 14px;
  `}
    
    ${size === 'large' &&
  css`
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
  `}

  &:disabled {
    color: var(--text-subtitle);
    background-color: var(--palette-light-gray);
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
