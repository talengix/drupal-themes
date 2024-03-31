import React from 'react';

import mediaItemHero from './media-item--hero.twig';

import mediaItemHeroData from './media-item--hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/MediaItem' };

export const mediaItemHeroView = () => (
  <div dangerouslySetInnerHTML={{ __html: mediaItemHero(mediaItemHeroData) }} />
);
