import React from 'react';
import iconsSvg from '../../../dist/icons.svg';
import { withDirection } from 'storybook-rtl-addon';
import { addDecorator } from '@storybook/react';
import { useEffect } from '@storybook/client-api';

addDecorator(withDirection);

import featuredCards from './featured-cards.twig';
import featuredCardsData from './featured-cards.yml';

import card from './card.twig';
import cardGrid from './card-grid.twig';
import cardPople from './card-people.twig';

import cardData from './card.yml';
import cardBgData from './card-bg.yml';
import cardContentData from './card-content.yml';
import cardGridData from './card-grid.yml';
import cardPeopleData from './card-people.yml';


import cardFeatured from './card-featured.twig';
import cardFeaturedData from './card-featured.yml';

import cardGridMedium from './card-grid-medium.twig';
import cardGridMediumData from './card-grid-medium.yml';
import arrowLink from "../link/arrow-link.twig";
import arrowLinkData from "../link/arrow-link.yml";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
);
export const cardWithBackground = () => (
  <div
    dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }}
  />
);
export const cardContent = () => (
    <div
        dangerouslySetInnerHTML={{ __html: card({ ...cardContentData }) }}
    />
);

export const card_people = () => (
  <div dangerouslySetInnerHTML={{ __html: cardPople(cardPeopleData) }} />
);

export const featured_cards = () => (
  <div dangerouslySetInnerHTML={{ __html: featuredCards(featuredCardsData) }} />
);

cardGridData.item__icon_url = iconsSvg;
export const card_grid = () => (
  <div dangerouslySetInnerHTML={{ __html: cardGrid(cardGridData) }} />
);

export const card_featured = () => (
  <div dangerouslySetInnerHTML={{ __html: cardFeatured(cardFeaturedData) }} />
);

export const card_grid_medium = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: cardGridMedium(cardGridMediumData) }} />;
};
