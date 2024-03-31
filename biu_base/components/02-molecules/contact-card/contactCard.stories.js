import React from 'react';

import contactCard from './contact-card.twig';
import contactCardData from './contact-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Contact Card' };
export const contact_card = () => (
  <div dangerouslySetInnerHTML={{ __html: contactCard(contactCardData) }} />
);
