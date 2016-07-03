app.directive("recordListItem", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/record-list-item.html",
    controller: "recordListItemController"
  };
});

//
//app.controller('recordListItemController', ['$scope', '$window', '$ionicSlideBoxDelegate', function ($scope, $window, $ionicSlideBoxDelegate) {
//  $scope.dev_width = $window.innerWidth;
//  console.log(items);
//
//  $scope.lockSlide = function () {
//    $ionicSlideBoxDelegate.enableSlide(false);
//  };
//  $scope.listItem = $scope.items;
//
//  $scope.items = [
//    {
//      id: {
//        title: '1이부분은 제목입니다',
//        Description: '이부분은 설명입니다',
//        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
//        videos: 2,
//        images: 4,
//        tags: 'tagname',
//        time: '00:20:10'
//      }
//    },
//    {
//      id: {
//        title: '2이부분은 제목입니다',
//        Description: '이부분은 설명입니다',
//        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
//        videos: 2,
//        images: 4,
//        tags: 'tagname',
//        time: '00:20:10'
//      }
//    }, {
//      id: {
//        title: '3이부분은 제목입니다',
//        Description: '이부분은 설명입니다',
//        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
//        videos: 2,
//        images: 4,
//        tags: 'tagname',
//        time: '00:20:10'
//      }
//    },
//    {
//      id: {
//        title: '1이부분은 제목입니다',
//        Description: '이부분은 설명입니다',
//        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
//        videos: 2,
//        images: 4,
//        tags: 'tagname',
//        time: '00:20:10'
//      }
//    },
//    {
//      id: {
//        title: '1이부분은 제목입니다',
//        Description: '이부분은 설명입니다',
//        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
//        videos: 2,
//        images: 4,
//        tags: 'tagname',
//        time: '00:20:10'
//      }
//    }
//  ];
//
//
//}]);




