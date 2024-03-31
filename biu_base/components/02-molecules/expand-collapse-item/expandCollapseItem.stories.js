import React from 'react';

import expandCollapseItem from './expand-collapse-item.twig';
import expandCollapseItemData from './expand-collapse-item.yml';
import iconsSvg from "../../../dist/icons.svg";

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Expand Collapse Item' };
expandCollapseItemData.icon_url = iconsSvg;
export const expand_collapse_item = () => (
  <div dangerouslySetInnerHTML={{ __html: expandCollapseItem(expandCollapseItemData) }} />
);
