import React from 'react';
import '../../../dist/css/02-patterns/media-object/media-object.css';


import mediaObject from './media-object.twig';
import mediaObjectData from './media-object.yml';


/**
 * Storybook Definition.
 */
export default {title: 'Design System/02-patterns/Media Object Card'};

// peopleStripData.items.map((item) => {
  // item.additional_classes = ['swiper-slide'];
  // return item;
// });

export const MediaObjectCard = () => (
  <>
  <h1>Media Object Pattern</h1>
    <p>@TODO add description</p>
    <div className="col-sm-12 col-md-5">
    <div dangerouslySetInnerHTML={{__html: mediaObject(mediaObjectData)}}/>
  </div>
  </>
);
