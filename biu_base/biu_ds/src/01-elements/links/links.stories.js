import React from 'react';

import linkTpl from './link/link.twig';

import linkData from './link/link.yml';

import spanRlinkTpl from './link/span-replace-link.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Design System/1 Elements/Links' };

export const link = () => (
  <div dangerouslySetInnerHTML={{ __html: linkTpl(linkData) }} />
);

export const spanLinkReplacment = () => (
  <div dangerouslySetInnerHTML={{ __html: spanRlinkTpl(linkData) }} />
);
