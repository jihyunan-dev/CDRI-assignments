import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';

type TypographyColor = 'primary' | 'secondary' | 'subtitle';

type TypographyTitleProps = {
  type: 'title1' | 'title2' | 'title3';
  color?: TypographyColor;
} & HTMLAttributes<HTMLHeadingElement>;

function Title({ type, color = 'primary', children, ...props }: TypographyTitleProps) {
  const Tag = type === 'title1' ? 'h1' : type === 'title2' ? 'h2' : 'h3';
  const titleLevel = type === 'title1' ? 1 : type === 'title2' ? 2 : 3;
  return (
    <Tag css={getTitleStyle({ titleLevel, color })} {...props}>
      {children}
    </Tag>
  );
}

const getTitleStyle = ({ titleLevel, color }: { titleLevel: 1 | 2 | 3; color: TypographyColor }) => css`
  font-size: var(${'--typo-title' + titleLevel}-size);
  line-height: var(${'--typo-title' + titleLevel}-line-height);
  font-weight: 700;
  color: var(--text-${color});
`;

type TypographyBodyProps = {
  type: 'body1' | 'body2';
  weight?: 'medium' | 'bold';
  color?: TypographyColor;
} & HTMLAttributes<HTMLSpanElement>;

function Body({ type, weight = 'medium', color = 'primary', children, ...props }: TypographyBodyProps) {
  const bodyLevel = type === 'body1' ? 1 : 2;
  return (
    <span css={getBodyStyle({ bodyLevel, weight, color })} {...props}>
      {children}
    </span>
  );
}

const getBodyStyle = ({
  bodyLevel,
  weight,
  color,
}: {
  bodyLevel: 1 | 2;
  weight: 'medium' | 'bold';
  color: TypographyColor;
}) => css`
  font-size: var(${'--typo-body' + bodyLevel}-size);
  line-height: var(${'--typo-body' + bodyLevel}-line-height);
  font-weight: ${weight === 'medium' ? 500 : 700};
  color: var(--text-${color});
`;

type TypographyCaptionProps = {
  color?: TypographyColor;
} & HTMLAttributes<HTMLSpanElement>;

function Caption({ color = 'primary', children, ...props }: TypographyCaptionProps) {
  return (
    <span css={getCaptionStyle({ color })} {...props}>
      {children}
    </span>
  );
}
const getCaptionStyle = ({ color }: { color: TypographyColor }) => css`
  font-size: var(--typo-caption-size);
  line-height: var(--typo-caption-line-height);
  font-weight: 500;
  color: var(--text-${color});
`;

type TypographySmallProps = {
  color?: TypographyColor;
} & HTMLAttributes<HTMLSpanElement>;

function Small({ color = 'primary', children, ...props }: TypographySmallProps) {
  return (
    <span css={getSmallStyle({ color })} {...props}>
      {children}
    </span>
  );
}

const getSmallStyle = ({ color }: { color: TypographyColor }) => css`
  font-size: var(--typo-small-size);
  line-height: var(--typo-small-line-height);
  font-weight: 500;
  color: var(--text-${color});
`;

export const Typography = Object.assign({}, { Title, Body, Caption, Small });
