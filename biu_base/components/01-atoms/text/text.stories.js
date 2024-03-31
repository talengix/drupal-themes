import React from 'react';

import headings from './headings/headings.twig';
import headings_en from './headings/headings-en.twig'
import blockquote from './text/02-blockquote.twig';
import pre from './text/05-pre.twig';
import paragraph from './text/03-inline-elements.twig';
import paragraph_en from './text/03-inline-elements-en.twig';

import blockquoteData from './text/blockquote.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

export const headingsExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: headings({}) }} />
);

export const headingsENExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: headings_en({}) }} />
);
export const blockquoteExample = () => (
    <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteData) }} />
);
export const preformatted = () => (
    <div dangerouslySetInnerHTML={{ __html: pre({}) }} />
);
export const random = () => (
    <div dangerouslySetInnerHTML={{ __html: paragraph({}) }} />
);
export const randomEN = () => (
    <div dangerouslySetInnerHTML={{ __html: paragraph_en({}) }} />
);
