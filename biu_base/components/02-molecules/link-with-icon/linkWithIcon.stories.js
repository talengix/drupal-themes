import React from 'react';

import linkIcon from './link-with-icon.twig';
import iconsSvg from '../../../dist/icons.svg';

import linkIconData from './link-with-icon.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Link With Icon' };
linkIconData.icon_url = iconsSvg;
export const site_logo = () => (
  <div dangerouslySetInnerHTML={{ __html: linkIcon(linkIconData) }} />
);
