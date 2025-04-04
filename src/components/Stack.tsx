/**
 * @component Stack
 * @description flex를 이용한 Stack 컴포넌트
 */
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { css } from '@emotion/react';

type StackStyleProps = {
  dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end';
};

type StackProps<T extends ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & StackStyleProps &
  ComponentPropsWithoutRef<T>;

export function Stack<T extends ElementType = 'div'>({
  as,
  children,
  dir,
  gap,
  justify,
  align,
  ...rest
}: StackProps<T>) {
  const Tag = as || 'div';
  return (
    <Tag css={getStackStyle({ dir, gap, justify, align })} {...rest}>
      {children}
    </Tag>
  );
}

const getStackStyle = ({ dir = 'row', gap = 0, justify = 'start', align = 'start' }: StackStyleProps) => css`
  display: flex;
  flex-direction: ${dir};
  gap: ${gap}px;
  justify-content: ${justify};
  align-items: ${align};
  width: 100%;
`;
