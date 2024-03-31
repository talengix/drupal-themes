import React from 'react';

import largeMedia from './large-media.twig';
import largeMediaData from './large-media.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Large Media' };
export const large_Media = () => (
  <div dangerouslySetInnerHTML={{ __html: largeMedia(largeMediaData) }} />
);
