import { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

type ButtonColor = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'large';

export type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  width?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// TODO: RightSlot 추가 (아이콘 영역)
export function Button({ size = 'large', color = 'primary', width, type, children, ...props }: ButtonProps) {
  return (
    <button css={getButtonStyle({ color, size, width })} {...props}>
      {children}
    </button>
  );
}

const getButtonStyle = ({ color, size, width }: { color: ButtonColor; size: ButtonSize; width?: string }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  width: ${width || 'auto'};

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
`;
