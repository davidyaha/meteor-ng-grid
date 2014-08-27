ngMeteorGrid = {
  fixTemplates: function (options) {
    _.forEach(options.columnDefs, function (column, index, columnDefs) {

      columnDefs[index] = _.extend ({
        cellTemplate: '<div><div class="ngCellText">[[COL_FIELD]]</div></div>',
        headerCellTemplate: '<div class="ngHeaderSortColumn [[col.headerClass]]" ng-style="{cursor: col.cursor}" ng-class="{ ngSorted: !noSortVisible }">' +
          '<div ng-click="col.sort($event)" ng-class="\'colt\' + col.index" class="ngHeaderText">[[col.displayName]]</div>' +
          '<div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div>' +
          '<div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div>' +
          '<div class="ngSortPriority">[[col.sortPriority]]</div>' +
          '</div>' +
          '<div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>'
      }, column);
    })
    return _.extend(ngMeteorGrid.templates, options);
  },
  templates: {
    aggregateTemplate: '<div ng-click="row.toggleExpand()" ng-style="{\'left\': row.offsetleft}" class="ngAggregate"><span class="ngAggregateText">[[row.label CUSTOM_FILTERS]] ([[row.totalChildren()]] [[AggItemsLabel]])</span><div class="[[row.aggClass()]]"></div></div>',
    rowTemplate: '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell [[col.cellClass]]"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>',
    headerRowTemplate: '<div ng-style="{ height: col.headerRowHeight }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngHeaderCell" ng-header-cell></div>'
  }
};
