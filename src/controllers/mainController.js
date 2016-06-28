//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('MainController', function ($scope) {
  console.log("MainController");

  $scope.pageTitle = "Record File";

  $scope.selected = 0;


  $scope.selectItem = function (index) {
    $scope.selected = index;
    if ($scope.selected == 0) {
      $scope.pageTitle = "Record File";
    } else if ($scope.selected == 1) {
      $scope.pageTitle = "Scrap Book";
    } else {
      $scope.pageTitle = "Memory";
    }
    console.log($scope.selected);

  };


});
