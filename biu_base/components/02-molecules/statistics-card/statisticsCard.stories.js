import React from 'react';

import statisticsCard from "./statistics-card.twig";
import statisticsCardData from "./statistics-card.yml";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Statistics Card' };

export const statistics_card = () => (
  <div dangerouslySetInnerHTML={{ __html: statisticsCard(statisticsCardData) }} />
);
