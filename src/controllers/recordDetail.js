
app.controller('recordDetailController', function ($scope, $window, $ionicModal) {
  console.log("recordDetailController");

  $scope.dev_width = $window.innerWidth;
  $scope.isMobile = true;
  $scope.imageData = [];
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

  //
  //$ionicModal.fromTemplateUrl('templates/modal/all-resource-modal.html', {
  //  scope: $scope,
  //  animation: 'slide-in-up'
  //}).then(function (modal) {
  //  $scope.modal = modal;
  //});
  //$scope.allResourceModal = function () {
  //  $scope.modal.show();
  //};
  //$scope.closeModal = function () {
  //  $scope.modal.hide();
  //};
  //// Cleanup the modal when we're done with it!
  //$scope.$on('$destroy', function () {
  //  $scope.modal.remove();
  //});
  //// Execute action on hide modal
  //$scope.$on('modal.hidden', function () {
  //  // Execute action
  //});
  //// Execute action on remove modal
  //$scope.$on('modal.removed', function () {
  //  // Execute action
  //});
  //
  //
  //
  //$scope.imageData = [{
  //
  //
  //}];
  //


});
