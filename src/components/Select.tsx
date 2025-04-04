import { useState } from 'react';
import { css } from '@emotion/react';
import IconArrowDown from '@/assets/icon-arrow-down.svg?react';
import { Stack } from './Stack';
import { Typography } from './Typography';

type SelectProps = {
  placeholder?: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
};

export function Select({ placeholder = '', value, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const currentOption = options.find((option) => option.value === value);

  const onSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <Stack dir="column" css={style}>
      <button className="select-value-container" onClick={toggleOpen}>
        <Stack justify="between" align="center">
          {currentOption?.label ?? placeholder}
          <IconArrowDown />
        </Stack>
      </button>
      {isOpen && (
        <Stack as="ul" dir="column" className="select-option-list">
          {options.map((option) => (
            <li key={option.value} className="select-option-item" onClick={() => onSelect(option.value)}>
              <Typography.Caption>{option.label}</Typography.Caption>
            </li>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

const style = css`
  position: relative;
  .select-value-container {
    width: 100px;
    height: 36px;
    padding: 6px 8px;
    border: none;
    border-bottom: 1px solid #d2d6da;
    background-color: transparent;
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
    cursor: pointer;
  }

  .select-option-list {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    background-color: var(--palette-white);
    box-shadow: 0px 0px 4px 0px #00000040;
  }

  .select-option-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: var(--palette-light-gray);
    }
  }
`;
