const baseConfig = require('../../module-federation.config');
module.exports = {
  ...baseConfig,
  name: 'alunno',
  exposes: {
    './Module': 'apps/alunno/src/app/remote-entry/entry.module.ts',
  },
};