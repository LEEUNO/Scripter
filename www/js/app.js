// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])
  .constant('ApiEndpoint', {
    url: '/api'
  });
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
  .config(function ($stateProvider, $urlRouterProvider) {


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
      //.state('app.browse.recordContents', {
      //  url: '/recordContents',
      //  views: {
      //    'menuContent': {
      //      templateUrl: 'templates/record-detail.html',
      //      controller: 'recordListController'
      //    }
      //  }
      //})
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
        url: '/record-detail/:param_no',
        //url: '/record-detail',
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
            controller: 'scrapContents'
          }
        }
      })
    //.state('app.single', {
    //  url: '/playlists/:playlistId',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/playlist.html',
    //      controller: 'PlaylistCtrl'
    //    }
    //  }
    //});
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse');
  });
angular.module('TypistApp.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });

app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.navTitle = '';


  $scope.pageTitle = "Record File";
  $scope.selected = 0;


  if ($scope.dev_width < 770) {
    $scope.navTitle = '<img style="margin-top: 8px; width:80px; height: 28px;"  class="title-image" src="img/logo.png" />';
  } else {
    $scope.navTitle = '';
  }

  $scope.recordIcon = '<i class="icon-record"></i>';
  $scope.scrapIcon = '<i class="icon-scrap"></i>';
  $scope.memoryIcon = '<i class="icon-memory"></i>';
  console.log("MainController");

  //
  //$scope.lockSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(false);
  //};


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
  }


});

app.controller('recordController', function ($scope) {
  console.log("recordController");


});


app.controller('recordDetailController', function ($scope, $window, $ionicModal) {
  console.log("recordDetailController");

  $scope.dev_width = $window.innerWidth;
  $scope.isMobile = true;
  $scope.imageData = [];
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

  //
  //$ionicModal.fromTemplateUrl('templates/modal/all-resource-modal.html', {
  //  scope: $scope,
  //  animation: 'slide-in-up'
  //}).then(function (modal) {
  //  $scope.modal = modal;
  //});
  //$scope.allResourceModal = function () {
  //  $scope.modal.show();
  //};
  //$scope.closeModal = function () {
  //  $scope.modal.hide();
  //};
  //// Cleanup the modal when we're done with it!
  //$scope.$on('$destroy', function () {
  //  $scope.modal.remove();
  //});
  //// Execute action on hide modal
  //$scope.$on('modal.hidden', function () {
  //  // Execute action
  //});
  //// Execute action on remove modal
  //$scope.$on('modal.removed', function () {
  //  // Execute action
  //});
  //
  //
  //
  //$scope.imageData = [{
  //
  //
  //}];
  //


});

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



app.controller('scrapContents', function ($scope) {
  console.log("scrapContents");


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
  var cfImg = document.getElementsByClassName("coverflow__image")

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
      coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

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
app.controller('recordDetailController', function ($scope, $window, $ionicModal, $ionicSlideBoxDelegate, $state) {


    var fileURL = "";
    var scriptArr = [];


    $.ajax({
      url: 'http://52.69.199.91:3000/recordDetail',
      type: 'GET',
      data: {recordNo: $state.params.param_no},
      success: function (result) {
        $('#detail_title').append(result[0].title);
        $('#detail_date').append(result[0].date);
        fileURL = result[0].file_url;
        console.log(result);
        for (var i = 0; i < result.length; i++) {
          if (result[i].bookmark == 1) {
            $('#script_contents').append("<div><span><i class='icon-Bookmark'></span><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
          } else {
            $('#script_contents').append("<div><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
          }
        }
        var wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: 'black',
          progressColor: 'grey',
          height: 64
        });
        // var audioLength = wavesurfer.getCurrentTime();
        // var audioTime = wavesurfer.getDuration();
        $scope.startRecording = function () {
          wavesurfer.playPause();
        };

        wavesurfer.load(fileURL);


        $scope.stopCursor = function () {
          wavesurfer.stop();
        };
        $scope.pauseCursor = function () {
          wavesurfer.pause();
        };

        $('.scriptContents').on("click", function () {
          console.log("gg");
          if ($(this).attr('id') == "0") {
            console.log("0");
            wavesurfer.seekTo(0);
          } else {
            console.log("1");
            wavesurfer.seekTo(result[$(this).attr('id') - 1].time / result[result.length - 1].time);
          }
          wavesurfer.play();
        });
      }
    });


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

  }
);

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
      item:"="
    },
    templateUrl: "templates/directives/record-list.html",
    controller: "recordListController"
  };
});


