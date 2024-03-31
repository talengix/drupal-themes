import React from 'react';

import '../../../dist/css/02-patterns/media-object/media-object.css';
import '../../../dist/css/02-patterns/card/card.css';

import card from './card.twig';
import cardData from './card-data.yml';
import cardStdData from './card-standard-data.yml';
import cardWrappedData from './card-link-wrapped-data.yml';
import cardHorizData from './card-horiz-data.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Design System/02-Patterns/Card' };

export const cardPlain = () => (
  <>
    <h2>Basic Card (.card)</h2>
    <p className='MgB-0'>Basic plain card, before adding any modifiers</p>
    <p className='MgB-0'>The pale green background color on the .card element is for demonstration purposes only.</p>
    <p>Plain card pattern has no background defined</p>
    <div className='col-sm-6 sg-children-has-bg--pale'>
      <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
    </div>
  </>
);

export const cardLinkWrapped = () => (
  <>
    <h2>Basic Card wrapped with link</h2>
    <p>Basic card, no modifiers, but card HTML wrapper element is A (link) instead of DIV</p>
    <div className='col-sm-6'>
      <div dangerouslySetInnerHTML={{ __html: card(cardWrappedData) }} />
    </div>
  </>
);

export const cardStandard = () => (
  <>
    <h1>Standard Card  (.card--standard)</h1>
    <div className='row bg-light Pd-1_5'>
      <div className='col-sm-6'>
        <div dangerouslySetInnerHTML={{ __html: card(cardStdData) }} />
      </div>
    </div>
  </>
);

export const cardHorizontal = () => (
  <>
    <h2>Horizontal Card (.card--horizontal)</h2>
  <div
    dangerouslySetInnerHTML={{ __html: card(cardHorizData) }}
  />
  </>
);
