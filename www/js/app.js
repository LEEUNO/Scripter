
var app = angular.module('TypistApp', ['ionic', 'TypistApp.controllers', 'jett.ionic.scroll.sista', 'ngCordova'])
  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }


      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        $cordovaStatusbar.styleDefault();
      }
    });

  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.scrolling.jsScrolling(true);

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html',
            controller: 'MainController'
          }
        }
      })
      .state('app.recordDetail', {
        url: '/recordContents',
        views: {
          'menuContent': {
            templateUrl: 'templates/record-detail.html',
            controller: 'recordListController'
          }
        }
      })
      .state('app.record-page', {
        url: '/record-page',
        views: {
          'menuContent': {
            templateUrl: 'templates/directives/record-page.html',
            controller: 'recordPageController'
          }
        }
      })
      .state('app.record-detail', {
        url: '/record-detail',
        views: {
          'menuContent': {
            templateUrl: 'templates/record-detail.html',
            controller: 'recordDetailController'
          }
        }
      })
      .state('app.scrap-contents', {
        url: '/scrap-contents',
        views: {
          'menuContent': {
            templateUrl: 'templates/scrap-detail.html',
            controller: 'scrapDetailController'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/browse');
  }).filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>');

      return $sce.trustAsHtml(text);
    }
  });
//
//angular.module('TypistApp.controllers', [])
//
//  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
//
//
//    // With the new view caching in Ionic, Controllers are only called
//    // when they are recreated or on app start, instead of every page change.
//    // To listen for when this page is active (for example, to refresh data),
//    // listen for the $ionicView.enter event:
//    //$scope.$on('$ionicView.enter', function(e) {
//    //});
//
//    // Form data for the login modal
//    $scope.loginData = {};
//
//    // Create the login modal that we will use later
//    $ionicModal.fromTemplateUrl('templates/login.html', {
//      scope: $scope
//    }).then(function (modal) {
//      $scope.modal = modal;
//    });
//
//    // Triggered in the login modal to close it
//    $scope.closeLogin = function () {
//      $scope.modal.hide();
//    };
//
//    // Open the login modal
//    $scope.login = function () {
//      $scope.modal.show();
//    };
//
//    // Perform the login action when the user submits the login form
//    $scope.doLogin = function () {
//      console.log('Doing login', $scope.loginData);
//
//      // Simulate a login delay. Remove this and replace with your login
//      // code if using a login system
//      $timeout(function () {
//        $scope.closeLogin();
//      }, 1000);
//    };
//  });


app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicScrollDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.navTitle = '';


  $scope.pageTitle = "Record File";
  $scope.selected = 0;

  if ($scope.dev_width < 770) {
    $scope.navTitle = '<img style="margin-top: 8px; width:87px; height: 26px;"  class="title-image" src="img/title-logo.png" /></div>';
  } else {
    $scope.navTitle = '';
  }

  $scope.recordIcon = '<i class="icon-record"></i>';
  $scope.scrapIcon = '<i class="icon-scrap"></i>';
  $scope.memoryIcon = '<i class="icon-memory"></i>';
  console.log("MainController");


  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  if ($scope.dev_width < 770) {
    $scope.pageTitle = "";
  }

  $scope.selectTabWithIndex = function (index) {
    $scope.selected = index;
    $ionicTabsDelegate.select(index);

    if ($scope.dev_width < 770) {
      return;
    } else {
      if ($scope.selected == 0) {
        $scope.pageTitle = "Record File";
        $scope.selected = 0;
      } else if ($scope.selected == 1) {
        $scope.pageTitle = "Scrap Book";
        $scope.selected = 1;
      } else {
        $scope.pageTitle = "Memory";
        $scope.selected = 2;
      }
      console.log($scope.selected);
    }

  };

  $scope.navStyle = {
    'color': '#e4ff2b',
    'background-color': '#242526'
  };

  $scope.selectItem = function (index) {
    $scope.selected = index;


    if ($scope.dev_width > 770) {
      return;
    } else {
      if ($scope.selected == 0) {
        $scope.pageTitle = "Record File";
      } else if ($scope.selected == 1) {
        $scope.pageTitle = "Scrap Book";
      } else {
        $scope.pageTitle = "Memory";
      }
      console.log($scope.selected);
    }
  };
  $scope.scrollEvent = function () {
    $scope.scrollamount = $ionicScrollDelegate.$getByHandle('scrollHandle').getScrollPosition().top;
    if ($scope.scrollamount > 180) {
      $scope.$apply(function () {
        $scope.hideNavigation = true;
      });
    } else {
      $scope.$apply(function () {
        $scope.hideNavigation = false;
      });
    }
  };

});

app.controller('recordController', function ($scope) {
  console.log("recordController");


});

app.directive("detailPreviewImages", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/detailPreviewImages.html",
    controller: "detailPreviewImagesController"
  };
});
app.controller('detailPreviewImagesController', ['$scope', '$window', '$ionicSlideBoxDelegate', function ($scope, $window) {
  $scope.dev_width = $window.innerWidth;


  //
  //$scope.lockSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(false);
  //};
  //



  /*------------------------------
   Album Cover Slider
   --------------------------------*/
//start added by Chase
  var a = document.getElementsByTagName("span");
  var cfImg = document.getElementsByClassName("coverflow__image");

  var scaleI = 0;
  for (scaleI; scaleI < a.length; scaleI++) {
    if (scaleI === 3) {
      continue;
    } else {
      a[scaleI].style.cursor = "default";
      a[scaleI].addEventListener("click", prevDef);
    }
  }

  function prevDef(e) {
    e.preventDefault();
  }

  function forScale(coverflowPos) {
    for (scaleI = 0; scaleI < a.length; scaleI++) {
      a[scaleI].style.cursor = "default";
      a[scaleI].addEventListener("click", prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
      if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
        cfImg[scaleI].parentElement.style.cursor = "pointer";
        cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
      }
    }
  }
//end added by Chase

  function setupCoverflow(coverflowContainer) {
    var coverflowContainers;

    if (typeof coverflowContainer !== "undefined") {
      if (Array.isArray(coverflowContainer)) {
        coverflowContainers = coverflowContainer;
      } else {
        coverflowContainers = [coverflowContainer];
      }
    } else {
      coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
    }

    coverflowContainers.forEach(function(containerElement) {
      var coverflow = {};
      var prevArrows, nextArrows;

      //capture coverflow elements
      coverflow.container = containerElement;
      coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
      coverflow.position = Math.floor(1);

      //set indicies on images
      coverflow.images.forEach(function(coverflowImage, i) {
        coverflowImage.dataset.coverflowIndex = i + 1;
      });

      //set initial position
      coverflow.container.dataset.coverflowPosition = coverflow.position;

      //get prev/next arrows
      prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
      nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

      //add event handlers
      function setPrevImage() {
        coverflow.position = Math.max(1, coverflow.position - 1);
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the functin forScale added
        forScale(coverflow.position);
      }

      function setNextImage() {
        coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the function Chase added
        forScale(coverflow.position);
      }

      function jumpToImage(evt) {
        coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //start added by Chase
        setTimeout(function() {
          forScale(coverflow.position);
        }, 1);
        //end added by Chase
      }

      function onKeyPress(evt) {
        switch (evt.which) {
          case 37: //left arrow
            setPrevImage();
            break;
          case 39: //right arrow
            setNextImage();
            break;
        }
      }
      prevArrows.forEach(function(prevArrow) {
        prevArrow.addEventListener('click', setPrevImage);
      });
      nextArrows.forEach(function(nextArrow) {
        nextArrow.addEventListener('click', setNextImage);
      });
      coverflow.images.forEach(function(image) {
        image.addEventListener('click', jumpToImage);
      });
      window.addEventListener('keyup', onKeyPress);
    });
  }

  setupCoverflow();


  $scope.previewItems = [
    {isPlay: false,
      time: '00:56:13',
      id: 'detail_image_1',
      script: '대부분의 서비스에서는 소프트웨어를 편의성이나 기능 증대에 활용하는 경우가 대부분이라 서비스 자체의 변화는 크지 않습니다. 하지만 질병의 치료와 예방을 함께 생각하는 헬스케어 서비스의경우 소프트웨어가 차지하는 비중은 매우 높습니다. 질병의 발생 여부에 따라 환자의 치료나 상태 관리를 위해 병원을 방문해야 하는 것이 일반적이지만, ICT를 접목 시키면 직접적인 치료는 아니더라도 환자의 상태는 항시 관리할 수 있기 때문입니다.',
      bookmark: true,
      image: 'img/record-detail-resource/1.png'
    },
    {isPlay: false,
      time: '00:56:13',
      id: 'detail_image_2',
      script: '헬스케어 서비스는 기존 의료 서비스에 ICT 서비스를 접목한 서비스입니다. 그림1은 헬스케어 서비스의 개념을 나타낸 것입니다. 기존의 의료 서비스는 환자가 발생하면 병원과 약국에서 대면 의료를 통한 서비스를 하는 것이 일반적이었습니다. 하지만 헬스케어 서비스로 넘어오면서 환자는 물론이고 질병이 발생하지 않은 일반인 대상으로 다양한 서비스를 제공하고 있습니다. 더구나 ICT 기기의 발달로 인해 원격 진료라는 새로운 서비스도 나타났습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/2.png'
    },
    {isPlay: false,
      time: '00:56:13',
      id: 'detail_image_3',
      script: '기존 의료 서비스는 반드시 의료 기관을 통해 서비스를 받을 수 있었지만, 헬스케어 서비스는 헬스케어 기기, PC, 모바일 기기, 운동시설 등 다양한 기기의 정보를 통해 추가적인 서비스를 받을 수 있습니다. 병원에서 전달하는 정보는 전자의무기록처방전달시스템 의료영상저장전송시스템등이 있으며, 다양한 기기들이 전달하는 정보는 국제표준 전자건강기록가 있습니다. 전송된 정보들은 각각의 표준화된 규격에 맞춰 빅데이터로 관리되며, 중요 의료, 건강 정보를 분석하여 헬스케어 서비스를 제공하고 있습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/3.png'
    },
    {isPlay: false,
      time: '00:56:13',
      id: 'detail_image_4',
      script: '헬스케어 서비스는 발전하는 IoT 개념을 적용하는 서비스 중에서 빅데이터 분석에 의해 개인의 특성을 파악하고 맞춤 서비스를 할 수 있는 대표적인 서비스라고 할 수 있습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/4.png'
    },
    {isPlay: false,
      time: '00:56:13',
      id: 'detail_image_5',
      script: '사용자의 일상생활 정보인 헬스 정보부터 병원의 진료 정보, 그리고 전문 의료 기기를 통한 의료 정보까지 거의 모든 정보를 대상으로 한다. 병원의 진료 정보나 의료 기기를 통한 의료 정보는 기존 의료 서비스에서도 관리되던 정보라 양이 많지는 않다. 하지만 헬스 정보는 사용자의 24시간을 대상으로 하기 때문에 너무나 방대한 양이 수집된다. 따라서 모든 정보가 저장되는 기존 의료 서비스와는 다르게 헬스 정보는 기준에 따라 라이프 사이클 관리가 필요하다.',
      bookmark: false,
      image: 'img/record-detail-resource/5.png'
    }

  ];


}]);

