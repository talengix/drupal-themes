// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Bar-Ilan University Design System',
  brandUrl: 'https://www.biu.ac.il',
  brandImage:
    'https://biumain.lndo.site/themes/custom/biu_base/assets/images/logo-padded.png',
});
