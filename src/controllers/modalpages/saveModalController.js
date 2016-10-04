app.controller('scrapViewModalController', function ($scope, $ionicModal) {

  console.log('세이브모달 컨트롤러');

  $scope.$parent.closeModal();

  angular.element("#add_title").click(function(){
  	$(this).after("<div class='title-exam'><strong>이런 제목은 어떤가요?</strong><ol><li>자동차 컨트롤 개선사례<a href='javascript:;'>사용하기</a></li><li>자동차 컨트롤 개선 방법론<a href='javascript:;'>사용하기</a></li><li>자동차 컨트롤 연구분야<a href='javascript:;'>사용하기</a></li></ol></div>");
  });

});