app.controller('recordListController', ['$scope', '$window', '$ionicSlideBoxDelegate', '$state', function ($scope, $window, $ionicSlideBoxDelegate, $state) {
  $scope.dev_width = $window.innerWidth;

  
  // $scope.viewRecordDetail = function () {
  //   console.log('hahaha');
  //   $state.go('app.browse.record-detail');
    
  // };

  //
  //$scope.lockSlide = function () {
  //  $ionicSlideBoxDelegate.enableSlide(false);
  //};
  var repeatValue = '';
  function dd(){
    console.log("gssa");
    $.ajax({
            url:'http://52.69.199.91:3000/indexInfo',
            type:'GET',
            success:function(result){
              repeatValue = result[0].record_no;
                console.log(repeatValue);
          }
    });
  }
                for(var i = 43; i > 0; i--){
                   $.ajax({
                          url:'http://52.69.199.91:3000/recordList',
                          data:{index:i},
                          type:'GET',
                          success:function(result){
                            $('.card').on("click", function(){
                              $state.go('app.record-detail',{param_no:$(this).attr('id')});
                            });
                            console.log(result);
                            switch(result[0][1].length){
                              case 0:
                                   $('.record-items').append(
                                   "<div class='card' id='"+result[0][0][0].record_no + "'>" +
                                    //"<div class='card' ng-click='viewRecordDetail(" + result[0][0][0].record_no + ")'>" +
                                    //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
                                    //"<a href='#/app/record-detail'>" +
                                      "<div class='record-item'>" +
                                  "<div class='background-filter'></div>" +
                                  //"<img src='/img/background-filter.png' alt='#'>" +
                                        "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
                                        "<div class='content-wrap'" +
                                             "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
                                          "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
                                            "<p class='date'> " + result[0][0][0].date + " </p>" +
                                            "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
                                            "<div class='des-section'>" +
                                            "<p class='description'> " + result[0][0][0].description + " </p>" +
                                            "</div>" +
                                          "</div>" +
                                          "<div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
                                          "<div class='noti'> images " + result[1][0].count + "</div>"+
                                          "<div class='noti'> videos " + result[1][1].count + "</div>" +
                                            "<div class='time'> " + result[0][0][0].time + "</div>"+
                                          "</div>" +
                                        "</div>" +
                                      "</div>" +
                                    "</a>" +
                                  "</div>"
                                );
                              break;
                              case 1:
                                    $('.record-items').append(
                                    "<div class='card' id='"+result[0][0][0].record_no + "'>" +
                                      //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
                                      //"<a href='#/app/record-detail'>" +

                                        "<div class='record-item'>" +
                                          //"<img src='" + result[0][0][0].image_url + "' alt='#'>" +
                                    "<div class='background-filter'></div>" +
                                          "<div class='content-wrap'" +
                                               "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
                                            "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+

                                              "<p class='date'> " + result[0][0][0].date + " </p>" +
                                              "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
                                              "<div class='des-section'>" +
                                              "<p class='description'> " + result[0][0][0].description + " </p>" +
                                              "</div>" +
                                            "</div>" +
                                            "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
                                            "<span>"+result[0][1][0].tag+"</span></label>"+
                                            "<div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
                                            "<div class='noti'> images " + result[1][0].count + "</div>"+
                                            "<div class='noti'> videos " + result[1][1].count + "</div>" +
                                              "<div class='time'> " + result[0][0][0].time + "</div>"+
                                            "</div>" +
                                          "</div>" +
                                        "</div>" +
                                      "</a>" +
                                    "</div>"
                                  );
                              break;
                              case 2:
                                    $('.record-items').append(
                                    "<div class='card' id='"+result[0][0][0].record_no + "'>" +
                                      //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
                                      //"<a href='#/app/record-detail'>" +
                                        "<div class='record-item'>" +
                                    "<div class='background-filter'></div>" +
                                          "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
                                          "<div class='content-wrap'" +
                                               "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
                                            "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
                                              "<p class='date'> " + result[0][0][0].date + " </p>" +
                                              "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
                                              "<div class='des-section'>" +
                                              "<p class='description'> " + result[0][0][0].description + " </p>" +
                                              "</div>" +
                                            "</div>" +
                                            "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
                                            "<span>"+result[0][1][0].tag+"</span>"+
                                            "<span>"+result[0][1][1].tag+"</span>"+
                                            "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
                                            "<div class='noti'> images " + result[1][0].count + "</div>"+
                                            "<div class='noti'> videos " + result[1][1].count + "</div>" +
                                              "<div class='time'> " + result[0][0][0].time + "</div>"+
                                            "</div>" +
                                          "</div>" +
                                        "</div>" +
                                      "</a>" +
                                    "</div>"
                                  );
                              break;
                              case 3:
                                  $('.record-items').append(
                                        "<div class='card' id='"+result[0][0][0].record_no + "'>" +
                                          //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
                                          //"<a href='#/app/record-detail'>" +
                                            "<div class='record-item'>" +
                                        "<div class='background-filter'></div>" +
                                              "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
                                              "<div class='content-wrap'" +
                                                   "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
                                                "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
                                                  "<p class='date'> " + result[0][0][0].date + " </p>" +
                                                  "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
                                                  "<div class='des-section'>" +
                                                  "<p class='description'> " + result[0][0][0].description + " </p>" +
                                                  "</div>" +
                                                "</div>" +
                                                "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
                                                "<span>"+result[0][1][0].tag+"</span>"+
                                                "<span>"+result[0][1][1].tag+"</span>"+
                                                "<span>"+result[0][1][2].tag+"</span>"+
                                                "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
                                                "<div class='noti'> images " + result[1][0].count + "</div>"+
                                                "<div class='noti'> videos " + result[1][1].count + "</div>" +
                                                  "<div class='time'> " + result[0][0][0].time + "</div>"+
                                                "</div>" +
                                              "</div>" +
                                            "</div>" +
                                          "</a>" +
                                        "</div>"
                                      );
                              break;
                              case 4:
                                    $('.record-items').append(
                                              "<div class='card' id='"+result[0][0][0].record_no + "'>" +
                                                //"<ion-option-button class='button-assertive'>delete</ion-option-button>" +
                                                //"<a href='#/app/record-detail'>" +
                                                  "<div class='record-item'>" +
                                              "<div class='background-filter'></div>" +
                                                    "<img src='" + result[0][0][0].image_url + "' alt='#'>" +
                                                    "<div class='content-wrap'" +
                                                         "ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">"+
                                                      "<div class='contents' ng-class=\"{'content-320px': dev_width < 322 }\">"+
                                                        "<p class='date'> " + result[0][0][0].date + " </p>" +
                                                        "<h1 class='title'>" + result[0][0][0].title + " </h1>" +
                                                        "<div class='des-section'>" +
                                                        "<p class='description'> " + result[0][0][0].description + " </p>" +
                                                        "</div>" +
                                                      "</div>" +
                                                      "<label class='tag' ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">" +
                                                      "<span>"+result[0][1][0].tag+"</span>"+
                                                      "<span>"+result[0][1][1].tag+"</span>"+
                                                      "<span>"+result[0][1][2].tag+"</span>"+
                                                      "<span>"+result[0][1][3].tag+"</span>"+
                                                      "</label><div class='sub-contents' ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">" +
                                                      "<div class='noti'> images " + result[1][0].count + "</div>"+
                                                      "<div class='noti'> videos " + result[1][1].count + "</div>" +
                                                        "<div class='time'> " + result[0][0][0].time + "</div>"+
                                                      "</div>" +
                                                    "</div>" +
                                                  "</div>" +
                                                "</a>" +
                                              "</div>"
                                            );
                              break;
                            }
                          }
                  });
                }
  <!--지우지말것-->
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
  //    images: 'img/record_list/list_imag6.png',
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
  //    images: 'img/record_list/list_imag7.png',
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
  //    images: 'img/record_list/list_imag8.png',
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

}]);




