ngMeteorGrid = {
  fixTemplates: function (options) {
    _.forEach(options.columnDefs, function (column, index, columnDefs) {

      columnDefs[index] = _.extend ({
        cellTemplate: '<div><span class="ui-grid-cell-contents">[[COL_FIELD]]</span></div>',
        headerCellTemplate: '<div class="ui-grid-top-panel ngHeaderSortColumn [[col.headerClass]]" ng-style="{cursor: col.cursor}" ng-class="{ ngSorted: !noSortVisible }">' +
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
  }
};
