app.directive("recordList", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/record-list.html",
    controller: "recordListController"
  };
});


app.controller('recordListController', ['$scope', '$window', '$ionicSlideBoxDelegate', function ($scope, $window, $ionicSlideBoxDelegate) {
  $scope.dev_width = $window.innerWidth;


  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $scope.items = [
    {
      title: '1이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      videos: 2,
      images: 4,
      tags: 'tagname',
      time: '00:20:10'

    },
    {
      title: '2이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      videos: 2,
      images: 4,
      tags: 'tagname',
      time: '00:20:10'

    },
    {
      title: '3이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      videos: 2,
      images: 4,
      tags: 'tagname',
      time: '00:20:10'

    },
    {
      title: '4이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      videos: 2,
      images: 4,
      tags: 'tagname',
      time: '00:20:10'

    },
    {
      title: '5이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      videos: 2,
      images: 4,
      tags: 'tagname',
      time: '00:20:10'

    }
  ];
  console.log($scope.items);

}]);



