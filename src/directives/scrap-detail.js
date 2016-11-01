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
app.controller('scrapDetailController', function ($scope, $window, $ionicModal, $location, $timeout, $interval, $ionicSlideBoxDelegate, $ionicScrollDelegate, $state) {

  $scope.dev_width = $window.innerWidth;

  //alert($state.params.param_no);

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $ionicModal.fromTemplateUrl('templates/modal/recommend-card-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.recommendCard = function () {
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



  //$scope.resourceitems = [
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 1,
  //    script: '대부분의 서비스에서는 소프트웨어를 편의성이나 기능 증대에 활용하는 경우가 대부분이라 서비스 자체의 변화는 크지 않습니다. 하지만 질병의 치료와 예방을 함께 생각하는 헬스케어 서비스의경우 소프트웨어가 차지하는 비중은 매우 높습니다. 질병의 발생 여부에 따라 환자의 치료나 상태 관리를 위해 병원을 방문해야 하는 것이 일반적이지만, ICT를 접목 시키면 직접적인 치료는 아니더라도 환자의 상태는 항시 관리할 수 있기 때문입니다.',
  //    bookmark: true,
  //    image: '../img/record-detail-resource/1.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 2,
  //    script: '헬스케어 서비스는 기존 의료 서비스에 ICT 서비스를 접목한 서비스입니다. 그림1은 헬스케어 서비스의 개념을 나타낸 것입니다. 기존의 의료 서비스는 환자가 발생하면 병원과 약국에서 대면 의료를 통한 서비스를 하는 것이 일반적이었습니다. 하지만 헬스케어 서비스로 넘어오면서 환자는 물론이고 질병이 발생하지 않은 일반인 대상으로 다양한 서비스를 제공하고 있습니다. 더구나 ICT 기기의 발달로 인해 원격 진료라는 새로운 서비스도 나타났습니다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/2.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 3,
  //    script: '기존 의료 서비스는 반드시 의료 기관을 통해 서비스를 받을 수 있었지만, 헬스케어 서비스는 헬스케어 기기, PC, 모바일 기기, 운동시설 등 다양한 기기의 정보를 통해 추가적인 서비스를 받을 수 있습니다. 병원에서 전달하는 정보는 전자의무기록처방전달시스템 의료영상저장전송시스템등이 있으며, 다양한 기기들이 전달하는 정보는 국제표준 전자건강기록가 있습니다. 전송된 정보들은 각각의 표준화된 규격에 맞춰 빅데이터로 관리되며, 중요 의료, 건강 정보를 분석하여 헬스케어 서비스를 제공하고 있습니다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/3.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 4,
  //    script: '헬스케어 서비스는 발전하는 IoT 개념을 적용하는 서비스 중에서 빅데이터 분석에 의해 개인의 특성을 파악하고 맞춤 서비스를 할 수 있는 대표적인 서비스라고 할 수 있습니다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/4.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 5,
  //    script: '사용자의 일상생활 정보인 헬스 정보부터 병원의 진료 정보, 그리고 전문 의료 기기를 통한 의료 정보까지 거의 모든 정보를 대상으로 한다. 병원의 진료 정보나 의료 기기를 통한 의료 정보는 기존 의료 서비스에서도 관리되던 정보라 양이 많지는 않다. 하지만 헬스 정보는 사용자의 24시간을 대상으로 하기 때문에 너무나 방대한 양이 수집된다. 따라서 모든 정보가 저장되는 기존 의료 서비스와는 다르게 헬스 정보는 기준에 따라 라이프 사이클 관리가 필요하다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/5.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 6,
  //    script: '방대한 헬스 정보는 데이터 라이프 사이클 관리가 필요하다. 앞에서 말한 것처럼 헬스 정보는 24시간 관리되는 정보이기 때문에, 사람 수와 수집 되는 방법에 따라 기하급수적으로 늘어날 수 있다. 따라서 수작업으로는 도저히 관리가 되기 어렵고, 일정한 기준을 마련하여 데이터 라이프 사이클(Data Life Cycle)을 관리하는 것이 중요하다. 이 때, 사용자의 건강 상태, 질병 이력 등을 고려하여 나이, 성별, 질병과 같은 항목에 따라 다양하게 기준이 마련될 수 있도록 설계하는 것이 좋다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/6.png'
  //  }
  //  ,
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 7,
  //    script: '그림2는 헬스케어 서비스의 컨셉추얼 아키텍처(Conceptual Architecture)의 예를 나타내고 있다. 기존에는 병원과 의사들이 환자에게서 정보를 얻어 데이터베이스에 직접 저장한 정보 밖에 없었다. 하지만, 헬스케어 서비스는 환자나 일반인이 생성하는 정보가 추가되었다.환자나 일반인은 서드파트 앱이나 헬스 기기를 통해 다양한 정보를 생성하고 이러한 정보는 헬스, 헬스 교육, 패턴, 그리고 주변 사람들의 헬스정보까지 나타낼 수 있고, 병원이나 건강관리센터에서는 EMR, OCS, PACS 등을 통해 환자, 치료, 의료, 예방 등의 정보를 나타낼 수 있다. 이러한 정보는 헬스케어 서비스 플랫폼에서 빅데이터 분석을 통해 서비스 사용자에게 필요한 맞춤 헬스, 질병, 치료 정보 등으로 제공된다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/7.png'
  //  }
  //  ,
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 8,
  //    script: '빅데이터를 정의할 때는 3V가 핵심으로 알려져 있다. IoT 등을 활용하여 3V의 특성을 살린 데이터를 만들어 전송하고 수집된 데이터를 빅데이터 분석을 통해 의미 있는 데이터로 구성할 수 있다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/8.png'
  //  }
  //  ,
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 9,
  //    script: '금융 서비스는 데이터가  실시간으로 파악이 되어야 하기 때문에 데이터 속도 특성은 높고 대부분 정형화된 데이터들이기 때문에 데이터 다양성 특성이 낮은 것으로 볼 수 있다. 헬스케어 서비스의 경우, 사람의 건강이 하루아침에 좋아지거나 나빠지지 않기 때문에 데이터 속도 특성은 낮고 데이터 다양성 특성은 보통으로 볼 수 있다. 이러한 이유로,  빅데이터는 가급적 실시간으로 처리하는 것이 좋다라고 했으나  헬스케어 서비스의 경우는 데이터 속도 특성을 고려하여 데이터 전송과 저장에 대한 기준 관리가 필요하다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/9.png'
  //  }
  //  ,
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 10,
  //    script: '헬스케어 기기와 데이터베이스 간 데이터 전송 기준 관리가 필요하다.기존 의료 서비스에서는 의사가 일으키는 이벤트가 대부분이었다. 이벤트를 통해 처방을 받을 수 있었고 치료를 할 수 있었다. 하지만 헬스케어 서비스는 사용자 이벤트가 자동으로 발생하는 경우가 대부분이다. 여기서 주의할 것이 자동으로 발생하는 정보를 어떻게 데이터베이스에 저장할 것인지 기준을 만드는 것이다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/10.png'
  //  }
  //  ,
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 2,
  //    script: '예를 들면, 헬스케어 정보를 제공하는 웨어러블 시계(Wearable watch)가 있다고 가정하자. 사용자의 헬스 정보가 웨어러블 시계에 의해 데이터베이스로 전송이 되어야 하는데 실시간으로 바로 전송을 할지, 아니면 일정 시간 단위로 전송을 할지 등을 결정할 필요가 있다. 해당 기준은 ICT 기기, 시스템 용량, 네트워크 등을 감안하여 결정해야 한다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/11.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 13,
  //    script: '또한 전송된 정보를 어떤 방법으로 저장할지도 기준을 마련해야 한다. 전송되는 정보를 100이라고 볼 때 무조건 100을 저장하는 것이 아니라, 매 시 정각에 저장할 정보, 일 단위 정보, 또는 특정 시각의 정보 등으로 100 중에서 골라서 저장하는 기준을 마련해야 한다. 왜냐하면, 너무나 방대한 정보가 전송되기 때문에 이러한 기준이 없는 경우 정보 효율성이 떨어질 수 있기 때문이다. 아래 그림은 헬스 정보 전송의 기준 예를 나타내고 있다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/12.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 14,
  //    script: '헬스케어 서비스의 빅데이터는 상상을 초월할 정도로 데이터의 양이 방대하다.  이러한 특성을 꼭 기억하면서 전송과 저장의 기준을 고려해야 할 것이다. 설계하는 서비스의 특징을 고려해서 필요한 부분만 취하는 것이 좋다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/13.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 15,
  //    script: '헬스케어 서비스까지 확대되지는 않았지만, 의료 서비스는 빅데이터를 적용한 서비스 중 가장 가시적인 효과를 나타내고 있는 서비스 중 하나다. 효과를 나타내는 가장 큰 이유는 의료 데이터는 매우 표준화되어 있기 때문이다. 또한 병원 내에서 활용하는 경우가 많아 효과를 극대화 할 수도 있다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/14.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 16,
  //    script: '의료 서비스뿐만 아니라 데이터의 표준화는 빅데이터의 성공 요소라 할 수 있다. 빅데이터를 위해서는 다양한 루트로 정보가 수집되어야 하는데 데이터 수집이나 저장 형태가 다를 경우 데이터를 집합으로 만들기 어렵기 때문이다. 최근에 개방형 헬스케어 플랫폼이 출시되고 있으나 비 표준 방식으로 호환성이 부족하여 확대되지 않고 있다. 개방형 헬스케어 플랫폼으로는 애플의 헬스킷(HealthKit), 구글의 구글핏(Google Fit), 삼성의 사미(SAMI) 등이 있다. 이러한 플랫폼은 각각의 기기를 통해 헬스정보가 수집되고 있지만 비 표준 방식이라 타 플랫폼과 호환성은 없다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/15.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 17,
  //    script: '이러한 이유로 정부에서는 비 표준 방식의 부족함을 개선하기 위해 국제표준 방식의 개방형 헬스케어 플랫폼을 구축 중이다. 아래 그림은 건강보험심사원에서 제시하고 있는 헬스케어 플랫폼을 나타낸 것이다. 군 건강관리, 피트니스, 스마트화장실 등의 서비스에서 각각의 응용프로그램을 통해 헬스 정보를 전송하고, 이를 기반으로 헬스케어 서비스를 제공하는 형태로 되어 있다 (그림5) . 해당 플랫폼을 직접적으로 사용하지 않는 외부의 헬스케어 서비스와도 연동될 수 있도록 헬스케어 플랫폼에서 데이터를 표준화 하고 있다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/16.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 8,
  //    script: '빅데이터 분석은 정형화된 데이터를 분석하는 방법과 비정형화된 데이터를 분석하는 방법이 있다. 정형화된 데이터는 미리 정해둔 기준에 맞추어 분석을 하면 된다. 하지만, 비정형화된 데이터는 바로 분석하기가 어렵기 때문에 비정형 데이터를 분석하는 다양한 방법을 만들어야 할 것이다. 그렇지만 다행히도 헬스케어 서비스는 위에서 본 3V 특성을 고려할 때, 비정형 데이터는 그렇게 많지 않을 것이다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/17.png'
  //  },
  //  {
  //    isPlay: false,
  //    time: '00:56:13',
  //    id: 19,
  //    script: '그림6은 IBM에서  제시하는 분석 방법을 나타내고 있다. 그림을 살펴보면, 데이터 소스를 받아들여 컨텐츠를 분석하고, 이중에서 바로 분석과 처리가 가능한 정형 데이터는 바로 분석을 하여 결과를 도출한다. 컨텐츠 분석 때 비정형 데이터는 따로 분류하여 다양한 형태로 분석을 할 수 있도록 해주고 있다.',
  //    bookmark: false,
  //    image: '../img/record-detail-resource/18.png'
  //  }
  //
  //];


  //$scope.scrollMe = function(anchor) {
  //  $location.hash(anchor);
  //  var handle = $ionicScrollDelegate.$getByHandle('scrapContent');
  //  console.log(anchor);
  //
  //  handle.anchorScroll(true);
  //};
  //
  //$scope.slideTo = function(location) {
  //  location = $location.hash(location);
  //  console.log('scrolling to: ' + location);
  //  $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#" + location);
  //
  //};
  //검색/*--------------------------------------------------------------------------------------*/

  $scope.addRow = function () {
    $scope.items.push({'time': $scope.time, 'script': $scope.script});
    $scope.time = '';
    $scope.script = '';
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

});

/*--------------------------------------------------------------------------------------*/

