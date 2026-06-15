const baseConfig = require('../../module-federation.config');
module.exports = {
  ...baseConfig,
  name: 'classi',
  exposes: {
    './Module': 'apps/classi/src/app/remote-entry/entry.module.ts',
  },
};
