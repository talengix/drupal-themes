import React from 'react';
import { withDirection } from 'storybook-rtl-addon';
import { addDecorator } from '@storybook/react';

addDecorator(withDirection);

import imageLink from "./image-link.twig";

import imageLinkData from "./image-link.yml";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/ImageLink' };

export const image_link = () => (
  <div dangerouslySetInnerHTML={{ __html: imageLink(imageLinkData) }} />
);
