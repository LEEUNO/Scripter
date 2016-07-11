app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.navTitle = '';


  $scope.pageTitle = "Record File";
  $scope.selected = 0;


  if ($scope.dev_width < 770) {
    $scope.navTitle = '<img style="margin-top: 8px; width:80px; height: 28px;"  class="title-image" src="img/logo.png" />';
  } else {
    $scope.navTitle = '<img style="z-index: 100; position: absolute; top: 10px; left: 20px; width:80px; height: 28px;"  class="title-image" src="img/logo.png" />';
  }

  $scope.recordIcon = '<i class="icon-record"></i>';
  $scope.scrapIcon = '<i class="icon-scrap"></i>';
  $scope.memoryIcon = '<i class="icon-memory"></i>';
  console.log("MainController");


  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  if ($scope.dev_width < 770) {
    $scope.pageTitle = "";
  }

  $scope.selectTabWithIndex = function (index) {
    $scope.selected = index;
    $ionicTabsDelegate.select(index);

    if ($scope.dev_width < 770) {
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

  $scope.navStyle = {
    'color': '#e4ff2b',
    'background-color': '#242526'
  };

  //$scope.selectItem = function (index) {
  //  $scope.selected = index;
  //
  //
  //  if ($scope.dev_width > 770) {
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
