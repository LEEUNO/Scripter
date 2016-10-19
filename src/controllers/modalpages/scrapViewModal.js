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


app.controller('scrapViewModalController', function ($scope, $ionicModal, $window, $state, $ionicSlideBoxDelegate) {

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

  $scope.data = {};
  $scope.data.currentPage = 0;
  $scope.options = {
    loop: true,
    initialSlide: 0,
    speed: 30
  };
  $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });
  $scope.viewScrapContents = function () {
    $state.go('app.scrap-contents');
  };



});
