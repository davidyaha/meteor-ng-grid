Package.describe({
  summary: "ng-grid - Angular Data Grid written in AngularJS and jQuery by the AngularUI Team"
});

function packageExists(pkgname) {
    var fs = Npm.require('fs');
    var path = Npm.require('path');
    var pkgpath = path.join('packages', pkgname);
    return fs.existsSync(pkgpath);
}

Package.on_use(function (api) {
//    api.use('bower', 'client');
    
    if (packageExists('angularite')) {
        api.use('angularite', 'client');
    } else if (packageExists('ngMeteor')) {
        api.use('ngMeteor', 'client');
    }
    
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
