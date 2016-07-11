app.controller('recordDetailController', function ($scope, $window) {
  console.log("recordDetailController");

  $scope.dev_width = $window.innerWidth;
  $scope.isMobile = true;

  if ($scope.dev_width > 640) {
    $scope.isMobile = false;
  }


  $scope.data = {
    allowScroll: true
  };
  $scope.margin = {
    top: ''
  };

  if ($scope.dev_width > 640) {
    $scope.data.allowScroll = !$scope.data.allowScroll;
    $scope.margin.top = '20px';
  }


});
