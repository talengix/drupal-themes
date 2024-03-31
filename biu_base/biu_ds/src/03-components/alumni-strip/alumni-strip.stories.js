import React from 'react';
import '../../../dist/css/03-components/alumni-strip/alumni-strip.css';

import {useEffect} from "@storybook/addons";

import cardAlumni from './card-alumni.twig';
import cardAlumniData from './card-alumni-data.yml';


import alumniStrip from './alumni-strip.twig';
import alumniStripData from './alumni-strip-data.yml';
import iconLargeArrowWhite from '../../../assets/images/icons/large-arrow-dark.svg';

import './alumni-strip-config--storybook';

/**
 * Storybook Definition.
 */
export default {title: 'Design System/03-Components/Alumni Strip'};

// alumniStripData.items.map((item) => {
  // item.additional_classes = ['swiper-slide'];
  // return item;
// });

alumniStripData.icon_full_url = iconLargeArrowWhite;
export const AlumniStrip = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{__html: alumniStrip(alumniStripData)}}/>
};

export const CardAlumni = () => (
  <>
  <h1>Single Alumni Card</h1>
    <div className="col-sm-12 col-md-5">
    <div dangerouslySetInnerHTML={{__html: cardAlumni(cardAlumniData)}}/>
  </div>
  </>
);
