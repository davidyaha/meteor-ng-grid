
Package.describe({
  summary: "ng-grid - Angular Data Grid written in AngularJS and jQuery by the AngularUI Team",
  version: "0.0.3",
  git: "https://github.com/davidyaha/meteor-ng-grid.git" 
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('underscore', 'client');
  api.use('urigo:ngmeteor@0.2.0', 'client');
    
  // Exports the ngMeteorGrid options object
  api.export('ngMeteorGrid', 'client');
	
  // Files to load in Client only.
  api.add_files([
	   'lib/ui-grid-unstable.js',
	   'lib/ui-grid-unstable.css',
  	   'lib/ui-grid.eot',
	   'lib/ui-grid.svg',
	   'lib/ui-grid.ttf',
	   'lib/ui-grid.woff',
	   'smart.json', // Install bower components - ngGrid
           'options.js', // Options object declaretion
           'init.js'], // Addition of ngGrid to ngMeteor 
           'client');
    
});
