app.directive("recordListItem", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/record-list-item.html",
    controller: "recordListItemController"
  };
});

app.controller('recordListItemController', ['$scope', '$window', function ($scope, $window) {
  $scope.dev_width = $window.innerWidth;

}]);




