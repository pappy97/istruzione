const baseConfig = require('../../module-federation.config');
module.exports = {
  ...baseConfig,
  name: 'pagelle',
  exposes: {
    './Module': 'apps/pagelle/src/app/remote-entry/entry.module.ts',
  },
};
