meteor-ng-grid
==============


##Overview

This is package for meteor that wraps the ng-grid bower package.
This utilizes bower for getting the mentioned package so you should first install bower for meteor.

##Installing
```
mrt add ng-grid;
```

##Using
For samples and docs of how to use ng-grid package please go to http://ui-grid.info/

There is no need to push the ng-grid module into ngMeteor because this already done for you. just use the directives
and the functions of ng-grid.

### ngMeteorGrid
```
  // Send ng-grid options object to this method to make sure that the templates use the ngMeteor
  // binding symbols. Of course, if you intend on specifying your own templates, make sure to use
  // ngMeteor's [[]] binding symbols. 
  $scope.gridOptions = ngMeteorGrid.fixTemplates({data: 'data',
						  // Currently doesn't work without columnDefs object so you should specify it.
						  columnDefs: [{
						  	name: 'firstName',
						  	field: 'first-name'
						  }]
						}) 
```
