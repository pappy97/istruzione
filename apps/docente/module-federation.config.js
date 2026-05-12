
const baseConfig = require('../../module-federation.config');

module.exports = {
    ...baseConfig,
  name: 'docente',
  exposes: {
    './Module': 'apps/docente/src/app/remote-entry/entry.module.ts',
  },

};
