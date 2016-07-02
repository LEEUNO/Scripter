app.controller('recordListController', ['$scope', function ($scope) {
  console.log("recordListController");


  $scope.items = [
    {
      url: {
        title: '1이부분은 제목입니다',
        Description: '이부분은 설명입니다',
        id: 1,
        date: 'Sunday, Feb 21 1:09 PM / SEOUL',
        videos: 2,
        images: 4,
        tags: 'tagname',
        time: '00:20:10'
      }
    }
  ];


}]);


