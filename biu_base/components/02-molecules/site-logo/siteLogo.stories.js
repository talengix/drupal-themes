import React from 'react';

import siteLogo from './site-logo.twig';
import iconsSvg from '../../../dist/icons.svg';

import siteLogoData from './site-logo.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Site Logo' };
siteLogoData.icon_url = iconsSvg;
export const site_logo = () => (
  <div dangerouslySetInnerHTML={{ __html: siteLogo(siteLogoData) }} />
);
