const baseConfig = require('../../module-federation.config');
module.exports = {
  ...baseConfig,
  name: 'registro',
  exposes: {
    './Module': 'apps/registro/src/app/remote-entry/entry.module.ts',
  },
};
