import React from 'react';
import '../../../dist/css/03-components/events-strip/events-strip.css';
import {useEffect} from "@storybook/addons";

import eventsStrip from './events-strip.twig';
import eventsStripData from './events-strip.yml';

export default {title: 'Design System/03-Components/Events Strip'};

export const EventsStrip = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{__html: eventsStrip(eventsStripData)}}/>
};