app.directive("recordPage", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/record-page.html",
    controller: "recordPageController"
  };
});

app.controller('recordPageController', ['$scope','$ionicModal', '$timeout', '$state', function ($scope, $ionicModal,  $timeout, $state, $cordovaCamera) {

  var tagCount = 0;
  var tagColor = "";
  var tagArr = [];

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
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  $scope.addTag = function(){

    switch(tagCount){
      case 0: tagColor = "#FAED7D"; break;
      case 1: tagColor = "#FFA7A7"; break;
      case 2: tagColor = "#FFB2F5"; break;
      case 3: tagColor = "#B7F0B1"; break;
      case 4: tagColor = "#FFC19E"; break;
    }
    tagArr[tagCount] = $("#add_tag").val();
    tagCount++;

    $("#new_tag").append("<div style='background-color: " + tagColor + "; margin:10px; padding:5px; font-size:16px; border-radius:10px; display:inline;'>" + $("#add_tag").val() + "</div>");
    $("#add_tag").val("");
  }
  $scope.saveCover = function(){
    var add_title = $('#add_title').val();
    var add_description = $('#add_description').val();
    var tag = tagArr;
          $.ajax({
            url:'http://52.69.199.91:3000/recordCover',
            type:'GET',
            data:{title:add_title,description:add_description,tagArr:tag,tagCount:tagCount},
            success:function(result){
              console.log(result);
              if(result == 1){
                console.log("ok");
              }
            }
          }); 
    $state.go('app.browse');
  }

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

  $scope.ssd  = function(){
   var options = {
   quality          : 75,
   destinationType  : Camera.DestinationType.DATA_URL,
   sourceType       : Camera.PictureSourceType.PHOTOLIBRARY,
   allowEdit        : true,
   encodingType     : Camera.EncodingType.JPEG,
   targetWidth      : 300,
   targetHeight     : 300,
   popoverOptions   : CameraPopoverOptions,
   saveToPhotoAlbum : false
   };
   navigator.camera.getPicture(function(imageURI) {

   }, function(err) {

   }, options);
   };


  /*데이터 추가
   var title = $('#add_title').val();
   var description = $('#add_description').val();
   var contents2 = $('#contents2').val();
   var phoneNumber = $('#phoneNumber').val();
   $.ajax({
   url:'/userUpdate',
   type:'GET',
   data:{email:userId,userName:userName,sub:sub,contents1:contents1,contents2:contents2,type:choiceType,phoneNumber:phoneNumber},
   success:function(result){
   console.log(result);
   if(result == 1){
   console.log("ok");
   location.href="/page/PortFolio/resultURL.html?email="+ userId + '&type=' + choiceType;
   }
   }
   });
   */




  console.log("sg");
  $scope.btnPlay = true;
  $scope.btnStop = false;
  $scope.value = 0;
  $scope.second = 0;
  $scope.minute = 0;
  $scope.hour = 0;
  $scope.ms = 10;

  function countdown() {
    $scope.value++;
    $scope.timeout = $timeout(countdown, $scope.ms);
    if ($scope.value === 100) {
      $scope.value = 0;
      $scope.second++;
    }if ($scope.second === 60) {
      $scope.second = 0;
      $scope.minute++;
    }if ($scope.minute === 60) {
      $scope.minute = 0;
      $scope.hour++;
    };
  }


  function recordStart() {
    $scope.btnPlay = false;
    $scope.btnStop = true;
    $scope.active = true; //@기준 
    $timeout.cancel($scope.timeout);
    countdown();
    $scope.value = 0;
    $scope.second = 0;
    $scope.minute = 0;
    $scope.hour = 0;
  }
  $scope.recordStop = function() {
    $scope.btnPlay = true;
    $scope.btnStop = false;
    $scope.active = false; //@기준 
    $timeout.cancel($scope.timeout);
  };


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



  var create_email = false;
  var final_transcript_array = [];
  var final_transcript = '';
  var time_transcript_array = [];
  var recognizing = false;
  var ignore_onend;
  var start_timestamp;

  var audio_context;
  var recorder;
  var fCount = 0;
  var bookmark_sign = 0;
  var bookmark_array = [];


  $scope.addBookmark = function(){
    bookmark_sign = 1;
  }

  try {
    // webkit shim
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL;

    audio_context = new AudioContext;
    __log('Audio context set up.');
    __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
  } catch (e) {
    alert('No web audio support in this browser!');
  }

  navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
    showInfo('No live audio input: ' + e);
  });

  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
//    start_button.style.display = 'inline-block'; @기준
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      fCount = 0;
      recognizing = true;
      recorder && recorder.record();
      showInfo('info_speak_now');
      //script = '';
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
      recorder && recorder.stop();
      __log('record ended');


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

      exportRecordFile();
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
          final_transcript += '\n';
          final_transcript_array[fCount] = event.results[i][0].transcript;
          time_transcript_array[fCount] = (event.timeStamp - start_timestamp)/1000;
          bookmark_array[fCount] = bookmark_sign;
          bookmark_sign = 0;
          fCount++;


        } else {
          interim_transcript += event.results[i][0].transcript;
          //interim_transcript += (event.timeStamp - start_timestamp);
          //interim_transcript += "\n";
        }
      }

      final_transcript = capitalize(final_transcript);
      final_span.innerHTML = linebreak(final_transcript);
      interim_span.innerHTML = linebreak(interim_transcript);
      //if (final_transcript || interim_transcript) {
      //  showButtons('inline-block');
      //}
    };

     //window.setInterval(function(){
     //
     //if(recognizing){
     //script += (count * 10);
     //script += ' ';
     //script += final_transcript;
     //script += interim_transcript;
     //script += '\n';
     //final_transcript = '';
     //interim_transcript='';
     //all_span.innerHTML = linebreak(script);
     //final_span.innerHTML = linebreak(final_transcript);
     //interim_span.innerHTML = linebreak(interim_transcript);
     //
     ////__log("10sec!");
     //console.log("10sec");
     //count += 1;
     //}
     //
     //}, 10000);
     //


    //window.onload = function init() {
    //  console.log("initialized");
    //
    //  try {
    //    // webkit shim
    //    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    //    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    //    window.URL = window.URL || window.webkitURL;
    //
    //    audio_context = new AudioContext;
    //    __log('Audio context set up.');
    //    __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    //  } catch (e) {
    //    alert('No web audio support in this browser!');
    //  }
    //
    //  navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
    //    showInfo('No live audio input: ' + e);
    //  });
    //};

  }

  function exportRecordFile(){
    recorder && recorder.exportWAV(function(audio) {
      // var url = URL.createObjectURL(audio);
      // var au = document.createElement('audio');
      //au.controls = true;
      //au.src = url;
      $.ajax({
        url:'http://52.69.199.91:3000/insertScript',
        type:'GET',
        data:{script:final_transcript_array,time:time_transcript_array,count:fCount, bookmark:bookmark_array},
        success:function(result){
          console.log(result);
          if(result == 1){
            console.log("ok");
          }
        }
      });

      var xhr = new XMLHttpRequest();
          xhr.open("POST", "http://52.69.199.91:3000/audioUpload", true);

          var formdata = new FormData();
          var date = new Date().getTime();
          formdata.append("typist_audio", audio,  date + '.wav');
          //xhr.setRequestHeader("Content-Type", "audio/wav");
          xhr.onload = function (e) {

          };

          xhr.send(formdata);
          /*
           var transcript_formdata = new FormData();
           transcript_formdata.append("typist_transcript", final_script, date + '.txt');
           xhr.send(transcript_formdata);
           */
          console.log("send finish");

    });
  }


  function startUserMedia(stream) {
    var input = audio_context.createMediaStreamSource(stream);
    __log('Media stream created.');

    // Uncomment if you want the audio to feedback directly
    //input.connect(audio_context.destination);
    //__log('Input connected to audio context destination.');

    recorder = new Recorder(input);
    __log('Recorder initialised.');
  }
  function __log(e, data) {
    //log.innerHTML += "\n" + e + " " + (data || '');
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



  //
  //$scope.langs =
  //  [['Afrikaans', ['af-ZA']],
  //    ['Bahasa Indonesia', ['id-ID']],
  //    ['Bahasa Melayu', ['ms-MY']],
  //    ['Català', ['ca-ES']],
  //    ['Čeština', ['cs-CZ']],
  //    ['Dansk', ['da-DK']],
  //    ['Deutsch', ['de-DE']],
  //    ['English', ['en-AU', 'Australia'],
  //      ['en-CA', 'Canada'],
  //      ['en-IN', 'India'],
  //      ['en-NZ', 'New Zealand'],
  //      ['en-ZA', 'South Africa'],
  //      ['en-GB', 'United Kingdom'],
  //      ['en-US', 'United States']],
  //    ['Español', ['es-AR', 'Argentina'],
  //      ['es-BO', 'Bolivia'],
  //      ['es-CL', 'Chile'],
  //      ['es-CO', 'Colombia'],
  //      ['es-CR', 'Costa Rica'],
  //      ['es-EC', 'Ecuador'],
  //      ['es-SV', 'El Salvador'],
  //      ['es-ES', 'España'],
  //      ['es-US', 'Estados Unidos'],
  //      ['es-GT', 'Guatemala'],
  //      ['es-HN', 'Honduras'],
  //      ['es-MX', 'México'],
  //      ['es-NI', 'Nicaragua'],
  //      ['es-PA', 'Panamá'],
  //      ['es-PY', 'Paraguay'],
  //      ['es-PE', 'Perú'],
  //      ['es-PR', 'Puerto Rico'],
  //      ['es-DO', 'República Dominicana'],
  //      ['es-UY', 'Uruguay'],
  //      ['es-VE', 'Venezuela']],
  //    ['Euskara', ['eu-ES']],
  //    ['Filipino', ['fil-PH']],
  //    ['Français', ['fr-FR']],
  //    ['Galego', ['gl-ES']],
  //    ['Hrvatski', ['hr_HR']],
  //    ['IsiZulu', ['zu-ZA']],
  //    ['Íslenska', ['is-IS']],
  //    ['Italiano', ['it-IT', 'Italia'],
  //      ['it-CH', 'Svizzera']],
  //    ['Lietuvių', ['lt-LT']],
  //    ['Magyar', ['hu-HU']],
  //    ['Nederlands', ['nl-NL']],
  //    ['Norsk bokmål', ['nb-NO']],
  //    ['Polski', ['pl-PL']],
  //    ['Português', ['pt-BR', 'Brasil'],
  //      ['pt-PT', 'Portugal']],
  //    ['Română', ['ro-RO']],
  //    ['Slovenščina', ['sl-SI']],
  //    ['Slovenčina', ['sk-SK']],
  //    ['Suomi', ['fi-FI']],
  //    ['Svenska', ['sv-SE']],
  //    ['Tiếng Việt', ['vi-VN']],
  //    ['Türkçe', ['tr-TR']],
  //    ['Ελληνικά', ['el-GR']],
  //    ['български', ['bg-BG']],
  //    ['Pусский', ['ru-RU']],
  //    ['Српски', ['sr-RS']],
  //    ['Українська', ['uk-UA']],
  //    ['한국어', ['ko-KR']],
  //    ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
  //      ['cmn-Hans-HK', '普通话 (香港)'],
  //      ['cmn-Hant-TW', '中文 (台灣)'],
  //      ['yue-Hant-HK', '粵語 (香港)']],
  //    ['日本語', ['ja-JP']],
  //    ['हिन्दी', ['hi-IN']],
  //    ['ภาษาไทย', ['th-TH']]];
  //
  //
  //
  //for (var i = 0; i < $scope.langs.length; i++) {
  //  select_language.options[i] = new Option($scope.langs[i][0], i);
  //}
  //select_language.selectedIndex = 35;
  //
  //updateCountry();
  //
  //select_language.selectedIndex = 6;
  //showInfo('info_start');
  //
  //
  //
  //$scope.updateCountry = function () {
  //  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
  //    select_dialect.remove(i);
  //  }
  //  $scope.list = langs[select_language.selectedIndex];
  //  for (i = 1; i < list.length; i++) {
  //    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  //  }
  //  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
  //};
  //
  //var create_email = false;
  //var final_transcript = '';
  //var recognizing = false;
  //var ignore_onend;
  //var start_timestamp;
  //
  //if (!('webkitSpeechRecognition' in window)) {
  //  upgrade();
  //} else {
  //  start_button.style.display = 'inline-block';
  //  var recognition = new webkitSpeechRecognition();
  //  recognition.continuous = true;
  //  recognition.interimResults = true;
  //
  //  recognition.onstart = function () {
  //    recognizing = true;
  //    showInfo('info_speak_now');
  //    //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-animate.gif';
  //  };
  //
  //  recognition.onerror = function (event) {
  //    if (event.error == 'no-speech') {
  //      //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
  //      showInfo('info_no_speech');
  //      ignore_onend = true;
  //    }
  //    if (event.error == 'audio-capture') {
  //      //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
  //      showInfo('info_no_microphone');
  //      ignore_onend = true;
  //    }
  //    if (event.error == 'not-allowed') {
  //      if (event.timeStamp - start_timestamp < 100) {
  //        showInfo('info_blocked');
  //      } else {
  //        showInfo('info_denied');
  //      }
  //      ignore_onend = true;
  //    }
  //  };
  //
  //  recognition.onend = function () {
  //    recognizing = false;
  //    if (ignore_onend) {
  //      return;
  //    }
  //    //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
  //    if (!final_transcript) {
  //      showInfo('info_start');
  //      return;
  //    }
  //    showInfo('');
  //    if (window.getSelection) {
  //      window.getSelection().removeAllRanges();
  //      $scope.range = document.createRange();
  //      range.selectNode(document.getElementById('final_span'));
  //      window.getSelection().addRange(range);
  //    }
  //    if (create_email) {
  //      $scope.create_email = false;
  //      $scope.createEmail();
  //    }
  //  };
  //
  //  recognition.onresult = function (event) {
  //    var interim_transcript = '';
  //    if (typeof(event.results) == 'undefined') {
  //      recognition.onend = null;
  //      recognition.stop();
  //      $scope.upgrade();
  //      return;
  //    }
  //    for (var i = event.resultIndex; i < event.results.length; ++i) {
  //      if (event.results[i].isFinal) {
  //        $scope.final_transcript += event.results[i][0].transcript;
  //      } else {
  //        $scope.interim_transcript += event.results[i][0].transcript;
  //      }
  //    }
  //    $scope.final_transcript = capitalize(final_transcript);
  //    $scope.final_span.innerHTML = linebreak(final_transcript);
  //    $scope.interim_span.innerHTML = linebreak(interim_transcript);
  //    if ($scope.final_transcript || $scope.interim_transcript) {
  //      showButtons('inline-block');
  //    }
  //  }
  //}
  //
  //$scope.upgrade = function () {
  //  start_button.style.visibility = 'hidden';
  //  showInfo('info_upgrade');
  //};
  //
  //$scope.two_line = /\n\n/g;
  //$scope.one_line = /\n/g;
  //
  //function linebreak(s) {
  //  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  //}
  //
  //$scope.first_char = /\S/;
  //
  //function capitalize(s) {
  //  return s.replace(first_char, function (m) {
  //    return m.toUpperCase();
  //  });
  //}
  //
  //function createEmail() {
  //  $scope.n = final_transcript.indexOf('\n');
  //  if (n < 0 || n >= 80) {
  //    $scope.n = 40 + final_transcript.substring(40).indexOf(' ');
  //  }
  //  $scope.subject = encodeURI(final_transcript.substring(0, n));
  //  $scope.body = encodeURI(final_transcript.substring(n + 1));
  //  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  //}
  //
  //$scope.copyButton = function () {
  //  if (recognizing) {
  //    $scope.recognizing = false;
  //    recognition.stop();
  //  }
  //  copy_button.style.display = 'none';
  //  copy_info.style.display = 'inline-block';
  //  showInfo('');
  //};
  //
  //$scope.emailButton = function () {
  //  if (recognizing) {
  //    $scope.create_email = true;
  //    $scope.recognizing = false;
  //    recognition.stop();
  //  } else {
  //    createEmail();
  //  }
  //  email_button.style.display = 'none';
  //  email_info.style.display = 'inline-block';
  //  showInfo('');
  //};
  //
  //$scope.startButton = function () {
  //  if (recognizing) {
  //    recognition.stop();
  //    return;
  //  }
  //  $scope.final_transcript = '';
  //  recognition.lang = select_dialect.value;
  //  recognition.start();
  //  $scope.ignore_onend = false;
  //  $scope.final_span.innerHTML = '';
  //  $scope.interim_span.innerHTML = '';
  //  //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
  //  showInfo('info_allow');
  //  showButtons('none');
  //  $scope.start_timestamp = $scope.event.timeStamp;
  //};
  //
  //function showInfo(s) {
  //  if (s) {
  //    for (var child = info.firstChild; child; child = child.nextSibling) {
  //      if (child.style) {
  //        child.style.display = child.id == s ? 'inline' : 'none';
  //      }
  //    }
  //    info.style.visibility = 'visible';
  //  } else {
  //    info.style.visibility = 'hidden';
  //  }
  //}
  //
  //var current_style;
  //
  //function showButtons(style) {
  //  if (style == current_style) {
  //    return;
  //  }
  //  current_style = style;
  //  $scope.copy_button.style.display = style;
  //  $scope.email_button.style.display = style;
  //  $scope.copy_info.style.display = 'none';
  //  $scope.email_info.style.display = 'none';
  //}

  //  $scope.email_button.style.display = style;
  //  $scope.copy_info.style.display = 'none';
  //  $scope.email_info.style.display = 'none';
  //}


}]);

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Recorder = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = require("./recorder").Recorder;

},{"./recorder":2}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Recorder = undefined;

