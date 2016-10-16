app.directive("recommend-card-modal", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/modal/recommend-card-modal.html",
    controller: "recommendCardModalController"
  };
});


app.controller('recommendCardModalController', function ($scope, $ionicModal, $window, $state) {

  $scope.dev_width = $window.innerWidth;


});
