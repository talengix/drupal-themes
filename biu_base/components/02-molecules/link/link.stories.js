import React from 'react';

import arrowLink from './arrow-link.twig';
import link from './link.twig';
import iconsSvg from '../../../dist/icons.svg';

import linkData from './link.yml';
import arrowLinkData from './arrow-link.yml';

import { useEffect } from '@storybook/client-api';
//import '../../00-base/lottieAnimations';


/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Link' };
linkData.item__icon_url = iconsSvg;
export const linkExample = () => (
  <div dangerouslySetInnerHTML={{ __html: link(linkData) }} />
);

export const arrowLinkExample = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: arrowLink(arrowLinkData) }} />;
};