app.directive("footerSection", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/footer/footer-section.html"
  };
});

app.directive("mainSection", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/main.html"
  };
});

app.directive("memory", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/memory.html"
  };
});

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
app.controller('recordDetailController', function ($scope, $window, $ionicModal, $location, $timeout, $interval, $ionicSlideBoxDelegate, $ionicScrollDelegate, $state, $filter) {


  // parallax header
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(), slowScroll = scroll / 2;
    $('#header').css({transform: "translateY(" + slowScroll + "px)"});
  });

// toplink
  $('#top').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
      $('#top').fadeIn(500);
    }
    else {
      $('#top').fadeOut(500);
    }
  });


// sticky nav
  var nav = $('#nav');
  var content = $('#content');
  var navHomeY = nav.offset().top;
  var isFixed = false;
  var $w = $(window);

  $w.scroll(function () {
    var scrollTop = $w.scrollTop();
    var shouldBeFixed = scrollTop > navHomeY;
    if (shouldBeFixed && !isFixed) {
      nav.css({
        position: 'fixed',
        width: '100%',
        top: 0,
        opacity: 0.9
      });

      content.css({
        paddingTop: '80px'
      });

      isFixed = true;
    }
    else if (!shouldBeFixed && isFixed) {
      nav.css({
        position: 'relative',
        width: '100%',
        opacity: 1
      });

      content.css({
        paddingTop: '0'
      });

      isFixed = false;
    }
  });

  var fileURL = "";
  var scriptArr = [];

  //$scope.loadMedia = function() {
  //
  //  wavesurfer.load('src/audios/listening to the radio.mp3');
  //
  //};
  $scope.value = 0;
  $scope.second = 0;
  $scope.minute = 0;
  $scope.hour = 0;
  $scope.ms = 10;


  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#fc5656',
    height: 64
  });
  wavesurfer.load('audios/Sequence 01.mp3');
  $scope.audioLength = wavesurfer.getCurrentTime();
  $scope.audioTime = wavesurfer.getDuration();


  function countdown() {
    $scope.value++;
    $scope.timeout = $timeout(countdown, $scope.ms);
    if ($scope.value === 100) {
      $scope.value = 0;
      $scope.second++;
    }
    if ($scope.second === 60) {
      $scope.second = 0;
      $scope.minute++;
    }
    if ($scope.minute === 60) {
      $scope.minute = 0;
      $scope.hour++;
    }
  }

  $scope.startRecording = function () {
    wavesurfer.playPause();
  };

  var play_check = 0;

  $scope.stopCursor = function () {
    wavesurfer.stop();
    $scope.value = 0;
    $scope.second = 0;
    $scope.minute = 0;
    $scope.hour = 0;
    $timeout.cancel($scope.timeout);
  };

  //$scope.pauseCursor = function () {
  //  if (play_check == 0) {
  //    $(this).attr('class', 'button icon ion-pause');
  //    wavesurfer.play();
  //    play_check = 1;
  //    countdown();
  //  } else if (play_check == 1) {
  //    $(this).attr('class', 'button icon ion-play');
  //    wavesurfer.pause();
  //    play_check = 0;
  //    $timeout.cancel($scope.timeout);
  //  }
  //};


  var play_check = 0;

  $scope.stopCursor = function () {
    wavesurfer.stop();
  };

  $scope.pauseCursor = function () {
    console.log("ddfsfasdfasdf");
    if (play_check == 0) {
      wavesurfer.play();
      $scope.active = true;
      play_check = 1;
      countdown();
    } else if (play_check == 1) {
      $timeout.cancel($scope.timeout);
      wavesurfer.pause();
      $scope.active = false;
      play_check = 0;
    }
  };


  $scope.scrollMe = function (anchor) {
    $location.hash(anchor);

    $ionicScrollDelegate.anchorScroll();
  };

  $scope.playCheck = function (item) {

  };


  /*-------------------------------수정한 부분------------------------------------------------*/
  $scope.scriptClcik = function (event) {
    var targetId = event.target.id;
    var times;
    switch (targetId) {
      case '0' :
        times = 0; //시간들어가면됨(초 단위)
        $scope.value = 0;
        $scope.second = 0;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '1' :
        times = 1;
        $scope.value = 0;
        $scope.second = 3;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '2' :
        times = 2;
        $scope.value = 0;
        $scope.second = 5;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '3' :
        times = 3;
        $scope.value = 0;
        $scope.second = 7;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '4' :
        times = 4;
        $scope.value = 0;
        $scope.second = 9;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '5' :
        times = 5;
        $scope.value = 0;
        $scope.second = 11;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '6' :
        times = 6;
        $scope.value = 0;
        $scope.second = 20;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '7' :
        times = 7;
        $scope.value = 0;
        $scope.second = 26;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '8' :
        times = 8;
        $scope.value = 0;
        $scope.second = 30;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '9' :
        times = 9;
        $scope.value = 0;
        $scope.second = 32;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '10' :
        times = 10;
        $scope.value = 0;
        $scope.second = 46;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '11' :
        times = 11;
        $scope.value = 0;
        $scope.second = 52;
        $scope.minute = 0;
        $scope.hour = 0;
        break;
      case '12' :
        times = 12;
        $scope.value = 0;
        $scope.second = 0;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '13' :
        times = 13;
        $scope.value = 0;
        $scope.second = 8;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '14' :
        times = 14;
        $scope.value = 0;
        $scope.second = 12;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '15' :
        times = 15;
        $scope.value = 0;
        $scope.second = 18;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '16' :
        times = 16;
        $scope.value = 0;
        $scope.second = 25;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '17' :
        times = 17;
        $scope.value = 0;
        $scope.second = 35;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '18' :
        times = 18;
        $scope.value = 0;
        $scope.second = 45;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
      case '19' :
        times = 19;
        $scope.value = 0;
        $scope.second = 54;
        $scope.minute = 1;
        $scope.hour = 0;
        break;
    }
    wavesurfer.seekTo(times / 19/*초단위*/);
    wavesurfer.play();
    if (play_check == 0) {
      play_check = 1;
      $scope.active = true;
      countdown();
    }


  };


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

  $scope.dev_width = $window.innerWidth;

  //alert($state.params.param_no);

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $scope.deleteRecord = function () {
    console.log("ggssss");
    $.ajax({
      url: 'http://52.69.199.91:3000/deleteRecord',
      type: 'GET',
      data: {recordNo: $state.params.param_no},
      success: function (result) {
        if (result == "deleteOK") {
          $state.go('app.browse', null, {reload: true, inherit: false});
        }
      }
    });
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


  $scope.resourceitems = [
    {
      isPlay: false,
      time: '00:56:13',
      id: 1,
      script: '대부분의 서비스에서는 소프트웨어를 편의성이나 기능 증대에 활용하는 경우가 대부분이라 서비스 자체의 변화는 크지 않습니다. 하지만 질병의 치료와 예방을 함께 생각하는 헬스케어 서비스의경우 소프트웨어가 차지하는 비중은 매우 높습니다. 질병의 발생 여부에 따라 환자의 치료나 상태 관리를 위해 병원을 방문해야 하는 것이 일반적이지만, ICT를 접목 시키면 직접적인 치료는 아니더라도 환자의 상태는 항시 관리할 수 있기 때문입니다.',
      bookmark: true,
      image: 'img/record-detail-resource/1.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 2,
      script: '헬스케어 서비스는 기존 의료 서비스에 ICT 서비스를 접목한 서비스입니다. 그림1은 헬스케어 서비스의 개념을 나타낸 것입니다. 기존의 의료 서비스는 환자가 발생하면 병원과 약국에서 대면 의료를 통한 서비스를 하는 것이 일반적이었습니다. 하지만 헬스케어 서비스로 넘어오면서 환자는 물론이고 질병이 발생하지 않은 일반인 대상으로 다양한 서비스를 제공하고 있습니다. 더구나 ICT 기기의 발달로 인해 원격 진료라는 새로운 서비스도 나타났습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/2.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 3,
      script: '기존 의료 서비스는 반드시 의료 기관을 통해 서비스를 받을 수 있었지만, 헬스케어 서비스는 헬스케어 기기, PC, 모바일 기기, 운동시설 등 다양한 기기의 정보를 통해 추가적인 서비스를 받을 수 있습니다. 병원에서 전달하는 정보는 전자의무기록처방전달시스템 의료영상저장전송시스템등이 있으며, 다양한 기기들이 전달하는 정보는 국제표준 전자건강기록가 있습니다. 전송된 정보들은 각각의 표준화된 규격에 맞춰 빅데이터로 관리되며, 중요 의료, 건강 정보를 분석하여 헬스케어 서비스를 제공하고 있습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/3.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 4,
      script: '헬스케어 서비스는 발전하는 IoT 개념을 적용하는 서비스 중에서 빅데이터 분석에 의해 개인의 특성을 파악하고 맞춤 서비스를 할 수 있는 대표적인 서비스라고 할 수 있습니다.',
      bookmark: false,
      image: 'img/record-detail-resource/4.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 5,
      script: '사용자의 일상생활 정보인 헬스 정보부터 병원의 진료 정보, 그리고 전문 의료 기기를 통한 의료 정보까지 거의 모든 정보를 대상으로 한다. 병원의 진료 정보나 의료 기기를 통한 의료 정보는 기존 의료 서비스에서도 관리되던 정보라 양이 많지는 않다. 하지만 헬스 정보는 사용자의 24시간을 대상으로 하기 때문에 너무나 방대한 양이 수집된다. 따라서 모든 정보가 저장되는 기존 의료 서비스와는 다르게 헬스 정보는 기준에 따라 라이프 사이클 관리가 필요하다.',
      bookmark: false,
      image: 'img/record-detail-resource/5.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 6,
      script: '방대한 헬스 정보는 데이터 라이프 사이클 관리가 필요하다. 앞에서 말한 것처럼 헬스 정보는 24시간 관리되는 정보이기 때문에, 사람 수와 수집 되는 방법에 따라 기하급수적으로 늘어날 수 있다. 따라서 수작업으로는 도저히 관리가 되기 어렵고, 일정한 기준을 마련하여 데이터 라이프 사이클(Data Life Cycle)을 관리하는 것이 중요하다. 이 때, 사용자의 건강 상태, 질병 이력 등을 고려하여 나이, 성별, 질병과 같은 항목에 따라 다양하게 기준이 마련될 수 있도록 설계하는 것이 좋다.',
      bookmark: false,
      image: 'img/record-detail-resource/6.png'
    }
    ,
    {
      isPlay: false,
      time: '00:56:13',
      id: 7,
      script: '그림2는 헬스케어 서비스의 컨셉추얼 아키텍처(Conceptual Architecture)의 예를 나타내고 있다. 기존에는 병원과 의사들이 환자에게서 정보를 얻어 데이터베이스에 직접 저장한 정보 밖에 없었다. 하지만, 헬스케어 서비스는 환자나 일반인이 생성하는 정보가 추가되었다.환자나 일반인은 서드파트 앱이나 헬스 기기를 통해 다양한 정보를 생성하고 이러한 정보는 헬스, 헬스 교육, 패턴, 그리고 주변 사람들의 헬스정보까지 나타낼 수 있고, 병원이나 건강관리센터에서는 EMR, OCS, PACS 등을 통해 환자, 치료, 의료, 예방 등의 정보를 나타낼 수 있다. 이러한 정보는 헬스케어 서비스 플랫폼에서 빅데이터 분석을 통해 서비스 사용자에게 필요한 맞춤 헬스, 질병, 치료 정보 등으로 제공된다.',
      bookmark: false,
      image: 'img/record-detail-resource/7.png'
    }
    ,
    {
      isPlay: false,
      time: '00:56:13',
      id: 8,
      script: '빅데이터를 정의할 때는 3V가 핵심으로 알려져 있다. IoT 등을 활용하여 3V의 특성을 살린 데이터를 만들어 전송하고 수집된 데이터를 빅데이터 분석을 통해 의미 있는 데이터로 구성할 수 있다.',
      bookmark: false,
      image: 'img/record-detail-resource/8.png'
    }
    ,
    {
      isPlay: false,
      time: '00:56:13',
      id: 9,
      script: '금융 서비스는 데이터가  실시간으로 파악이 되어야 하기 때문에 데이터 속도 특성은 높고 대부분 정형화된 데이터들이기 때문에 데이터 다양성 특성이 낮은 것으로 볼 수 있다. 헬스케어 서비스의 경우, 사람의 건강이 하루아침에 좋아지거나 나빠지지 않기 때문에 데이터 속도 특성은 낮고 데이터 다양성 특성은 보통으로 볼 수 있다. 이러한 이유로,  빅데이터는 가급적 실시간으로 처리하는 것이 좋다라고 했으나  헬스케어 서비스의 경우는 데이터 속도 특성을 고려하여 데이터 전송과 저장에 대한 기준 관리가 필요하다.',
      bookmark: false,
      image: 'img/record-detail-resource/9.png'
    }
    ,
    {
      isPlay: false,
      time: '00:56:13',
      id: 10,
      script: '헬스케어 기기와 데이터베이스 간 데이터 전송 기준 관리가 필요하다.기존 의료 서비스에서는 의사가 일으키는 이벤트가 대부분이었다. 이벤트를 통해 처방을 받을 수 있었고 치료를 할 수 있었다. 하지만 헬스케어 서비스는 사용자 이벤트가 자동으로 발생하는 경우가 대부분이다. 여기서 주의할 것이 자동으로 발생하는 정보를 어떻게 데이터베이스에 저장할 것인지 기준을 만드는 것이다.',
      bookmark: false,
      image: 'img/record-detail-resource/10.png'
    }
    ,
    {
      isPlay: false,
      time: '00:56:13',
      id: 2,
      script: '예를 들면, 헬스케어 정보를 제공하는 웨어러블 시계(Wearable watch)가 있다고 가정하자. 사용자의 헬스 정보가 웨어러블 시계에 의해 데이터베이스로 전송이 되어야 하는데 실시간으로 바로 전송을 할지, 아니면 일정 시간 단위로 전송을 할지 등을 결정할 필요가 있다. 해당 기준은 ICT 기기, 시스템 용량, 네트워크 등을 감안하여 결정해야 한다.',
      bookmark: false,
      image: 'img/record-detail-resource/11.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 13,
      script: '또한 전송된 정보를 어떤 방법으로 저장할지도 기준을 마련해야 한다. 전송되는 정보를 100이라고 볼 때 무조건 100을 저장하는 것이 아니라, 매 시 정각에 저장할 정보, 일 단위 정보, 또는 특정 시각의 정보 등으로 100 중에서 골라서 저장하는 기준을 마련해야 한다. 왜냐하면, 너무나 방대한 정보가 전송되기 때문에 이러한 기준이 없는 경우 정보 효율성이 떨어질 수 있기 때문이다. 아래 그림은 헬스 정보 전송의 기준 예를 나타내고 있다.',
      bookmark: false,
      image: 'img/record-detail-resource/12.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 14,
      script: '헬스케어 서비스의 빅데이터는 상상을 초월할 정도로 데이터의 양이 방대하다.  이러한 특성을 꼭 기억하면서 전송과 저장의 기준을 고려해야 할 것이다. 설계하는 서비스의 특징을 고려해서 필요한 부분만 취하는 것이 좋다.',
      bookmark: false,
      image: 'img/record-detail-resource/13.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 15,
      script: '헬스케어 서비스까지 확대되지는 않았지만, 의료 서비스는 빅데이터를 적용한 서비스 중 가장 가시적인 효과를 나타내고 있는 서비스 중 하나다. 효과를 나타내는 가장 큰 이유는 의료 데이터는 매우 표준화되어 있기 때문이다. 또한 병원 내에서 활용하는 경우가 많아 효과를 극대화 할 수도 있다.',
      bookmark: false,
      image: 'img/record-detail-resource/14.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 16,
      script: '의료 서비스뿐만 아니라 데이터의 표준화는 빅데이터의 성공 요소라 할 수 있다. 빅데이터를 위해서는 다양한 루트로 정보가 수집되어야 하는데 데이터 수집이나 저장 형태가 다를 경우 데이터를 집합으로 만들기 어렵기 때문이다. 최근에 개방형 헬스케어 플랫폼이 출시되고 있으나 비 표준 방식으로 호환성이 부족하여 확대되지 않고 있다. 개방형 헬스케어 플랫폼으로는 애플의 헬스킷(HealthKit), 구글의 구글핏(Google Fit), 삼성의 사미(SAMI) 등이 있다. 이러한 플랫폼은 각각의 기기를 통해 헬스정보가 수집되고 있지만 비 표준 방식이라 타 플랫폼과 호환성은 없다.',
      bookmark: false,
      image: 'img/record-detail-resource/15.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 17,
      script: '이러한 이유로 정부에서는 비 표준 방식의 부족함을 개선하기 위해 국제표준 방식의 개방형 헬스케어 플랫폼을 구축 중이다. 아래 그림은 건강보험심사원에서 제시하고 있는 헬스케어 플랫폼을 나타낸 것이다. 군 건강관리, 피트니스, 스마트화장실 등의 서비스에서 각각의 응용프로그램을 통해 헬스 정보를 전송하고, 이를 기반으로 헬스케어 서비스를 제공하는 형태로 되어 있다 (그림5) . 해당 플랫폼을 직접적으로 사용하지 않는 외부의 헬스케어 서비스와도 연동될 수 있도록 헬스케어 플랫폼에서 데이터를 표준화 하고 있다.',
      bookmark: false,
      image: 'img/record-detail-resource/16.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 8,
      script: '빅데이터 분석은 정형화된 데이터를 분석하는 방법과 비정형화된 데이터를 분석하는 방법이 있다. 정형화된 데이터는 미리 정해둔 기준에 맞추어 분석을 하면 된다. 하지만, 비정형화된 데이터는 바로 분석하기가 어렵기 때문에 비정형 데이터를 분석하는 다양한 방법을 만들어야 할 것이다. 그렇지만 다행히도 헬스케어 서비스는 위에서 본 3V 특성을 고려할 때, 비정형 데이터는 그렇게 많지 않을 것이다.',
      bookmark: false,
      image: 'img/record-detail-resource/17.png'
    },
    {
      isPlay: false,
      time: '00:56:13',
      id: 19,
      script: '그림6은 IBM에서  제시하는 분석 방법을 나타내고 있다. 그림을 살펴보면, 데이터 소스를 받아들여 컨텐츠를 분석하고, 이중에서 바로 분석과 처리가 가능한 정형 데이터는 바로 분석을 하여 결과를 도출한다. 컨텐츠 분석 때 비정형 데이터는 따로 분류하여 다양한 형태로 분석을 할 수 있도록 해주고 있다.',
      bookmark: false,
      image: 'img/record-detail-resource/18.png'
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

  $scope.filteredArray = [];
  $scope.$watchCollection('array', function (array) {
    $scope.filteredArray = $filter('filter')(array, $scope.selectedTag);
  });
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


app.directive("recordListItem", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/record-list-item.html",
    controller: "recordListItemController"
  };
});

app.controller('recordListItemController', ['$scope', '$window', function ($scope, $window) {
  $scope.dev_width = $window.innerWidth;

}]);





app.directive("recordList", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
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

  //
  //
  //  var repeatValue = '';
  //  console.log("gssa");
  //  $.ajax({
  //          url:'http://52.69.199.91:3000/indexInfo',
  //          type:'GET',
  //          success:function(result){
  //            repeatValue = result[0].record_no;
  //             for(var i = parseInt(repeatValue); i > 0; i--){
  //                 $.ajax({
  //                        url:'http://52.69.199.91:3000/recordList',
  //                        data:{index:i},
  //                        type:'GET',
  //                        success:function(result){
  //                          $('.card').on("click", function(){
  //                            $state.go('app.record-detail',{param_no:$(this).attr('id')});
  //                          });
  //                          switch(result[0][1].length){
  //                            case 0:
  //                                 $('.record-items').append(
  //                                 "<div class='card' id='"+result[0][0][0].record_no + "'>" +
  //                                  //"<div class='card' ng-click='viewRecordDetail(" + result[0][0][0].record_no + ")'>" +
  //                                  //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
  //                                  //"<a href='#/app/record-detail'>" +
  //                                    "<div class='record-item'>" +
  //                                "<div class='background-filter'></div>" +
  //                                //"<img src='/img/background-filter.png' alt='#'>" +
  //                                      "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
  //                                      "<div class='content-wrap'" +
  //                                           "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
  //                                        "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
  //                                          "<p class='date'> " + result[0][0][0].date + " </p>" +
  //                                          "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
  //                                          "<div class='des-section'>" +
  //                                          "<p class='description'> " + result[0][0][0].description + " </p>" +
  //                                          "</div>" +
  //                                        "</div>" +
  //                                        "<div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
  //                                        "<div class='noti'> images " + result[1][0].count + "</div>"+
  //                                        "<div class='noti'> videos " + result[1][1].count + "</div>" +
  //                                          "<div class='time'> " + result[0][0][0].time + "</div>"+
  //                                        "</div>" +
  //                                      "</div>" +
  //                                    "</div>" +
  //                                  "</a>" +
  //                                "</div>"
  //                              );
  //                            break;
  //                            case 1:
  //                                  $('.record-items').append(
  //                                  "<div class='card' id='"+result[0][0][0].record_no + "'>" +
  //                                    //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
  //                                    //"<a href='#/app/record-detail'>" +
  //
  //                                      "<div class='record-item'>" +
  //                                        //"<img src='" + result[0][0][0].image_url + "' alt='#'>" +
  //                                  "<div class='background-filter'></div>" +
  //                                        "<div class='content-wrap'" +
  //                                             "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
  //                                          "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
  //
  //                                            "<p class='date'> " + result[0][0][0].date + " </p>" +
  //                                            "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
  //                                            "<div class='des-section'>" +
  //                                            "<p class='description'> " + result[0][0][0].description + " </p>" +
  //                                            "</div>" +
  //                                          "</div>" +
  //                                          "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
  //                                          "<span>"+result[0][1][0].tag+"</span></label>"+
  //                                          "<div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
  //                                          "<div class='noti'> images " + result[1][0].count + "</div>"+
  //                                          "<div class='noti'> videos " + result[1][1].count + "</div>" +
  //                                            "<div class='time'> " + result[0][0][0].time + "</div>"+
  //                                          "</div>" +
  //                                        "</div>" +
  //                                      "</div>" +
  //                                    "</a>" +
  //                                  "</div>"
  //                                );
  //                            break;
  //                            case 2:
  //                                  $('.record-items').append(
  //                                  "<div class='card' id='"+result[0][0][0].record_no + "'>" +
  //                                    //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
  //                                    //"<a href='#/app/record-detail'>" +
  //                                      "<div class='record-item'>" +
  //                                  "<div class='background-filter'></div>" +
  //                                        "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
  //                                        "<div class='content-wrap'" +
  //                                             "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
  //                                          "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
  //                                            "<p class='date'> " + result[0][0][0].date + " </p>" +
  //                                            "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
  //                                            "<div class='des-section'>" +
  //                                            "<p class='description'> " + result[0][0][0].description + " </p>" +
  //                                            "</div>" +
  //                                          "</div>" +
  //                                          "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
  //                                          "<span>"+result[0][1][0].tag+"</span>"+
  //                                          "<span>"+result[0][1][1].tag+"</span>"+
  //                                          "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
  //                                          "<div class='noti'> images " + result[1][0].count + "</div>"+
  //                                          "<div class='noti'> videos " + result[1][1].count + "</div>" +
  //                                            "<div class='time'> " + result[0][0][0].time + "</div>"+
  //                                          "</div>" +
  //                                        "</div>" +
  //                                      "</div>" +
  //                                    "</a>" +
  //                                  "</div>"
  //                                );
  //                            break;
  //                            case 3:
  //                                $('.record-items').append(
  //                                      "<div class='card' id='"+result[0][0][0].record_no + "'>" +
  //                                        //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
  //                                        //"<a href='#/app/record-detail'>" +
  //                                          "<div class='record-item'>" +
  //                                      "<div class='background-filter'></div>" +
  //                                            "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
  //                                            "<div class='content-wrap'" +
  //                                                 "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
  //                                              "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
  //                                                "<p class='date'> " + result[0][0][0].date + " </p>" +
  //                                                "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
  //                                                "<div class='des-section'>" +
  //                                                "<p class='description'> " + result[0][0][0].description + " </p>" +
  //                                                "</div>" +
  //                                              "</div>" +
  //                                              "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
  //                                              "<span>"+result[0][1][0].tag+"</span>"+
  //                                              "<span>"+result[0][1][1].tag+"</span>"+
  //                                              "<span>"+result[0][1][2].tag+"</span>"+
  //                                              "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
  //                                              "<div class='noti'> images " + result[1][0].count + "</div>"+
  //                                              "<div class='noti'> videos " + result[1][1].count + "</div>" +
  //                                                "<div class='time'> " + result[0][0][0].time + "</div>"+
  //                                              "</div>" +
  //                                            "</div>" +
  //                                          "</div>" +
  //                                        "</a>" +
  //                                      "</div>"
  //                                    );
  //                            break;
  //                            case 4:
  //                                  $('.record-items').append(
  //                                            "<div class='card' id='"+result[0][0][0].record_no + "'>" +
  //                                              //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
  //                                              //"<a href='#/app/record-detail'>" +
  //                                                "<div class='record-item'>" +
  //                                            "<div class='background-filter'></div>" +
  //                                                  "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
  //                                                  "<div class='content-wrap'" +
  //                                                       "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
  //                                                    "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
  //                                                      "<p class='date'> " + result[0][0][0].date + " </p>" +
  //                                                      "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
  //                                                      "<div class='des-section'>" +
  //                                                      "<p class='description'> " + result[0][0][0].description + " </p>" +
  //                                                      "</div>" +
  //                                                    "</div>" +
  //                                                    "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
  //                                                    "<span>"+result[0][1][0].tag+"</span>"+
  //                                                    "<span>"+result[0][1][1].tag+"</span>"+
  //                                                    "<span>"+result[0][1][2].tag+"</span>"+
  //                                                    "<span>"+result[0][1][3].tag+"</span>"+
  //                                                    "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
  //                                                    "<div class='noti'> images " + result[1][0].count + "</div>"+
  //                                                    "<div class='noti'> videos " + result[1][1].count + "</div>" +
  //                                                      "<div class='time'> " + result[0][0][0].time + "</div>"+
  //                                                    "</div>" +
  //                                                  "</div>" +
  //                                                "</div>" +
  //                                              "</a>" +
  //                                            "</div>"
  //                                          );
  //                            break;
  //                          }
  //                        }
  //                });
  //              }
  //
  //        }
  //  });

  <!--지우지말것-->




  $scope.items = [
    {
      title: '헬스케어 서비스를 위한 빅데이터 설계 포인트',
      Description: '시선추적 유저리서치 사례와 방법/기기등을 가지고 어떻게 활용했는지',
      date: 'Saterday, Feb 17 3:11 PM / TAEBACK',
      images: 'img/record_list/list_imag2.png',
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
      title: 'SK플래닛 커머스 서비스 UX 사례',
      Description: '시럽2.0 업데이트 과정에 대한 UX 프로세스 설명',
      date: 'Sunday, Jan 25 03:33 PM / INCHON',
      images: 'img/record_list/list_imag4.png',
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
      title: '인문학자들이 말하는 IoT ',
      Description: '홈 IOT에서 단순한 기기 연결이 아닌 집이라는 공간이 역사적으로 사람에게 미치는 영향과 관점',
      date: 'Sunday, Aug 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag1.png',
      resource: {
        images: 8,
        videos: 2
      },
      tags: [
        '거주공간',
        '문화',
        'IoT',
        'Home'
      ],
      time: '01:04:47'
    },
    {
      title: '의료 활용을 위한 ICT',
      Description: 'Medical UX에 기반한 연구 동향/주요 쟁점들',
      date: 'Sunday, Jan 25 11:51 AM / SEOUL',
      images: 'img/record_list/list_imag3.png',
      resource: {
        images: 5,
        videos: 1
      },
      tags: [
        'medical',
        '의료',
        'ICT'
      ],
      time: '00:46:04'
    },
    {
      title: '2016 네이버 스퀘어 UI',
      Description: '스퀘어 UI 레이아웃 연관된 정보 시각화 / 사용자경험 변화',
      date: 'Friday, Dec 13 01:57 PM / SEOUL',
      images: 'img/record_list/list_imag5.png',
      resource: {
        images: 6,
        videos: 3
      },
      tags: [
        '스퀘어UI',
        '정보시각화',
        '네이버'
      ],
      time: '00:53:31'
    },
    {
      title: 'GPU 기반 가속 딥 러닝',
      Description: '신경망구조와 딥러닝/머신러닝의 차이점과 GPU의 영향 기술 관련',
      date: 'Sunday, Dec 05 02:05 PM / SEOUL',
      images: 'img/record_list/list_imag6.png',
      resource: {
        images: 2,
        videos: 1
      },
      tags: [
        '딥러닝',
        '신경망구조',
        'GPU'
      ],
      time: '01:34:16'
    },
    {
      title: '삼성SDS 유전자 분석 솔루션 UX 혁신',
      Description: '유전자 분석 - UX 혁신 서비스 사례 발표',
      date: 'Sunday, Oct 16 04:25 PM / SEOUL',
      images: 'img/record_list/list_imag7.png',
      resource: {
        images: 4,
        videos: 1
      },
      tags: [
        '유전자분석',
        '삼성SDS',
        '뷰티'
      ],
      time: '00:44:21'
    },
    {
      title: '다중 사용자용 운영체제 FINE 플랫폼 소개',
      Description: '운영체제별 차이점과 다중 사용자와의 경험 연관성/Fine플랫폼',
      date: 'Saturday, Oct 03 01:56 PM / INCHON',
      images: 'img/record_list/list_imag8.png',
      resource: {
        images: 2,
        videos: 3
      },
      tags: [
        '운영체제',
        '다중사용자',
        'FINE'
      ],
      time: '01:23:01'
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
    $scope.items.push({'title': $scope.title, 'Description': $scope.Description, 'date': $scope.date, 'tag':$scope.tag});
    $scope.title = '';
    $scope.Description = '';
    $scope.date = '';
    $scope.tag = '';
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




////app.directive("recordPage", function () {
////  return {
////    restrict: "E",
////    scope: {
////      post: "="
////    },
////    templateUrl: "templates/directives/record-page.html",
////    controller: "recordPageController"
////  };
////});
//
//app.controller('recordPageController', ['$scope','$ionicModal', '$timeout', '$state', function ($scope, $ionicModal,  $timeout, $state, $cordovaCamera) {
//
//  var tagCount = 0;
//  var tagColor = "";
//  var tagArr = [];
//  var wavesurfer = Object.create(WaveSurfer);
//
//  wavesurfer.init({
//    container     : '#waveform',
//    waveColor     : 'red',
//    interact      : false,
//    cursorWidth   : 0
//  });
//
//  var microphone = Object.create(WaveSurfer.Microphone);
//
//  microphone.init({
//    wavesurfer: wavesurfer
//  });
//
//  microphone.on('deviceReady', function(stream) {
//    console.log('Device ready!', stream);
//  });
//  microphone.on('deviceError', function(code) {
//    console.warn('Device error: ' + code);
//    });
//
//// pause rendering
////microphone.pause();
//
//// resume rendering
//
//
//// stop visualization and disconnect microphone
////microphone.stopDevice();
//
//// same as stopDevice() but also clears the wavesurfer canvas
////microphone.stop();
//
//// destroy the plugin
////microphone.destroy();
//
//
//  $ionicModal.fromTemplateUrl('templates/modal/save-modal.html', {
//    scope: $scope,
//    animation: 'slide-in-up'
//  }).then(function (modal) {
//    $scope.modal = modal;
//  });
//
//  $scope.openModal = function () {
//    if ($scope.dev_width > 640) {
//      return;
//    }
//    $scope.modal.show();
//    $('#image_background2').attr('src',image_source);
//  };
//  $scope.closeModal = function () {
//    $scope.modal.hide();
//  };
//
//  // $scope.image_Background = function(){
//  //   $.ajax({
//  //           url:'http://52.69.199.91:3000/imageBackground',
//  //            type:'GET',
//  //           success:function(result){
//  //             console.log(result);
//  //             $('#image_background').css("background-image", "url(" + result + ")");
//  //           }
//  //   });
//  // }
//
//
//  $scope.addTag = function(){
//
//    switch(tagCount){
//      case 0: tagColor = "#FAED7D"; break;
//      case 1: tagColor = "#FFA7A7"; break;
//      case 2: tagColor = "#FFB2F5"; break;
//      case 3: tagColor = "#B7F0B1"; break;
//      case 4: tagColor = "#FFC19E"; break;
//    }
//    tagArr[tagCount] = $("#add_tag").val();
//    tagCount++;
//
//    $("#new_tag").append("<div style='background-color: " + tagColor + "; margin:10px; padding:5px; font-size:16px; border-radius:10px; display:inline;'>" + $("#add_tag").val() + "</div>");
//    $("#add_tag").val("");
//  };
//  $scope.saveCover = function(){
//    var add_title = $('#add_title').val();
//    var add_description = $('#add_description').val();
//    var tag = tagArr;
//          $.ajax({
//            url:'http://52.69.199.91:3000/recordCover',
//            type:'GET',
//            data:{title:add_title,description:add_description,tagArr:tag,tagCount:tagCount},
//            success:function(result){
//              console.log(result);
//              if(result == 1){
//                console.log("ok");
//              }
//            }
//          });
//    $state.go('app.browse');
//  };
//
//  // Cleanup the modal when we're done with it!
//  $scope.$on('$destroy', function () {
//    $scope.modal.remove();
//  });
//  // Execute action on hide modal
//  $scope.$on('modal.hidden', function () {
//    // Execute action
//  });
//  // Execute action on remove modal
//  $scope.$on('modal.removed', function () {
//    // Execute action
//  });
//
//  $scope.ssd  = function(){
//   var options = {
//   quality          : 75,
//   destinationType  : Camera.DestinationType.DATA_URL,
//   sourceType       : Camera.PictureSourceType.PHOTOLIBRARY,
//   allowEdit        : true,
//   encodingType     : Camera.EncodingType.JPEG,
//   targetWidth      : 300,
//   targetHeight     : 300,
//   popoverOptions   : CameraPopoverOptions,
//   saveToPhotoAlbum : false
//   };
//   navigator.camera.getPicture(function(imageURI) {
//
//   }, function(err) {
//
//   }, options);
//   };
//
//
//  /*데이터 추가
//   var title = $('#add_title').val();
//   var description = $('#add_description').val();
//   var contents2 = $('#contents2').val();
//   var phoneNumber = $('#phoneNumber').val();
//   $.ajax({
//   url:'/userUpdate',
//   type:'GET',
//   data:{email:userId,userName:userName,sub:sub,contents1:contents1,contents2:contents2,type:choiceType,phoneNumber:phoneNumber},
//   success:function(result){
//   console.log(result);
//   if(result == 1){
//   console.log("ok");
//   location.href="/page/PortFolio/resultURL.html?email="+ userId + '&type=' + choiceType;
//   }
//   }
//   });
//   */
//
//
//
//
//  console.log("sg");
//  $scope.btnPlay = true;
//  $scope.btnStop = false;
//  $scope.value = 0;
//  $scope.second = 0;
//  $scope.minute = 0;
//  $scope.hour = 0;
//  $scope.ms = 10;
//
//  function countdown() {
//    $scope.value++;
//    $scope.timeout = $timeout(countdown, $scope.ms);
//    if ($scope.value === 100) {
//      $scope.value = 0;
//      $scope.second++;
//    }if ($scope.second === 60) {
//      $scope.second = 0;
//      $scope.minute++;
//    }if ($scope.minute === 60) {
//      $scope.minute = 0;
//      $scope.hour++;
//    }
//  }
//
//
//  function recordStart() {
//    $scope.btnPlay = false;
//    $scope.btnStop = true;
//    $scope.active = true; //@기준
//    $timeout.cancel($scope.timeout);
//    countdown();
//    $scope.value = 0;
//    $scope.second = 0;
//    $scope.minute = 0;
//    $scope.hour = 0;
//    //microphone.play();
//  }
//  $scope.recordStop = function() {
//    $scope.btnPlay = true;
//    $scope.btnStop = false;
//    $scope.active = false; //@기준
//    $timeout.cancel($scope.timeout);
//  };
//
//
//  console.log("mememe");
//
//  //$scope.langs = [
//  //  {county: 'English', langCode: 'United States'},
//  //  {county: 'korean', langCode: 'ko-KR'},
//  //  {county: 'Chinese', langCode: 'cmn-Hans-CN'},
//  //  {county: 'Japanese', langCode: 'ja-JP'}
//  //];
//  var langs =
//    [['Afrikaans', ['af-ZA']],
//      ['Bahasa Indonesia', ['id-ID']],
//      ['Bahasa Melayu', ['ms-MY']],
//      ['Català', ['ca-ES']],
//      ['Čeština', ['cs-CZ']],
//      ['Dansk', ['da-DK']],
//      ['Deutsch', ['de-DE']],
//      ['English', ['en-AU', 'Australia'],
//        ['en-CA', 'Canada'],
//        ['en-IN', 'India'],
//        ['en-NZ', 'New Zealand'],
//        ['en-ZA', 'South Africa'],
//        ['en-GB', 'United Kingdom'],
//        ['en-US', 'United States']],
//      ['Español', ['es-AR', 'Argentina'],
//        ['es-BO', 'Bolivia'],
//        ['es-CL', 'Chile'],
//        ['es-CO', 'Colombia'],
//        ['es-CR', 'Costa Rica'],
//        ['es-EC', 'Ecuador'],
//        ['es-SV', 'El Salvador'],
//        ['es-ES', 'España'],
//        ['es-US', 'Estados Unidos'],
//        ['es-GT', 'Guatemala'],
//        ['es-HN', 'Honduras'],
//        ['es-MX', 'México'],
//        ['es-NI', 'Nicaragua'],
//        ['es-PA', 'Panamá'],
//        ['es-PY', 'Paraguay'],
//        ['es-PE', 'Perú'],
//        ['es-PR', 'Puerto Rico'],
//        ['es-DO', 'República Dominicana'],
//        ['es-UY', 'Uruguay'],
//        ['es-VE', 'Venezuela']],
//      ['Euskara', ['eu-ES']],
//      ['Filipino', ['fil-PH']],
//      ['Français', ['fr-FR']],
//      ['Galego', ['gl-ES']],
//      ['Hrvatski', ['hr_HR']],
//      ['IsiZulu', ['zu-ZA']],
//      ['Íslenska', ['is-IS']],
//      ['Italiano', ['it-IT', 'Italia'],
//        ['it-CH', 'Svizzera']],
//      ['Lietuvių', ['lt-LT']],
//      ['Magyar', ['hu-HU']],
//      ['Nederlands', ['nl-NL']],
//      ['Norsk bokmål', ['nb-NO']],
//      ['Polski', ['pl-PL']],
//      ['Português', ['pt-BR', 'Brasil'],
//        ['pt-PT', 'Portugal']],
//      ['Română', ['ro-RO']],
//      ['Slovenščina', ['sl-SI']],
//      ['Slovenčina', ['sk-SK']],
//      ['Suomi', ['fi-FI']],
//      ['Svenska', ['sv-SE']],
//      ['Tiếng Việt', ['vi-VN']],
//      ['Türkçe', ['tr-TR']],
//      ['Ελληνικά', ['el-GR']],
//      ['български', ['bg-BG']],
//      ['Pусский', ['ru-RU']],
//      ['Српски', ['sr-RS']],
//      ['Українська', ['uk-UA']],
//      ['한국어', ['ko-KR']],
//      ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
//        ['cmn-Hans-HK', '普通话 (香港)'],
//        ['cmn-Hant-TW', '中文 (台灣)'],
//        ['yue-Hant-HK', '粵語 (香港)']],
//      ['日本語', ['ja-JP']],
//      ['हिन्दी', ['hi-IN']],
//      ['ภาษาไทย', ['th-TH']]];
//
//  //$scope.mainLangs = $scope.langs[35];
//
//  //var result = langs.filter(function( obj ) {
//  //  return obj.b == 6;
//  //});
//
//
//  //for (var i = 0; i < langs.length; i++) {
//  //  select_language.options[i] = new Option(langs[i][0], i);
//  //}
//  //var select_language = $scope.mainLangs;
//  select_language.selectedIndex = 35;
//
//  updateCountry();
//  //var select_dialect = false;
//  select_dialect.selectedIndex = false;
//  showInfo('info_start');
//
//  function updateCountry() {
//    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
//      select_dialect.remove(i);
//    }
//    var list = langs[select_language.selectedIndex];
//    for (var i = 1; i < list.length; i++) {
//      select_dialect.options.add(new Option(list[i][1], list[i][0]));
//    }
//    select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
//  }
//
//
//  var image_source;
//
//  var create_email = false;
//  var final_transcript_array = [];
//  var final_transcript = '';
//  var time_transcript_array = [];
//  var recognizing = false;
//  var ignore_onend;
//  var start_timestamp;
//
//  var audio_context;
//  var recorder;
//  var fCount = 0;
//  $scope.bookmark_sign = false;
//  var bookmark_array = [];
//
//
//  $scope.addBookmark = function(){
//    if ($scope.bookmark_sign == true) {
//      $scope.bookmark_sign = false;
//    }else{
//      $scope.bookmark_sign = true;
//    }
//
//  };
//
//  try {
//    // webkit shim
//    window.AudioContext = window.AudioContext || window.webkitAudioContext;
//    //navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
//    window.URL = window.URL || window.webkitURL;
//
//    audio_context = new AudioContext;
//    __log('Audio context set up.');
//    __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
//  } catch (e) {
//    alert('No web audio support in this browser!');
//  }
//
//  //navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
//  //  showInfo('No live audio input: ' + e);
//  //});
//
//  if (!('webkitSpeechRecognition' in window)) {
//    upgrade();
//  } else {
//    var recognition = new webkitSpeechRecognition();
//    recognition.continuous = true;
//    recognition.interimResults = true;
//
//    recognition.onstart = function () {
//      fCount = 0;
//      recognizing = true;
//      recorder && recorder.record();
//      showInfo('info_speak_now');
//      //script = '';
//      recordStart(); //@기준
//      //start_img.src = 'noun_166800_cc.png';
//    };
//
//    recognition.onerror = function (event) {
//      if (event.error == 'no-speech') {
//        /*updateCountry.src = 'noun_166800_cc.png';*/
//        showInfo('info_no_speech');
//        ignore_onend = true;
//      }
//      if (event.error == 'audio-capture') {
//        //updateCountry.src = 'noun_166800_cc.png';
//        showInfo('info_no_microphone');
//        ignore_onend = true;
//      }
//      if (event.error == 'not-allowed') {
//        if (event.timeStamp - start_timestamp < 100) {
//          showInfo('info_blocked');
//        } else {
//          showInfo('info_denied');
//        }
//        ignore_onend = true;
//      }
//    };
//
//    recognition.onend = function () {
//      recognizing = false;
//      recorder && recorder.stop();
//      __log('record ended');
//
//
//      if (ignore_onend) {
//        return;
//      }
//      //updateCountry.src = 'noun_166800_cc.png';
//      if (!final_transcript) {
//        showInfo('info_start');
//        return;
//      }
//      showInfo('');
//      if (window.getSelection) {
//        window.getSelection().removeAllRanges();
//        var range = document.createRange();
//        range.selectNode(document.getElementById('final_span'));
//        window.getSelection().addRange(range);
//      }
//      if (create_email) {
//        create_email = false;
//        createEmail();
//      }
//
//      exportRecordFile();
//    };
//
//    recognition.onresult = function (event) {
//      var interim_transcript = '';
//      if (typeof(event.results) == 'undefined') {
//        recognition.onend = null;
//        recognition.stop();
//        upgrade();
//        return;
//      }
//      for (var i = event.resultIndex; i < event.results.length; ++i) {
//        if (event.results[i].isFinal) {
//          final_transcript += event.results[i][0].transcript;
//          final_transcript += '\n';
//          final_transcript_array[fCount] = event.results[i][0].transcript;
//          time_transcript_array[fCount] = (event.timeStamp - start_timestamp)/1000;
//          bookmark_array[fCount] = bookmark_sign;
//          bookmark_sign = 0;
//          fCount++;
//
//
//        } else {
//          interim_transcript += event.results[i][0].transcript;
//
//        }
//      }
//
//      final_transcript = capitalize(final_transcript);
//      final_span.innerHTML = linebreak(final_transcript);
//      interim_span.innerHTML = linebreak(interim_transcript);
//    };
//
//  }
//
//  function exportRecordFile(){
//    recorder && recorder.exportWAV(function(audio) {
//
//      $.ajax({
//        url:'http://52.69.199.91:3000/insertScript',
//        type:'GET',
//        data:{script:final_transcript_array,time:time_transcript_array,count:fCount, bookmark:bookmark_array},
//        success:function(result){
//          console.log(result);
//          if(result == 1){
//            console.log("ok");
//          }
//        }
//      });
//
//      var xhr = new XMLHttpRequest();
//          xhr.open("POST", "http://52.69.199.91:3000/audioUpload", true);
//
//          var formdata = new FormData();
//          var date = new Date().getTime();
//          formdata.append("typist_audio", audio,  date + '.wav');
//          xhr.onload = function (e) {
//
//          };
//
//          xhr.send(formdata);
//          console.log("send finish");
//
//    });
//  }
//
//
//  function startUserMedia(stream) {
//    var input = audio_context.createMediaStreamSource(stream);
//    __log('Media stream created.');
//
//    recorder = new Recorder(input);
//    __log('Recorder initialised.');
//  }
//  function __log(e, data) {
//    //log.innerHTML += "\n" + e + " " + (data || '');
//  }
//  function upgrade() {
//    //start_button.style.visibility = 'hidden'; @기준
//    showInfo('info_upgrade');
//  }
//
//
//  var two_line = /\n\n/g;
//  var one_line = /\n/g;
//
//  function linebreak(s) {
//    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
//  }
//
//  var first_char = /\S/;
//
//  function capitalize(s) {
//    return s.replace(first_char, function (m) {
//      return m.toUpperCase();
//    });
//  }
//
//
//  startButton = function (event) {
//    if (recognizing) {
//      recognition.stop();
//      return;
//    }
//    final_transcript = '';
//    recognition.lang = select_dialect.value;
//    recognition.start();
//    ignore_onend = false;
//
//    final_span.innerHTML = '';
//    interim_span.innerHTML = '';
//    showInfo('info_allow');
//    start_timestamp = event.timeStamp;
//  };
//
//
//  function showInfo(s) {
//    if (s) {
//      for (var child = info.firstChild; child; child = child.nextSibling) {
//        if (child.style) {
//          child.style.display = child.id == s ? 'inline' : 'none';
//        }
//      }
//      info.style.visibility = 'visible';
//    } else {
//      info.style.visibility = 'hidden';
//    }
//  }
//
//  function handleFileSelect(evt) {
//    var files = evt.target.files; // FileList object
//
//    // Loop through the FileList and render image files as thumbnails.
//    for (var i = 0, f; f = files[i]; i++) {
//
//      // Only process image files.
//      if (!f.type.match('image.*')) {
//        continue;
//      }
//
//      var reader = new FileReader();
//
//      // Closure to capture the file information.
//      reader.onload = (function(theFile) {
//        return function(e) {
//          // Render thumbnail.
//          image_source = e.target.result;
//        };
//      })(f);
//
//      // Read in the image file as a data URL.
//      reader.readAsDataURL(f);
//    }
//  }
//
//  document.getElementById('typist_image').addEventListener('change', handleFileSelect, false);
//
//
//}]);
//
//

app.controller('recordPageController', ['$scope', '$ionicModal', '$timeout', '$state', '$cordovaCamera', function ($scope, $ionicModal, $timeout, $state, $cordovaCamera) {

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };

  var tagCount = 0;
  var tagColor = "";
  var tagArr = [];
  //var wavesurfer = Object.create(WaveSurfer);
  //
  //wavesurfer.init({
  //  container: '#waveform',
  //  waveColor: 'red',
  //  interact: false,
  //  cursorWidth: 0
  //});


  $ionicModal.fromTemplateUrl('templates/modal/save-modal.html', {
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
    //$('#image_background2').attr('src', image_source);
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };

  $scope.addTag = function () {

    switch (tagCount) {
      case 0:
        tagColor = "#FAED7D";
        break;
      case 1:
        tagColor = "#FFA7A7";
        break;
      case 2:
        tagColor = "#FFB2F5";
        break;
      case 3:
        tagColor = "#B7F0B1";
        break;
      case 4:
        tagColor = "#FFC19E";
        break;
    }
    tagArr[tagCount] = angular.element("#add_tag").val();
    tagCount++;
    angular.element("#new_tag").append("<div style='background-color: " + tagColor + "; margin:10px; padding:5px; font-size:16px; border-radius:10px; display:inline;'>" +
      angular.element("#add_tag").val() + "</div>");
    angular.element("#add_tag").val("");
  };

  $scope.saveCover = function () {
    var add_title = $('#add_title').val();
    var add_description = $('#add_description').val();
    var tag = tagArr;
    $.ajax({
      url: 'http://52.69.199.91:3000/recordCover',
      type: 'GET',
      data: {title: add_title, description: add_description, tagArr: tag, tagCount: tagCount},
      success: function (result) {
        console.log(result);
        if (result == 1) {
          console.log("ok");
        }
      }
    });
    $state.go('app.browse');
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

  $scope.ssd = function () {

    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };
    navigator.camera.getPicture(function (imageURI) {
    }, function (err) {
    }, options);
  };

  /* Camera Module */

  $scope.takePhoto = function () {
    console.log("fffgga");
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function (err) {
      // An error occured. Show a message to the user
    });
  };

  console.log("sg");
  $scope.btnPlay = true;
  $scope.btnStop = false;
  $scope.value = 0;
  $scope.second = 0;
  $scope.minute = 0;
  $scope.hour = 0;
  $scope.ms = 10;
  $scope.active = false;
  function countdown() {
    $scope.value++;
    $scope.timeout = $timeout(countdown, $scope.ms);
    if ($scope.value === 100) {
      $scope.value = 0;
      $scope.second++;
    }
    if ($scope.second === 60) {
      $scope.second = 0;
      $scope.minute++;
    }
    if ($scope.minute === 60) {
      $scope.minute = 0;
      $scope.hour++;
    }
  }

  function recordStart() {
    $scope.active = true; //@기준
    $timeout.cancel($scope.timeout);
    countdown();

    $scope.value = 0;
    $scope.second = 0;
    $scope.minute = 0;
    $scope.hour = 0;
  }

  $scope.recordStop = function () {
    $scope.active = false; //@기준
    $timeout.cancel($scope.timeout);

  };

// 이구간까지 스탑워치 기능 @기준

  console.log("mememe");
  //$scope.langs = [
  //  {county: 'English', langCode: 'United States'},
  //  {county: 'korean', langCode: 'ko-KR'},
  //  {county: 'Chinese', langCode: 'cmn-Hans-CN'},
  //  {county: 'Japanese', langCode: 'ja-JP'}
  //];

  var langs =
    [['Afrikaans', ['af-ZA']],
      ['Bahasa Indonesia', ['id-ID']],
      ['Bahasa Melayu', ['ms-MY']],
      ['Català', ['ca-ES']],
      ['Čeština', ['cs-CZ']],
      ['Dansk', ['da-DK']],
      ['Deutsch', ['de-DE']],
      ['English', ['en-AU', 'Australia'],
        ['en-CA', 'Canada'],
        ['en-IN', 'India'],
        ['en-NZ', 'New Zealand'],
        ['en-ZA', 'South Africa'],
        ['en-GB', 'United Kingdom'],
        ['en-US', 'United States']],
      ['Español', ['es-AR', 'Argentina'],
        ['es-BO', 'Bolivia'],
        ['es-CL', 'Chile'],
        ['es-CO', 'Colombia'],
        ['es-CR', 'Costa Rica'],
        ['es-EC', 'Ecuador'],
        ['es-SV', 'El Salvador'],
        ['es-ES', 'España'],
        ['es-US', 'Estados Unidos'],
        ['es-GT', 'Guatemala'],
        ['es-HN', 'Honduras'],
        ['es-MX', 'México'],
        ['es-NI', 'Nicaragua'],
        ['es-PA', 'Panamá'],
        ['es-PY', 'Paraguay'],
        ['es-PE', 'Perú'],
        ['es-PR', 'Puerto Rico'],
        ['es-DO', 'República Dominicana'],
        ['es-UY', 'Uruguay'],
        ['es-VE', 'Venezuela']],
      ['Euskara', ['eu-ES']],
      ['Filipino', ['fil-PH']],
      ['Français', ['fr-FR']],
      ['Galego', ['gl-ES']],
      ['Hrvatski', ['hr_HR']],
      ['IsiZulu', ['zu-ZA']],
      ['Íslenska', ['is-IS']],
      ['Italiano', ['it-IT', 'Italia'],
        ['it-CH', 'Svizzera']],
      ['Lietuvių', ['lt-LT']],
      ['Magyar', ['hu-HU']],
      ['Nederlands', ['nl-NL']],
      ['Norsk bokmål', ['nb-NO']],
      ['Polski', ['pl-PL']],
      ['Português', ['pt-BR', 'Brasil'],
        ['pt-PT', 'Portugal']],
      ['Română', ['ro-RO']],
      ['Slovenščina', ['sl-SI']],
      ['Slovenčina', ['sk-SK']],
      ['Suomi', ['fi-FI']],
      ['Svenska', ['sv-SE']],
      ['Tiếng Việt', ['vi-VN']],
      ['Türkçe', ['tr-TR']],
      ['Ελληνικά', ['el-GR']],
      ['български', ['bg-BG']],
      ['Pусский', ['ru-RU']],
      ['Српски', ['sr-RS']],
      ['Українська', ['uk-UA']],
      ['한국어', ['ko-KR']],
      ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
        ['cmn-Hans-HK', '普通话 (香港)'],
        ['cmn-Hant-TW', '中文 (台灣)'],
        ['yue-Hant-HK', '粵語 (香港)']],
      ['日本語', ['ja-JP']],
      ['हिन्दी', ['hi-IN']],
      ['ภาษาไทย', ['th-TH']]];

  //$scope.mainLangs = $scope.langs[35];
  //var result = langs.filter(function( obj ) {
  //  return obj.b == 6;
  //});
  //for (var i = 0; i < langs.length; i++) {
  //  select_language.options[i] = new Option(langs[i][0], i);
  //}
  //var select_language = $scope.mainLangs;
  select_language.selectedIndex = 35;
  updateCountry();
  //var select_dialect = false;
  select_dialect.selectedIndex = false;
  showInfo('info_start');

  function updateCountry() {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
      select_dialect.remove(i);
    }
    var list = langs[select_language.selectedIndex];
    for (var i = 1; i < list.length; i++) {
      select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
  }

  $scope.bookmark_sign = false;

  $scope.addBookmark = function () {
    if ($scope.bookmark_sign == true) {
      $scope.bookmark_sign = false;
    } else {
      $scope.bookmark_sign = true;
    }

  };

  var image_source;
  var create_email = false;
  var final_transcript = '';
  var recognizing = false;
  var ignore_onend;
  var start_timestamp;

  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
//    start_button.style.display = 'inline-block'; @기준
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
      showInfo('info_speak_now');
      recordStart(); //@기준
      //start_img.src = 'noun_166800_cc.png';
    };

    recognition.onerror = function (event) {
      if (event.error == 'no-speech') {
        /*updateCountry.src = 'noun_166800_cc.png';*/
        showInfo('info_no_speech');
        ignore_onend = true;
      }
      if (event.error == 'audio-capture') {
        //updateCountry.src = 'noun_166800_cc.png';
        showInfo('info_no_microphone');
        ignore_onend = true;
      }
      if (event.error == 'not-allowed') {
        if (event.timeStamp - start_timestamp < 100) {
          showInfo('info_blocked');
        } else {
          showInfo('info_denied');
        }
        ignore_onend = true;
      }
    };

    recognition.onend = function () {
      recognizing = false;
      if (ignore_onend) {
        return;
      }
      //updateCountry.src = 'noun_166800_cc.png';
      if (!final_transcript) {
        showInfo('info_start');
        return;
      }
      showInfo('');
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.selectNode(document.getElementById('final_span'));
        window.getSelection().addRange(range);
      }

      if (create_email) {
        create_email = false;
        createEmail();
      }
    };

    recognition.onresult = function (event) {
      var interim_transcript = '';
      if (typeof(event.results) == 'undefined') {
        recognition.onend = null;
        recognition.stop();
        upgrade();
        return;
      }

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      final_transcript = capitalize(final_transcript);
      final_span.innerHTML = linebreak(final_transcript);
      interim_span.innerHTML = linebreak(interim_transcript);
      //if (final_transcript || interim_transcript) {
      //  showButtons('inline-block');
      //}

    };

  }

  function upgrade() {
    //start_button.style.visibility = 'hidden'; @기준
    showInfo('info_upgrade');
  }

  var two_line = /\n\n/g;
  var one_line = /\n/g;

  function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  }

  var first_char = /\S/;

  function capitalize(s) {
    return s.replace(first_char, function (m) {
      return m.toUpperCase();
    });

  }

  startButton = function (event) {
    if (recognizing) {
      recognition.stop();
      //console.log($("#final_span").text());
      return;
    }

    final_transcript = '';
    recognition.lang = select_dialect.value;
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = '';
    interim_span.innerHTML = '';
    //start_img.src = 'noun_166800_cc.png';
    showInfo('info_allow');
    //showButtons('none');
    start_timestamp = event.timeStamp;

  };


  function showInfo(s) {
    if (s) {
      for (var child = info.firstChild; child; child = child.nextSibling) {
        if (child.style) {
          child.style.display = child.id == s ? 'inline' : 'none';
        }
      }
      info.style.visibility = 'visible';
    } else {
      info.style.visibility = 'hidden';
    }
  }


  //사운드 웨이브
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);

      };
  })();


  var c = document.getElementById('canv');
  var $ = c.getContext('2d'),
    w, h;

  c.width = w = window.innerWidth * 0.98;
  c.height = h = window.innerHeight * 1.2;

