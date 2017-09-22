// declare var System: SystemJSLoader.System;

System.config(JSON.parse('<%= SYSTEM_CONFIG_DEV %>'));
System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'angular-4-data-table': 'npm:angular-4-data-table/dist'
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    'angular-4-data-table': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'index.js'
    }
  }
});
