app.directive("scrap-view-modal", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/modal/scrap-view-modal.html",
    controller: "scrapViewModalController"
  };
});


app.controller('scrapViewModalController', function ($scope, $ionicModal, $window, $state) {

  $scope.dev_width = $window.innerWidth;
  console.log("kakak");

  //var previousScroll = 0;
  //
  //$window.scroll(function () {
  //  var currentScroll =  $window.scrollTop();
  //  if (currentScroll > previousScroll){
  //    alert('down');
  //  }
  //  else {
  //    alert('up');
  //  }
  //  previousScroll = currentScroll;
  //});


  $scope.viewScrapContents = function () {
    $state.go('app.scrap-contents');
  };



});
