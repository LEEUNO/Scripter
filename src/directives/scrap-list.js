app.directive("scrapList", function () {
  return {
    restrict: "E",
    templateUrl: "templates/directives/scrap-list.html",
    controller: "scrapListController"
  };
});

app.controller('scrapListController', ['$scope', '$window', '$ionicModal', function ($scope, $window, $ionicModal) {
  $scope.dev_width = $window.innerWidth;

  $ionicModal.fromTemplateUrl('templates/modal/scrap-view-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    if ($scope.dev_width > 640) {
      return;
    }
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
  console.log("scrapListController");
  console.log("blabalbabla");


  $scope.preIndex = 0;

  $scope.previewCheck = function (index) {
    $scope.preIndex = index;
    console.log(preIndex);
  };

  $scope.items = [
    {
      title: '1 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: 'img/record_list/list_imag5.png',
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '2 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: 'img/record_list/list_imag5.png',
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '3 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: 'img/record_list/list_imag5.png',
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '4 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: 'img/record_list/list_imag5.png',
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '5 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: 'img/record_list/list_imag5.png',
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    }
  ];
  console.log($scope.items);

}]);
