// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  '@angular/fire',
  '@angular/core',
  '@angular/common',
  '@angular/common/http',
  '@angular/router',
  '@istruzione/shared/registro'
]);

module.exports = {
  shared: (libraryName, defaultConfig) => {

    if (
  libraryName.startsWith('primeng') ||
  libraryName === 'primeicons' ||
  libraryName === 'chart.js' 
) {
  return {
    ...defaultConfig,
    singleton: true,
    strictVersion: false,
  };
}

if (libraryName === 'firebase') {
  return {
    singleton: true,
    strictVersion: false,
  };
}

if (libraryName.startsWith('firebase/')) {
  return {
    singleton: true,
    strictVersion: false,
  };
}

    // AngularFire
if (libraryName.startsWith('@angular/fire')) {
  return {
    ...defaultConfig,
    singleton: true,
    strictVersion: false,
    requiredVersion: false,
  };
}

    // Angular + Material + CDK
    if (
      libraryName.startsWith('@angular/') ||
      libraryName.startsWith('@angular/material') ||
      libraryName.startsWith('@angular/cdk') ||
      libraryName === 'rxjs'
    ) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
      };
    }

    // workspace libs
    if (libraryName.startsWith('@istruzione/')) {
      return {
        ...defaultConfig,
        singleton: true,
      };
    }

    return false;
  },
};