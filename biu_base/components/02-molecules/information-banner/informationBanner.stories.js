import React from 'react';

import informationBanner from './information-banner.twig';

import informationBannerData from './information-banner.yml';

import { useEffect } from '@storybook/client-api';
import iconsSvg from "../../../dist/icons.svg";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Information Banner' };
informationBannerData.icon_url = iconsSvg;
export const information_banner = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: informationBanner(informationBannerData) }} />;
};
