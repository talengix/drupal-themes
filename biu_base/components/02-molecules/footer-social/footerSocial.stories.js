import React from 'react';

import footerSocial from './footer-social.twig';
import iconsSvg from '../../../dist/icons.svg';

import footerSocialData from './footer-social.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Footer Social' };
footerSocialData.icon_url = iconsSvg;
export const site_logo = () => (
  <div dangerouslySetInnerHTML={{ __html: footerSocial(footerSocialData) }} />
);
