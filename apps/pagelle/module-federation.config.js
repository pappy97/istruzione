const baseConfig = require('../../module-federation.confi');
module.exports = {
  ...baseConfig,
  name: 'pagelle',
  exposes: {
    './Module': 'apps/pagelle/src/app/remote-entry/entry.module.ts',
  },
};
