app.directive("scrapList", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/scrap-list.html",
    controller: "scrapListController"
  };
});

app.controller('scrapListController', ['$scope', '$window', '$ionicModal', '$state', '$ionicSlideBoxDelegate', function ($scope, $window, $ionicModal, $state, $ionicSlideBoxDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.selectedIndex = 0;

  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
    console.log($scope.selectedIndex);
  };
  //$scope.lockSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(false);
  //};
  //$scope.releaseSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(true);
  //};
  //

//
//스크랩이미지 버튼
//  $scope.slidePrevious = function() {
//
//    $ionicSlideBoxDelegate.previous();
//  };
//
//  $scope.slideNext = function() {
//
//    $ionicSlideBoxDelegate.next();
//  };
//


  //
  //$scope.itemClicked = function ($index) {
  //  $scope.selectedIndex = $index;
  //};


  //$scope.selectItem = function (item) {
  //  item.selected = !item.selected;
  //  var selectedItems = {};
  //  for (var g of $scope.items) {
  //    selectedItems[g.id] = g.selected;
  //  }
  //  storage.set('selectedGoals', selectedGoals);
  //};


  //$ionicModal.fromTemplateUrl('templates/scrap-detail.html', {
  //  scope: $scope,
  //  animation: 'slide-in-up'
  //}).then(function (modal) {
  //  $scope.modal = modal;
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
  $scope.slidePrevious = function (slideIndex) {

    $ionicSlideBoxDelegate.next(slideIndex);

  };

  $scope.slideNext = function (slideIndex) {
    $ionicSlideBoxDelegate.previous(slideIndex);
  };


  $ionicModal.fromTemplateUrl('templates/modal/scrap-view-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openScrapViewModal = function () {


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
  $scope.viewScrapContents = function () {
    $state.go('app.scrap-contents');
  };

  $scope.items = [
    {
      title: '자동차 컨트롤 디자인 경향연구 - PUI 입/출력 제안',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 자동차 입/출력 장치와 인터페이스',
          '2. 자동차 네비게이션 스크린 발전사례',
          '3. 스마트카 UX서비스 트렌드',
          '4. 자율주행차 인터페이스 상관관계'
        ],
        images: [
          'img/scrap-img/scrap-1.png',
          'img/scrap-img/scrap-2.png',
          'img/scrap-img/scrap-3.png',
          'img/scrap-img/scrap-4.png',
          'img/scrap-img/scrap-5.png',
          'img/scrap-img/scrap-6.png',
          'img/scrap-img/scrap-7.png',
          'img/scrap-img/scrap-8.png'
        ],
        recommended: [
          {
            title: '3D포스터치와 GUI & PUI',
            Description: '표면 질감 렌더링 기법을 이용한 모바일 입력방법',
            date: 'Sunday, Feb 21 1:09PM / SEOUL',
            images: 'img/scrap-img/scrap-resource/scrap-resource-1.png',
            resource: {
              images: 0,
              videos: 3
            },
            tags: [
              '시선추적',
              '방법론',
              '사용자테스트'
            ],
            time: '00:56:13'

          },
          {
            title: '표면 질감 렌더링 기법을 이용한 모바일 입력방법',
            Description: '시럽2.0 업데이트 과정에 대한 UX 프로세스 설명',
            date: 'Sunday, Jan 25 03:33 PM / INCHON',
            images: 'img/scrap-img/scrap-resource/scrap-resource-2.png',
            resource: {
              images: 1,
              videos: 2
            },
            tags: [
              '커머스',
              '핀테크',
              'SK플래닛'
            ],
            time: '01:02:11'
          },
          {
            title: 'Gesture Interaction을 통한 모바일 경험 향상',
            Description: 'Gesture Interaction을 통한 모바일 경험 향상',
            date: 'Sunday, Feb 21 1:09PM / SEOUL',
            images: 'img/scrap-img/scrap-resource/scrap-resource-3.png',
            resource: {
              images: 0,
              videos: 3
            },
            tags: [
              '시선추적',
              '방법론',
              '사용자테스트'
            ],
            time: '00:56:13'

          }]
      }
    },


    {
      title: '플랫 인터페이스 디자인의 메타포적 관점에 관한 비평',
      date: 'Tuesday, Feb 04 3:22 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 메타포와 심성모형',
          '2. 스큐어몰피즘',
          '3. 인터페이스 패러다임',
          '4. 혼합인터페이스',
          '5. 미니멀리즘적 의도',
          '6. 제스쳐 메타포'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '2016 네이버 스퀘어 UI',
          dataSet: 3
        },
          {
            resourceTitle: 'visual interface / Graphics&Vision',
            dataSet: 2
          }]
      }
    },


    {
      title: '안드로이드기반 근거리 SNS/LBS',
      date: 'Sunday, Oct 22 9:37 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 제안된 안드로이드 기반 SNS 시스템',
          '2. 시스템 기본 개념 / 구성동작',
          '3. 근거리 블루투스 연동',
          '4. Local Based SNS 사례'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: 'SNS Personal Data 보안시스템',
          dataSet: 3
        },
          {
            resourceTitle: '안드로이드 기반 다중사용자용 플랫폼 제안',
            dataSet: 2
          }]
      }
    },


    {
      title: '혼합현실공간 뉴미디어환경',
      date: 'Monday, Mar 27 1:42 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 혼합현실 개념',
          '2. AR&VR 발전 동향',
          '3. 미디어 환경 기술적체계',
          '4. 미디어에 관한 뉴 UX 니즈 발굴 '
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '3D 그래픽스 프로파일링과 최적화',
          dataSet: 3
        },
          {
            resourceTitle: 'visual interface / Graphics&Vision',
            dataSet: 2
          }]
      }
    },


    {
      title: '챗봇 - 인공지능 대화엔진',
      date: 'Monday, Mar 03 5:21 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 챗봇 플랫폼',
          '2. 앱스토어의 한계점 & 통계',
          '3. 앱스토어 수익구조에 대한 변화',
          '4. 니즈와 대화형 인터페이스',
          '5. 챗봇 서드파티 생태계 예상'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '챗봇 뉴미디어의 가능성&업계동향',
          dataSet: 3
        },
          {
            resourceTitle: '감성디자인 기반 인터페이스 리서치 ',
            dataSet: 2
          }]
      }
    },


    {
      title: '임산부 타겟 자가진단 의료기기&서비스 UX',
      date: 'Friday, Aug 13 2:56 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 임신기간중 의료진단 과정',
          '2. 홈케어 관련 서비스',
          '3. 정기검진 중요도 & 사용기기',
          '4. 응급상황시 필요 서비스&기기 구축현황'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '의료 활용을 위한 ICT',
          dataSet: 3
        },
          {
            resourceTitle: '삼성SDS 유전자 분석 솔루션 UX 혁신',
            dataSet: 2
          }]
      }
    },


    {
      title: '스마트워치 원형디스플레이 - 미디어 컨텐츠 UX/UI 디자인 ',
      date: 'Sunday, Aug 31 6:26 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 원형 디자인 요소 변화',
          '2. TEXT 가독성 연구자료',
          '3. 컬러와 배터리 상관성',
          '4. 햇빛 반사율 관련 컬러 연구'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '인터랙션 연구분야의 시선추적 활용사례',
          dataSet: 3
        },
          {
            resourceTitle: '햅틱 시스템 구현 및 평가',
            dataSet: 2
          }]
      }
    },
    {
      title: '3D 포스터치와 GUI ',
      date: 'Saterday, Aug 22 2:12 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 포스터치 동향',
          '2. 포스터치 인터페이스 내 모달 피드백',
          '3. 포스터치 단계 기준'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '컴포트 성능 반영된 인터페이스',
          dataSet: 3
        },
          {
            resourceTitle: '햅틱 시스템 구현 및 평가',
            dataSet: 2
          }]
      }
    }, {
      title: '저시력자를 위한 컨텐츠용 음성안내 UX가이드라인 ',
      date: 'Saterday, Jun 11 7:36 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 시각장애인과 저시력자 단계 구분',
          '2. 물체 인식 정도의 차이',
          '3. 컨텐츠 파악에서 복합 감각 영향',
          '4. 외부/내부 환경에서 컨텐츠 인식 요소 차이'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '장애인을 위한 재활보조기기의 사용성평가',
          dataSet: 3
        },
          {
            resourceTitle: '비언어적 커뮤니케이션을 위한 스마트폰 음성 인터페이스연구',
            dataSet: 2
          }]
      }
    },
    {
      title: '모바일 중심 IOT &  홈 어시스턴트 ',
      date: 'Sunday, Jun 02 4:30 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 아마존 에코 사례',
          '2. 애플 홈킷&시리 컨트롤 사례',
          '3. IOT 생태계 시장 조사',
          '4. Iot 연결 디바이스 개별 ID 이슈',
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '인문학자들이 말하는 IoT',
          dataSet: 3
        },
          {
            resourceTitle: '구글과 애플의 Iot 서비스에 대한 접근',
            dataSet: 2
          }]
      }
    }
  ];

  $scope.isFocus = false;
  $scope.isFocusCheck = function () {
    if ($scope.isFocus == false) {
      $scope.isFocus = true;
    } else {
      $scope.isFocus = false;
    }
  };
  //검색/*--------------------------------------------------------------------------------------*/

  $scope.addRow = function () {
    $scope.items.push({'title': $scope.title, 'date': $scope.date});
    $scope.title = '';
    $scope.date = '';
  };

  $scope.removeRow = function (name) {
    var index = -1;
    var comArr = eval($scope.items);
    for (var i = 0; i < comArr.length; i++) {
      if (comArr[i].name === name) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      alert("Something gone wrong");
    }
    $scope.items.splice(index, 1);
  };


  /*--------------------------------------------------------------------------------------*/
}]);
