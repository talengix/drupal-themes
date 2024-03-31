import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withHTML } from '@khriztianmoreno/storybook-addon-raw-styled-component';

// Theming
import emulsifyTheme from './emulsifyTheme';

addParameters({
  options: {
    theme: emulsifyTheme,
  },
});

// GLOBAL CSS
import '../biu_ds/dist/css/base.css';
import '../biu_ds/dist/css/styles-used-only-in-storybook.css';
import '../components/style.scss';

addDecorator(withA11y);
addDecorator(withHTML);

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigAddAttributes = require('add-attributes-twig-extension');

Twig.cache();

twigDrupal(Twig);
twigBEM(Twig);
twigAddAttributes(Twig);

// Symlink to drupal.js
import './drupal.js';

// Inject jQuery
import jquery from '../assets/vendor/jquery.min';
global.$ = jquery;
global.jQuery = jquery;

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
