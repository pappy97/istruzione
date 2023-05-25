const baseConfig = require('../../module-federation.confi');
module.exports = {
  ...baseConfig,
  name: 'alunno',
  exposes: {
    './Module': 'apps/alunno/src/app/remote-entry/entry.module.ts',
  },
};
