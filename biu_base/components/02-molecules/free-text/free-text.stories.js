import React from 'react';

import freeText from './free-text.twig';

import freeTextData from './free-text.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Free Text' };

export const free_text = () => (
  <div dangerouslySetInnerHTML={{ __html: freeText(freeTextData) }} />
);
