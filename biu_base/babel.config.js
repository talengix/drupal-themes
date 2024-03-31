module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: '2',
      },
    ],
    'minify',
  ];

  const comments = false;

  return { presets, comments };
};
