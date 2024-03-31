import React from 'react';
import { useEffect } from '@storybook/client-api';

import siteHeader from './site-header/site-header.twig';

import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';

import '../../02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const header = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: siteHeader({
          ...breadcrumbData,
          ...mainMenuData,
        }),
      }}
    />
  );
};
