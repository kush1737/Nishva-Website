import { Fragment } from 'react';

// Splits a sentence into word spans so GSAP can animate each word (the `t-word` class is the hook).
export default function Words({ text, className = 't-word' }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={i}>
      <span className={`${className} inline-block`}>{word}</span>{' '}
    </Fragment>
  ));
}
