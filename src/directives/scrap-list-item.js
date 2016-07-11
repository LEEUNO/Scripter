app.directive("scrapListItem", function() {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/scrap-list-item.html",
    controller: "scrapListItemController"
  };
});


app.controller('scrapListItemController', ['$scope', '$window', '$ionicModal','$state', function ($scope, $window) {
  $scope.dev_width = $window.innerWidth;
}]);
