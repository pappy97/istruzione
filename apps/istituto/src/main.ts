import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('./assets/module-federation.manifest.json')
  .then((res) => {
    return res.json();
  })
  .then((defs) => {
    return setRemoteDefinitions(defs);
  })
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('MF ERROR:', err));