var _inlineWorker = require('inline-worker');

var _inlineWorker2 = _interopRequireDefault(_inlineWorker);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Recorder = exports.Recorder = (function () {
    function Recorder(source, cfg) {
        var _this = this;

        _classCallCheck(this, Recorder);

        this.config = {
            bufferLen: 4096,
            numChannels: 2,
            mimeType: 'audio/wav'
        };
        this.recording = false;
        this.callbacks = {
            getBuffer: [],
            exportWAV: []
        };

        Object.assign(this.config, cfg);
        this.context = source.context;
        this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels);

        this.node.onaudioprocess = function (e) {
            if (!_this.recording) return;

            var buffer = [];
            for (var channel = 0; channel < _this.config.numChannels; channel++) {
                buffer.push(e.inputBuffer.getChannelData(channel));
            }
            _this.worker.postMessage({
                command: 'record',
                buffer: buffer
            });
        };

        source.connect(this.node);
        this.node.connect(this.context.destination); //this should not be necessary

        var self = {};
        this.worker = new _inlineWorker2.default(function () {
            var recLength = 0,
                recBuffers = [],
                sampleRate = undefined,
                numChannels = undefined;

            self.onmessage = function (e) {
                switch (e.data.command) {
                    case 'init':
                        init(e.data.config);
                        break;
                    case 'record':
                        record(e.data.buffer);
                        break;
                    case 'exportWAV':
                        exportWAV(e.data.type);
                        break;
                    case 'getBuffer':
                        getBuffer();
                        break;
                    case 'clear':
                        clear();
                        break;
                }
            };

            function init(config) {
                sampleRate = config.sampleRate;
                numChannels = config.numChannels;
                initBuffers();
            }

            function record(inputBuffer) {
                for (var channel = 0; channel < numChannels; channel++) {
                    recBuffers[channel].push(inputBuffer[channel]);
                }
                recLength += inputBuffer[0].length;
            }

            function exportWAV(type) {
                var buffers = [];
                for (var channel = 0; channel < numChannels; channel++) {
                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
                }
                var interleaved = undefined;
                if (numChannels === 2) {
                    interleaved = interleave(buffers[0], buffers[1]);
                } else {
                    interleaved = buffers[0];
                }
                var dataview = encodeWAV(interleaved);
                var audioBlob = new Blob([dataview], { type: type });

                self.postMessage({ command: 'exportWAV', data: audioBlob });
            }

            function getBuffer() {
                var buffers = [];
                for (var channel = 0; channel < numChannels; channel++) {
                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
                }
                self.postMessage({ command: 'getBuffer', data: buffers });
            }

            function clear() {
                recLength = 0;
                recBuffers = [];
                initBuffers();
            }

            function initBuffers() {
                for (var channel = 0; channel < numChannels; channel++) {
                    recBuffers[channel] = [];
                }
            }

            function mergeBuffers(recBuffers, recLength) {
                var result = new Float32Array(recLength);
                var offset = 0;
                for (var i = 0; i < recBuffers.length; i++) {
                    result.set(recBuffers[i], offset);
                    offset += recBuffers[i].length;
                }
                return result;
            }

            function interleave(inputL, inputR) {
                var length = inputL.length + inputR.length;
                var result = new Float32Array(length);

                var index = 0,
                    inputIndex = 0;

                while (index < length) {
                    result[index++] = inputL[inputIndex];
                    result[index++] = inputR[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function floatTo16BitPCM(output, offset, input) {
                for (var i = 0; i < input.length; i++, offset += 2) {
                    var s = Math.max(-1, Math.min(1, input[i]));
                    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                }
            }

            function writeString(view, offset, string) {
                for (var i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            function encodeWAV(samples) {
                var buffer = new ArrayBuffer(44 + samples.length * 2);
                var view = new DataView(buffer);

                /* RIFF identifier */
                writeString(view, 0, 'RIFF');
                /* RIFF chunk length */
                view.setUint32(4, 36 + samples.length * 2, true);
                /* RIFF type */
                writeString(view, 8, 'WAVE');
                /* format chunk identifier */
                writeString(view, 12, 'fmt ');
                /* format chunk length */
                view.setUint32(16, 16, true);
                /* sample format (raw) */
                view.setUint16(20, 1, true);
                /* channel count */
                view.setUint16(22, numChannels, true);
                /* sample rate */
                view.setUint32(24, sampleRate, true);
                /* byte rate (sample rate * block align) */
                view.setUint32(28, sampleRate * 4, true);
                /* block align (channel count * bytes per sample) */
                view.setUint16(32, numChannels * 2, true);
                /* bits per sample */
                view.setUint16(34, 16, true);
                /* data chunk identifier */
                writeString(view, 36, 'data');
                /* data chunk length */
                view.setUint32(40, samples.length * 2, true);

                floatTo16BitPCM(view, 44, samples);

                return view;
            }
        }, self);

        this.worker.postMessage({
            command: 'init',
            config: {
                sampleRate: this.context.sampleRate,
                numChannels: this.config.numChannels
            }
        });

        this.worker.onmessage = function (e) {
            var cb = _this.callbacks[e.data.command].pop();
            if (typeof cb == 'function') {
                cb(e.data.data);
            }
        };
    }

    _createClass(Recorder, [{
        key: 'record',
        value: function record() {
            this.recording = true;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.recording = false;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.worker.postMessage({ command: 'clear' });
        }
    }, {
        key: 'getBuffer',
        value: function getBuffer(cb) {
            cb = cb || this.config.callback;
            if (!cb) throw new Error('Callback not set');

            this.callbacks.getBuffer.push(cb);

            this.worker.postMessage({ command: 'getBuffer' });
        }
    }, {
        key: 'exportWAV',
        value: function exportWAV(cb, mimeType) {
            mimeType = mimeType || this.config.mimeType;
            cb = cb || this.config.callback;
            if (!cb) throw new Error('Callback not set');

            this.callbacks.exportWAV.push(cb);

            this.worker.postMessage({
                command: 'exportWAV',
                type: mimeType
            });
        }
    }], [{
        key: 'forceDownload',
        value: function forceDownload(blob, filename) {
            var url = (window.URL || window.webkitURL).createObjectURL(blob);
            var link = window.document.createElement('a');
            link.href = url;
            link.download = filename || 'output.wav';
            var click = document.createEvent("Event");
            click.initEvent("click", true, true);
            link.dispatchEvent(click);
        }
    }]);

    return Recorder;
})();

exports.default = Recorder;

},{"inline-worker":3}],3:[function(require,module,exports){
"use strict";

module.exports = require("./inline-worker");
},{"./inline-worker":4}],4:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

var InlineWorker = (function () {
  function InlineWorker(func, self) {
    var _this = this;

    _classCallCheck(this, InlineWorker);

    if (WORKER_ENABLED) {
      var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
      var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));

      return new global.Worker(url);
    }

    this.self = self;
    this.self.postMessage = function (data) {
      setTimeout(function () {
        _this.onmessage({ data: data });
      }, 0);
    };

    setTimeout(function () {
      func.call(self);
    }, 0);
  }

  _createClass(InlineWorker, {
    postMessage: {
      value: function postMessage(data) {
        var _this = this;

        setTimeout(function () {
          _this.self.onmessage({ data: data });
        }, 0);
      }
    }
  });

  return InlineWorker;
})();

