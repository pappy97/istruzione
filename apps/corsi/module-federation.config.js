const baseConfig = require('../../module-federation.confi');
module.exports = {
  ...baseConfig,
  name: 'corsi',
  exposes: {
    './Module': 'apps/corsi/src/app/remote-entry/entry.module.ts',
  },
};
