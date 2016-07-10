//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('scrapViewModalController', function ($scope, $ionicModal) {

  $scope.dev_width = $window.innerWidth;

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $scope.pageTitle = "Record File";

  $scope.selected = 0;

  if ($scope.dev_width > 640) {
    $scope.pageTitle = "";
  }

  $ionicModal.fromTemplateUrl('templates/scrap-detail.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });


});