//circuits
  var circ1 = new circ(),
    circ2 = new circ(),
    circ3 = new circ(),
    circ4 = new circ(),
    hor = h * 0.5;  //horizon(height from bottom)
  cnt = 50,  //count
    pace = Math.ceil(w / cnt),
    //pnts = new Array(cnt);
    buffer = new ArrayBuffer(cnt * 4),
    pts = new Float32Array(buffer);

  circ1.max = h * 1.4;  //max wave height

  circ2.max = 45;  //max wave height
  circ2.sp = 0.03;//sp is speed

  circ3.max = 2; //max wave height
  circ3.sp = 0.015;


  circ4.max = 10; //max wave height
  circ4.sp = 0.019;

  function fill() {
    for (var i = 0; i < cnt; i++) {
      pts[i] = blend(circ1, circ2, circ3, circ4);
    }
  }

  fill();
  $.lineWidth = 15;
  $.strokeStyle = 'hsla(68, 100%, 58%, .6)';
  $.fillStyle = 'hsla(200, 5%, 13%, .5)';

  function go() {

    var i;
    /// move  left
    for (i = 0; i < cnt - 1; i++) {
      pts[i] = pts[i + 1];
    }

    /// get a new point
    pts[cnt - 1] = blend(circ1, circ2, circ3, circ4);

    $.fillRect(0, 0, w, h);

    /// render wave
    $.beginPath();
    $.moveTo(0, pts[0]);

    for (i = 1; i < cnt; i++) {
      $.lineTo(i * pace, pts[i]);
    }

    $.stroke();

    window.requestAnimFrame(go);
  }

  go();

