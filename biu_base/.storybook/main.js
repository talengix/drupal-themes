module.exports = {
  stories: [ '../biu_ds/**/*.stories.js', '../components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@khriztianmoreno/storybook-addon-raw-styled-component/register'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
