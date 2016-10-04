app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicScrollDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.navTitle = '';


  $scope.pageTitle = "Record File";
  $scope.selected = 0;

  if ($scope.dev_width < 770) {
    $scope.navTitle = '<div class="cursor-wrapper"><div class="cursor"></div><img style="margin-top: 8px; width:87px; height: 26px;"  class="title-image" src="img/title-logo.png" /></div>';
  } else {
    $scope.navTitle = '';
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
        $scope.selected = 0;
      } else if ($scope.selected == 1) {
        $scope.pageTitle = "Scrap Book";
        $scope.selected = 1;
      } else {
        $scope.pageTitle = "Memory";
        $scope.selected = 2;
      }
      console.log($scope.selected);
    }

  };

  $scope.navStyle = {
    'color': '#e4ff2b',
    'background-color': '#242526'
  };

  $scope.selectItem = function (index) {
    $scope.selected = index;


    if ($scope.dev_width > 770) {
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
  $scope.scrollEvent = function () {
    $scope.scrollamount = $ionicScrollDelegate.$getByHandle('scrollHandle').getScrollPosition().top;
    if ($scope.scrollamount > 180) {
      $scope.$apply(function () {
        $scope.hideNavigation = true;
      });
    } else {
      $scope.$apply(function () {
        $scope.hideNavigation = false;
      });
    }
  };

});
