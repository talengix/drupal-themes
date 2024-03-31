import React from 'react';

import cta from './cta.twig';
import cta_link from './cta-main-link.twig';

import ctaData from './cta.yml';
import ctaLinkData from './cta-link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTA' };

export const ctaExample = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaData) }} />
);

export const ctaLinkExample = () => (
  <div dangerouslySetInnerHTML={{ __html: cta_link(ctaLinkData) }} />
);
