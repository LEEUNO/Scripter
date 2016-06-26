//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('MainController', function ($scope) {
  console.log("MainController");

  $scope.selected = 0;
  $scope.selectItem = function (index) {
    $scope.selected = index;
  };

});
