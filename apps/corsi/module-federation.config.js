const baseConfig = require('../../module-federation.config');
module.exports = {
  ...baseConfig,
  name: 'corsi',
  exposes: {
    './Module': 'apps/corsi/src/app/remote-entry/entry.module.ts',
  },
};
