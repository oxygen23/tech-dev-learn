import React from 'react';
import styles from './Title.module.sass';

interface TitleProps {
  title: string;
  titleLayer: number;
  fontSize?: number;
  marginBottom?: number;
}

const Title: React.FC<TitleProps> = ({
  title,
  titleLayer,
  fontSize,
  marginBottom,
}) => {
  let Tag: keyof JSX.IntrinsicElements = 'h6';
  if (titleLayer >= 1 && titleLayer <= 6) {
    Tag = `h${titleLayer}` as keyof JSX.IntrinsicElements;
  }
  const style: React.CSSProperties = {};
  if (fontSize) {
    style.fontSize = fontSize;
  }
  if (marginBottom) {
    style.marginBottom = marginBottom;
  }
  return (
    <Tag className={styles.title} style={style}>
      {title}
    </Tag>
  );
};

export default Title;
