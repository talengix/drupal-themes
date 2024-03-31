import React from 'react';

import iconHorizontal from './icon--horizontal.twig';
import iconsSvg from '../../../dist/icons.svg';

import iconHorizontalData from './icon--horizontal.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Icon' };
iconHorizontalData.icon_url = iconsSvg;
export const icon_Horizontal = () => (
  <div dangerouslySetInnerHTML={{ __html: iconHorizontal(iconHorizontalData) }} />
);
