//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('scrapViewModalController', function ($scope, $ionicModal, $window) {

  $scope.dev_width = $window.innerWidth;

  //$scope.lockSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(false);
  //};
  //


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

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myP").className = "test";
      console.log(document.body.scrollTop);
    } else {
      document.getElementById("myP").className = "";
    }
  }






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
