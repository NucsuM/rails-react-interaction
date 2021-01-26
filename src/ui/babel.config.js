module.exports = {
  env: {
    test: {
      plugins: ['dynamic-import-node']
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          browsers: 'IE 11'
        },
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};
