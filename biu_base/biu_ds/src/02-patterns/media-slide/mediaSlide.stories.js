import React from 'react';

import mediaSlideItem from './media-slide.twig';

import mediaSlideItemData from './media-slide.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/MediaSlideItem' };

export const media_slide_item = () => (
  <div dangerouslySetInnerHTML={{ __html: mediaSlideItem(mediaSlideItemData) }} />
);
