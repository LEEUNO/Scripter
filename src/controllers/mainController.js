//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate) {

  $scope.dev_width = $window.innerWidth;
  //$scope.dev_height = $window.innerHeight;

  console.log("MainController");

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };
  $scope.pageTitle = "Record File";

  $scope.selected = 0;

  if ($scope.dev_width > 640) {
    $scope.pageTitle = "";
  }

  $scope.selectTabWithIndex = function (index) {
    $scope.selected = index;
    $ionicTabsDelegate.select(index);

    if ($scope.dev_width > 640) {
      return;
    } else {
      if ($scope.selected == 0) {
        $scope.pageTitle = "Record File";
      } else if ($scope.selected == 1) {
        $scope.pageTitle = "Scrap Book";
      } else {
        $scope.pageTitle = "Memory";
      }
      console.log($scope.selected);
    }

  };

  //$scope.selectItem = function (index) {
  //  $scope.selected = index;
  //
  //
  //  if ($scope.dev_width > 640) {
  //    return;
  //  } else {
  //    if ($scope.selected == 0) {
  //      $scope.pageTitle = "Record File";
  //    } else if ($scope.selected == 1) {
  //      $scope.pageTitle = "Scrap Book";
  //    } else {
  //      $scope.pageTitle = "Memory";
  //    }
  //    console.log($scope.selected);
  //  }
  //}


});