/// oscillator
  function circ() {

    this.vary = 0.4;
    this.max = 160;
    this.sp = 0.02;

    var it = this,
      a = 0,
      max = Max();

    this.Amp = function () {

      a += this.sp;

      if (a >= 2.0) {
        a = 0;
        max = Max();
      }

      return max * Math.sin(a * Math.PI);
    }

    function Max() {
      return Math.random() * it.max * it.vary +
        it.max * (1 - it.vary);
    }

    return this;
  }

  function blend() {

    var args = arguments.length,
      i = args,
      sum = 0;

    if (args < 1) return 0;

    while (i--) sum += arguments[i].Amp();

    return sum / args + hor;
  }


}]);

//(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Recorder = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//"use strict";
//
//module.exports = require("./recorder").Recorder;
//
//},{"./recorder":2}],2:[function(require,module,exports){
//'use strict';
//
//var _createClass = (function () {
//    function defineProperties(target, props) {
//        for (var i = 0; i < props.length; i++) {
//            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
//        }
//    }return function (Constructor, protoProps, staticProps) {
//        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
//    };
//})();
//
//Object.defineProperty(exports, "__esModule", {
//    value: true
//});
//exports.Recorder = undefined;
//
//var _inlineWorker = require('inline-worker');
//
//var _inlineWorker2 = _interopRequireDefault(_inlineWorker);
//
//function _interopRequireDefault(obj) {
//    return obj && obj.__esModule ? obj : { default: obj };
//}
//
//function _classCallCheck(instance, Constructor) {
//    if (!(instance instanceof Constructor)) {
//        throw new TypeError("Cannot call a class as a function");
//    }
//}
//
//var Recorder = exports.Recorder = (function () {
//    function Recorder(source, cfg) {
//        var _this = this;
//
//        _classCallCheck(this, Recorder);
//
//        this.config = {
//            bufferLen: 4096,
//            numChannels: 2,
//            mimeType: 'audio/wav'
//        };
//        this.recording = false;
//        this.callbacks = {
//            getBuffer: [],
//            exportWAV: []
//        };
//
//        Object.assign(this.config, cfg);
//        this.context = source.context;
//        this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels);
//
//        this.node.onaudioprocess = function (e) {
//            if (!_this.recording) return;
//
//            var buffer = [];
//            for (var channel = 0; channel < _this.config.numChannels; channel++) {
//                buffer.push(e.inputBuffer.getChannelData(channel));
//            }
//            _this.worker.postMessage({
//                command: 'record',
//                buffer: buffer
//            });
//        };
//
//        source.connect(this.node);
//        this.node.connect(this.context.destination); //this should not be necessary
//
//        var self = {};
//        this.worker = new _inlineWorker2.default(function () {
//            var recLength = 0,
//                recBuffers = [],
//                sampleRate = undefined,
//                numChannels = undefined;
//
//            self.onmessage = function (e) {
//                switch (e.data.command) {
//                    case 'init':
//                        init(e.data.config);
//                        break;
//                    case 'record':
//                        record(e.data.buffer);
//                        break;
//                    case 'exportWAV':
//                        exportWAV(e.data.type);
//                        break;
//                    case 'getBuffer':
//                        getBuffer();
//                        break;
//                    case 'clear':
//                        clear();
//                        break;
//                }
//            };
//
//            function init(config) {
//                sampleRate = config.sampleRate;
//                numChannels = config.numChannels;
//                initBuffers();
//            }
//
//            function record(inputBuffer) {
//                for (var channel = 0; channel < numChannels; channel++) {
//                    recBuffers[channel].push(inputBuffer[channel]);
//                }
//                recLength += inputBuffer[0].length;
//            }
//
//            function exportWAV(type) {
//                var buffers = [];
//                for (var channel = 0; channel < numChannels; channel++) {
//                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
//                }
//                var interleaved = undefined;
//                if (numChannels === 2) {
//                    interleaved = interleave(buffers[0], buffers[1]);
//                } else {
//                    interleaved = buffers[0];
//                }
//                var dataview = encodeWAV(interleaved);
//                var audioBlob = new Blob([dataview], { type: type });
//
//                self.postMessage({ command: 'exportWAV', data: audioBlob });
//            }
//
//            function getBuffer() {
//                var buffers = [];
//                for (var channel = 0; channel < numChannels; channel++) {
//                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
//                }
//                self.postMessage({ command: 'getBuffer', data: buffers });
//            }
//
//            function clear() {
//                recLength = 0;
//                recBuffers = [];
//                initBuffers();
//            }
//
//            function initBuffers() {
//                for (var channel = 0; channel < numChannels; channel++) {
//                    recBuffers[channel] = [];
//                }
//            }
//
//            function mergeBuffers(recBuffers, recLength) {
//                var result = new Float32Array(recLength);
//                var offset = 0;
//                for (var i = 0; i < recBuffers.length; i++) {
//                    result.set(recBuffers[i], offset);
//                    offset += recBuffers[i].length;
//                }
//                return result;
//            }
//
//            function interleave(inputL, inputR) {
//                var length = inputL.length + inputR.length;
//                var result = new Float32Array(length);
//
//                var index = 0,
//                    inputIndex = 0;
//
//                while (index < length) {
//                    result[index++] = inputL[inputIndex];
//                    result[index++] = inputR[inputIndex];
//                    inputIndex++;
//                }
//                return result;
//            }
//
//            function floatTo16BitPCM(output, offset, input) {
//                for (var i = 0; i < input.length; i++, offset += 2) {
//                    var s = Math.max(-1, Math.min(1, input[i]));
//                    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
//                }
//            }
//
//            function writeString(view, offset, string) {
//                for (var i = 0; i < string.length; i++) {
//                    view.setUint8(offset + i, string.charCodeAt(i));
//                }
//            }
//
//            function encodeWAV(samples) {
//                var buffer = new ArrayBuffer(44 + samples.length * 2);
//                var view = new DataView(buffer);
//
//                /* RIFF identifier */
//                writeString(view, 0, 'RIFF');
//                /* RIFF chunk length */
//                view.setUint32(4, 36 + samples.length * 2, true);
//                /* RIFF type */
//                writeString(view, 8, 'WAVE');
//                /* format chunk identifier */
//                writeString(view, 12, 'fmt ');
//                /* format chunk length */
//                view.setUint32(16, 16, true);
//                /* sample format (raw) */
//                view.setUint16(20, 1, true);
//                /* channel count */
//                view.setUint16(22, numChannels, true);
//                /* sample rate */
//                view.setUint32(24, sampleRate, true);
//                /* byte rate (sample rate * block align) */
//                view.setUint32(28, sampleRate * 4, true);
//                /* block align (channel count * bytes per sample) */
//                view.setUint16(32, numChannels * 2, true);
//                /* bits per sample */
//                view.setUint16(34, 16, true);
//                /* data chunk identifier */
//                writeString(view, 36, 'data');
//                /* data chunk length */
//                view.setUint32(40, samples.length * 2, true);
//
//                floatTo16BitPCM(view, 44, samples);
//
//                return view;
//            }
//        }, self);
//
//        this.worker.postMessage({
//            command: 'init',
//            config: {
//                sampleRate: this.context.sampleRate,
//                numChannels: this.config.numChannels
//            }
//        });
//
//        this.worker.onmessage = function (e) {
//            var cb = _this.callbacks[e.data.command].pop();
//            if (typeof cb == 'function') {
//                cb(e.data.data);
//            }
//        };
//    }
//
//    _createClass(Recorder, [{
//        key: 'record',
//        value: function record() {
//            this.recording = true;
//        }
//    }, {
//        key: 'stop',
//        value: function stop() {
//            this.recording = false;
//        }
//    }, {
//        key: 'clear',
//        value: function clear() {
//            this.worker.postMessage({ command: 'clear' });
//        }
//    }, {
//        key: 'getBuffer',
//        value: function getBuffer(cb) {
//            cb = cb || this.config.callback;
//            if (!cb) throw new Error('Callback not set');
//
//            this.callbacks.getBuffer.push(cb);
//
//            this.worker.postMessage({ command: 'getBuffer' });
//        }
//    }, {
//        key: 'exportWAV',
//        value: function exportWAV(cb, mimeType) {
//            mimeType = mimeType || this.config.mimeType;
//            cb = cb || this.config.callback;
//            if (!cb) throw new Error('Callback not set');
//
//            this.callbacks.exportWAV.push(cb);
//
//            this.worker.postMessage({
//                command: 'exportWAV',
//                type: mimeType
//            });
//        }
//    }], [{
//        key: 'forceDownload',
//        value: function forceDownload(blob, filename) {
//            var url = (window.URL || window.webkitURL).createObjectURL(blob);
//            var link = window.document.createElement('a');
//            link.href = url;
//            link.download = filename || 'output.wav';
//            var click = document.createEvent("Event");
//            click.initEvent("click", true, true);
//            link.dispatchEvent(click);
//        }
//    }]);
//
//    return Recorder;
//})();
//
//exports.default = Recorder;
//
//},{"inline-worker":3}],3:[function(require,module,exports){
//"use strict";
//
//module.exports = require("./inline-worker");
//},{"./inline-worker":4}],4:[function(require,module,exports){
//(function (global){
//"use strict";
//
//var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
//
//var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
//
//var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);
//
//var InlineWorker = (function () {
//  function InlineWorker(func, self) {
//    var _this = this;
//
//    _classCallCheck(this, InlineWorker);
//
//    if (WORKER_ENABLED) {
//      var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
//      var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));
//
//      return new global.Worker(url);
//    }
//
//    this.self = self;
//    this.self.postMessage = function (data) {
//      setTimeout(function () {
//        _this.onmessage({ data: data });
//      }, 0);
//    };
//
//    setTimeout(function () {
//      func.call(self);
//    }, 0);
//  }
//
//  _createClass(InlineWorker, {
//    postMessage: {
//      value: function postMessage(data) {
//        var _this = this;
//
//        setTimeout(function () {
//          _this.self.onmessage({ data: data });
//        }, 0);
//      }
//    }
//  });
//
//  return InlineWorker;
//})();
//
//module.exports = InlineWorker;
//}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//},{}]},{},[1])(1)
//});

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