module.exports = InlineWorker;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
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


  $ionicModal.fromTemplateUrl('templates/scrap-detail.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openScrapContentsModal = function () {
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


  $scope.items = [
    {
      title: '자동차 컨트롤 디자인 경향연구 - PUI 입/출력 제안',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 자동차 컨트롤 개선 사례',
          '2. 자동차 인테리어 디자인 개념변화',
          '3. 디스플레이의 활용 변화',
          '4. UX기반의 PUI/GUI 장단점 분석'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '인터렉션 분야의 시선추적 연구사례',
          dataSet: 3
        },
          {
            resourceTitle: 'PUI 환경에 대한 마이크로 인터렉션',
            dataSet: 2
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
}]);

app.directive("scrapcontentsModal", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/scrap",
    controller: "recordPageController"
  };
});

app.controller('allResourceModalController', function ($scope) {

  console.log('올리소스 컨트롤러');

  $scope.resources = [
    'img/record_list/list_imag2.png',
    'img/record_list/list_imag2.png',
    'img/record_list/list_imag2.png',
    'img/record_list/list_imag2.png'
  ];


  console.log($scope.resources);

});



app.controller('scrapViewModalController', function ($scope, $ionicModal) {

  console.log('세이브모달 컨트롤러');

  $scope.$parent.closeModal()

});



//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('scrapViewModalController', function ($scope, $ionicModal, $window, $ionicSlideBoxDelegate) {

  $scope.dev_width = $window.innerWidth;

  $scope.releaseSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(true);
  };

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
