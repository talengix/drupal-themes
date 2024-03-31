import React from 'react';

import mediumHero from './medium-hero.twig';
import iconsSvg from '../../../dist/icons.svg';

import mediumHeroData from './medium-hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Medium Hero' };
mediumHeroData.icon_url = iconsSvg;
export const medium_hero = () => (
  <div dangerouslySetInnerHTML={{ __html: mediumHero(mediumHeroData) }} />
);
