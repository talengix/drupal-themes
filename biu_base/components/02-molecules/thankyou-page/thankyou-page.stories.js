import React from 'react';

import thankyou from './thankyou-page.twig';
import iconsSvg from '../../../dist/icons.svg';

import iconThankyouData from './thankyou-page.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Icon' };
iconThankyouData.icon_url = iconsSvg;
export const thankyou_page = () => (
  <div dangerouslySetInnerHTML={{ __html: thankyou(iconThankyouData) }} />
);
