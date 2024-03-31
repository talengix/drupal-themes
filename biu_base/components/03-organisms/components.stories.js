import React from 'react';
import {useEffect} from "@storybook/addons";
import iconsSvg from '../../dist/icons.svg';
//import '../00-base/lottieAnimations';

import iconsHorizontal from './icons-horizontal/icons--horizontal.twig';
import iconsGrid from './icons-horizontal/icons--grid.twig';

import iconsGridData from './icons-horizontal/icons--grid.yml';
import linkList from './link-list/link-list.twig';

import socialMedia from './social-media/social-media.twig';
import socialMediaData from './social-media/social-media.yml';

import linkListData from './link-list/link-list.yml';
import iconsHorizontalData from './icons-horizontal/icons--horizontal.yml';

import featuredCards from './featured-cards/featured-cards.twig';
import featuredCardsData from './featured-cards/featured-cards.yml';

import cardsGrid from './cards-grid/cards--grid.twig';
import cardsGridData from './cards-grid/cards--grid.yml';

import featuredArticle from './featured-article/featured-article.twig';
import featuredArticleData from './featured-article/featured-article.yml';

import cardsGridMedium from './cards-grid-medium/cards-grid-medium.twig';
import cardsGridMediumData from './cards-grid-medium/cards-grid-medium.yml';

import informationBanner from './information-banner/information-banner.twig';
import informationBannerData from './information-banner/information-banner.yml';

import catalogBanner from './catalog-banner/catalog-banner.twig';
import catalogBannerData from './catalog-banner/catalog-banner.yml';

import horizontalTabs from './horizontal-tabs/horizontal-tabs.twig';
import horizontalTabsData from './horizontal-tabs/horizontal-tabs.yml';

import './image-strip/image-strip';
import imageStrip from './image-strip/image-strip.twig';
import imageStripData from './image-strip/image-strip.yml';

import information from './information/information.twig';
import informationData from './information/information.yml';

import largeMedia from './large-media/large-media.twig';
import largeMediaData from './large-media/large-media.yml';

import './expand-collapse/expand-collapse';
import expandCollapse from './expand-collapse/expand-collapse.twig';
import expandCollapseData from './expand-collapse/expand-collapse.yml';

import './media-slides/media-slides';
import mediaSlides from './media-slides/media-slides.twig';
import mediaSlidesData from './media-slides/media-slides.yml';

import statisticsCard from './statistics-cards/statistics-cards.twig';
import statisticsCardData from './statistics-cards/statistics-cards.yml';

import './large-hero/large-hero';
import largeHero from './large-hero/large-hero.twig';
import largeHeroData from './large-hero/large-hero.yml';
import './dynamic-list/table';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Components' };

largeHeroData.items.map((item) => {
  item.additional_classes = ['swiper-slide'];
  return item;
});

export const LargeHero = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: largeHero(largeHeroData) }} />
};

imageStripData.items.map((item) => {
  item.additional_classes = ['swiper-slide'];
  return item;
});
imageStripData.icon_url = iconsSvg;
export const ImageStrip = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: imageStrip(imageStripData) }} />
};

mediaSlidesData.items.map((item) => {
  item.media_slide_additional_classes = ['swiper-slide'];
  return item;
});
mediaSlidesData.icon_url = iconsSvg;
export const MediaSlides = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: mediaSlides(mediaSlidesData) }} />
};

cardsGridData.items.map((item) => {
  item.icon_url = iconsSvg;
  return item;
});
export const cards_grid = () => (
  <div dangerouslySetInnerHTML={{ __html: cardsGrid(cardsGridData) }} />
);

export const cards_grid_medium = () => (
  <div dangerouslySetInnerHTML={{ __html: cardsGridMedium(cardsGridMediumData) }} />
);

export const horizonta_tabs = () => (
  <div dangerouslySetInnerHTML={{ __html: horizontalTabs(horizontalTabsData) }} />
);

export const large_media = () => (
  <div dangerouslySetInnerHTML={{ __html: largeMedia(largeMediaData) }} />
);

socialMediaData.icon__url = iconsSvg;
export const social_media = () => (
  <div dangerouslySetInnerHTML={{ __html: socialMedia(socialMediaData) }} />
);

export const featured_article = () => (
  <div dangerouslySetInnerHTML={{ __html: featuredArticle(featuredArticleData) }} />
);

expandCollapseData.icon_url = iconsSvg;
export const expand_collapse = () => (
  <div dangerouslySetInnerHTML={{ __html: expandCollapse(expandCollapseData) }} />
);

iconsHorizontalData.items.map((item) => {
  item.icon_url = iconsSvg;
  return item;
});
export const icons_Horizontal = () => (
  <div dangerouslySetInnerHTML={{ __html: iconsHorizontal(iconsHorizontalData) }} />
);

export const information_Component = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{__html: information(informationData)}}/>
};


iconsGridData.items.map((item) => {
  item.icon_url = iconsSvg;
  return item;
});
export const icons_Grid = () => (
  <div dangerouslySetInnerHTML={{ __html: iconsGrid(iconsGridData) }} />
);
informationBannerData.icon_url = iconsSvg;
export const information_banner = () => (
  <div dangerouslySetInnerHTML={{ __html: informationBanner(informationBannerData) }} />
);

catalogBannerData.icon_url = iconsSvg;
export const catalog_banner = () => (
  <div dangerouslySetInnerHTML={{ __html: catalogBanner(catalogBanner) }} />
);

export const statistics_cards = () => (
  <div dangerouslySetInnerHTML={{ __html: statisticsCard(statisticsCardData) }} />
);

export const featured_cards = () => (
  <div dangerouslySetInnerHTML={{ __html: featuredCards(featuredCardsData) }} />
);

linkListData.items.map((item) => {
  item.icon_url = iconsSvg;
  return item;
});
export const link_list = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: linkList(linkListData) }} />
};
