//app.directive("recordDetail", function () {
//  return {
//    restrict: "E",
//    scope: {
//      item: "="
//    },
//    templateUrl: "templates/record-detail.html",
//    controller: "recordDetailController"
//  };
//});
//
app.controller('recordDetailController', ['$scope', '$window', '$ionicSlideBoxDelegate','$state', function ($scope, $window, $ionicSlideBoxDelegate, $state) {


	var fileURL = "";
	var scriptArr = [];




	$.ajax({
            url:'http://52.69.199.91:3000/recordDetail',
            type:'GET',
            data:{recordNo:$state.params.param_no},
            success:function(result){
            	$('#detail_title').append(result[0].title);
            	$('#detail_date').append(result[0].date);
            	fileURL = result[0].file_url;
                console.log(result);
                for(var i = 0; i < result.length; i++){
                	if(result[i].bookmark == 1){
                		$('#script_contents').append("<div><span><i class='icon-Bookmark'></span><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
                	}else{
                		$('#script_contents').append("<div><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
                	}
                }
                var wavesurfer = WaveSurfer.create({
				    container: '#waveform',
				    waveColor: 'black',
				    progressColor: 'grey',
				    height:64
				  });
				  // var audioLength = wavesurfer.getCurrentTime();
				  // var audioTime = wavesurfer.getDuration();
				  $scope.startRecording = function(){
				    wavesurfer.playPause();
				  };

				  wavesurfer.load(fileURL);
				  $scope.stopCursor = function(){
				    wavesurfer.stop();
				  };
				  $scope.pauseCursor = function(){
				    wavesurfer.pause();
				  };

                $('.scriptContents').on("click", function(){
                	console.log("gg");
                	if($(this).attr('id') == "0"){
                		console.log("0");
                		wavesurfer.seekTo(0);
                	}else{
                		console.log("1");
                		wavesurfer.seekTo(result[$(this).attr('id') - 1].time / result[result.length - 1].time);
                	}
				   wavesurfer.play();
                });
          }
    });




>>>>>>> 766e4917541484b89d0f08f3b0aa0222f4039a88


  //@기준 끝

  $scope.dev_width = $window.innerWidth;
  $scope.isMobile = true;

  if ($scope.dev_width > 640) {
    $scope.isMobile = false;
  }


  $scope.data = {
    allowScroll: true
  };
  $scope.margin = {
    top: ''
  };

  if ($scope.dev_width > 640) {
    $scope.data.allowScroll = !$scope.data.allowScroll;
    $scope.margin.top = '20px';
  }
<<<<<<< HEAD


  $scope.dev_width = $window.innerWidth;

  //alert($state.params.param_no);

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $ionicModal.fromTemplateUrl('templates/modal/all-resource-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.allResourceModal = function () {
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




  //
  //$scope.items = [
  //  {
  //    title: '인문학자들이 말하는 IoT ',
  //    Description: '홈 IOT에서 단순한 기기 연결이 아닌 집이라는 공간이 역사적으로 사람에게 미치는 영향과 관점',
  //    date: 'Sunday, Aug 21 1:09 PM / SEOUL',
  //    images: 'img/record_list/list_imag1.png',
  //    resource: {
  //      images: 8,
  //      videos: 2
  //    },
  //    tags: [
  //      '거주공간',
  //      '문화',
  //      'IoT',
  //      'Home'
  //    ],
  //    time: '01:04:47'
  //  },
  //  {
  //    title: '인터랙션 연구분야의 시선추적 활용사례',
  //    Description: '시선추적 유저리서치 사례와 방법/기기등을 가지고 어떻게 활용했는지',
  //    date: 'Saterday, Feb 17 3:11 PM / TAEBACK',
  //    images: 'img/record_list/list_imag2.png',
  //    resource: {
  //      images: 0,
  //      videos: 3
  //    },
  //    tags: [
  //      '시선추적',
  //      '방법론',
  //      '사용자테스트'
  //    ],
  //    time: '00:56:13'
  //  },
  //  {
  //    title: '의료 활용을 위한 ICT',
  //    Description: 'Medical UX에 기반한 연구 동향/주요 쟁점들',
  //    date: 'Sunday, Jan 25 11:51 AM / SEOUL',
  //    images: 'img/record_list/list_imag3.png',
  //    resource: {
  //      images: 5,
  //      videos: 1
  //    },
  //    tags: [
  //      'medical',
  //      '의료',
  //      'ICT'
  //    ],
  //    time: '00:46:04'
  //  },
  //  {
  //    title: 'SK플래닛 커머스 서비스 UX 사례',
  //    Description: '시럽2.0 업데이트 과정에 대한 UX 프로세스 설명',
  //    date: 'Sunday, Jan 25 03:33 PM / INCHON',
  //    images: 'img/record_list/list_imag4.png',
  //    resource: {
  //      images: 1,
  //      videos: 2
  //    },
  //    tags: [
  //      '커머스',
  //      '핀테크',
  //      'SK플래닛'
  //    ],
  //    time: '01:02:11'
  //  },
  //  {
  //    title: '2016 네이버 스퀘어 UI',
  //    Description: '스퀘어 UI 레이아웃 연관된 정보 시각화 / 사용자경험 변화',
  //    date: 'Friday, Dec 13 01:57 PM / SEOUL',
  //    images: 'img/record_list/list_imag5.png',
  //    resource: {
  //      images: 6,
  //      videos: 3
  //    },
  //    tags: [
  //      '스퀘어UI',
  //      '정보시각화',
  //      '네이버'
  //    ],
  //    time: '00:53:31'
  //  },
  //  {
  //    title: 'GPU 기반 가속 딥 러닝',
  //    Description: '신경망구조와 딥러닝/머신러닝의 차이점과 GPU의 영향 기술 관련',
  //    date: 'Sunday, Dec 05 02:05 PM / SEOUL',
  //    images: 'img/record_list/list_imag5.png',
  //    resource: {
  //      images: 2,
  //      videos: 1
  //    },
  //    tags: [
  //      '딥러닝',
  //      '신경망구조',
  //      'GPU'
  //    ],
  //    time: '01:34:16'
  //  },
  //  {
  //    title: '삼성SDS 유전자 분석 솔루션 UX 혁신',
  //    Description: '유전자 분석 - UX 혁신 서비스 사례 발표',
  //    date: 'Sunday, Oct 16 04:25 PM / SEOUL',
  //    images: 'img/record_list/list_imag5.png',
  //    resource: {
  //      images: 4,
  //      videos: 1
  //    },
  //    tags: [
  //      '유전자분석',
  //      '삼성SDS',
  //      '뷰티'
  //    ],
  //    time: '00:44:21'
  //  },
  //  {
  //    title: '다중 사용자용 운영체제 FINE 플랫폼 소개',
  //    Description: '운영체제별 차이점과 다중 사용자와의 경험 연관성/Fine플랫폼',
  //    date: 'Saturday, Oct 03 01:56 PM / INCHON',
  //    images: 'img/record_list/list_imag5.png',
  //    resource: {
  //      images: 2,
  //      videos: 3
  //    },
  //    tags: [
  //      '운영체제',
  //      '다중사용자',
  //      'FINE'
  //    ],
  //    time: '01:23:01'
  //  }
  //];
  //
  //
});
=======


 $scope.dev_width = $window.innerWidth;

		//alert($state.params.param_no);

 $scope.lockSlide = function () {
   $ionicSlideBoxDelegate.enableSlide(false);
 };

 		$scope.deleteRecord = function(){
 			console.log("ggssss");
	 	 $.ajax({
	            url:'http://52.69.199.91:3000/deleteRecord',
	            type:'GET',
	            data:{recordNo:$state.params.param_no},
	            success:function(result){
	            	if(result == "deleteOK"){
	            		$state.go('app.browse');
	            	}
	          }
	    });
 	}

 //
 //$scope.items = [
 //  {
 //    title: '인문학자들이 말하는 IoT ',
 //    Description: '홈 IOT에서 단순한 기기 연결이 아닌 집이라는 공간이 역사적으로 사람에게 미치는 영향과 관점',
 //    date: 'Sunday, Aug 21 1:09 PM / SEOUL',
 //    images: 'img/record_list/list_imag1.png',
 //    resource: {
 //      images: 8,
 //      videos: 2
 //    },
 //    tags: [
 //      '거주공간',
 //      '문화',
 //      'IoT',
 //      'Home'
 //    ],
 //    time: '01:04:47'
 //  },
 //  {
 //    title: '인터랙션 연구분야의 시선추적 활용사례',
 //    Description: '시선추적 유저리서치 사례와 방법/기기등을 가지고 어떻게 활용했는지',
 //    date: 'Saterday, Feb 17 3:11 PM / TAEBACK',
 //    images: 'img/record_list/list_imag2.png',
 //    resource: {
 //      images: 0,
 //      videos: 3
 //    },
 //    tags: [
 //      '시선추적',
 //      '방법론',
 //      '사용자테스트'
 //    ],
 //    time: '00:56:13'
 //  },
 //  {
 //    title: '의료 활용을 위한 ICT',
 //    Description: 'Medical UX에 기반한 연구 동향/주요 쟁점들',
 //    date: 'Sunday, Jan 25 11:51 AM / SEOUL',
 //    images: 'img/record_list/list_imag3.png',
 //    resource: {
 //      images: 5,
 //      videos: 1
 //    },
 //    tags: [
 //      'medical',
 //      '의료',
 //      'ICT'
 //    ],
 //    time: '00:46:04'
 //  },
 //  {
 //    title: 'SK플래닛 커머스 서비스 UX 사례',
 //    Description: '시럽2.0 업데이트 과정에 대한 UX 프로세스 설명',
 //    date: 'Sunday, Jan 25 03:33 PM / INCHON',
 //    images: 'img/record_list/list_imag4.png',
 //    resource: {
 //      images: 1,
 //      videos: 2
 //    },
 //    tags: [
 //      '커머스',
 //      '핀테크',
 //      'SK플래닛'
 //    ],
 //    time: '01:02:11'
 //  },
 //  {
 //    title: '2016 네이버 스퀘어 UI',
 //    Description: '스퀘어 UI 레이아웃 연관된 정보 시각화 / 사용자경험 변화',
 //    date: 'Friday, Dec 13 01:57 PM / SEOUL',
 //    images: 'img/record_list/list_imag5.png',
 //    resource: {
 //      images: 6,
 //      videos: 3
 //    },
 //    tags: [
 //      '스퀘어UI',
 //      '정보시각화',
 //      '네이버'
 //    ],
 //    time: '00:53:31'
 //  },
 //  {
 //    title: 'GPU 기반 가속 딥 러닝',
 //    Description: '신경망구조와 딥러닝/머신러닝의 차이점과 GPU의 영향 기술 관련',
 //    date: 'Sunday, Dec 05 02:05 PM / SEOUL',
 //    images: 'img/record_list/list_imag5.png',
 //    resource: {
 //      images: 2,
 //      videos: 1
 //    },
 //    tags: [
 //      '딥러닝',
 //      '신경망구조',
 //      'GPU'
 //    ],
 //    time: '01:34:16'
 //  },
 //  {
 //    title: '삼성SDS 유전자 분석 솔루션 UX 혁신',
 //    Description: '유전자 분석 - UX 혁신 서비스 사례 발표',
 //    date: 'Sunday, Oct 16 04:25 PM / SEOUL',
 //    images: 'img/record_list/list_imag5.png',
 //    resource: {
 //      images: 4,
 //      videos: 1
 //    },
 //    tags: [
 //      '유전자분석',
 //      '삼성SDS',
 //      '뷰티'
 //    ],
 //    time: '00:44:21'
 //  },
 //  {
 //    title: '다중 사용자용 운영체제 FINE 플랫폼 소개',
 //    Description: '운영체제별 차이점과 다중 사용자와의 경험 연관성/Fine플랫폼',
 //    date: 'Saturday, Oct 03 01:56 PM / INCHON',
 //    images: 'img/record_list/list_imag5.png',
 //    resource: {
 //      images: 2,
 //      videos: 3
 //    },
 //    tags: [
 //      '운영체제',
 //      '다중사용자',
 //      'FINE'
 //    ],
 //    time: '01:23:01'
 //  }
 //];
 //
 //
}]);
>>>>>>> 766e4917541484b89d0f08f3b0aa0222f4039a88