app.directive("scrapListItem", function() {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/scrap-list-item.html",
    controller: "scrapListItemController"
  };
});


app.controller('scrapListItemController', ['$scope', '$window', '$ionicModal','$state', function ($scope, $window) {
  $scope.dev_width = $window.innerWidth;
}]);

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
  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };
  $scope.releaseSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(true);
  };


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

app.controller('allResourceModalController', function ($scope) {

  console.log('올리소스 컨트롤러');

  $scope.resources = [{
    images: [
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png"
    ]
  }

  ];

  console.log($scope.resources.images);

});



app.directive("recommend-card-modal", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/modal/recommend-card-modal.html",
    controller: "recommendCardModalController"
  };
});


app.controller('recommendCardModalController', function ($scope, $ionicModal, $window, $state) {

  $scope.dev_width = $window.innerWidth;


});

app.directive("save-modal", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/modal/save-modal.html",
    controller: "saveModalController"
  };
});

app.controller('saveModalController', function ($scope) {

  console.log('세이브모달 컨트롤러');

  $scope.$parent.closeModal();

  angular.element("#add_title").click(function(){
  	$(this).after("<div class='title-exam'><strong>이런 제목은 어떤가요?</strong><ol><li>자동차 컨트롤 개선사례<a href='javascript:;'>사용하기</a></li><li>자동차 컨트롤 개선 방법론<a href='javascript:;'>사용하기</a></li><li>자동차 컨트롤 연구분야<a href='javascript:;'>사용하기</a></li></ol></div>");
  });

});



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
