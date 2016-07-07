// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

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
        StatusBar.styleBlackTranslucent();

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
            templateUrl: 'templates/directives/record-detail.html',
            controller: 'recordDetailController'
          }
        }
      })
      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
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

app.directive("footerSection", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/footer/footer.html"
  };
});

app.directive("recordDist", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/record-detail.html",
    controller: "recordDetailController"
  };
});

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
      title: '인터랙션 연구분야의 시선추적 활용사례',
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
      images: 'img/record_list/list_imag5.png',
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
      images: 'img/record_list/list_imag5.png',
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
      images: 'img/record_list/list_imag5.png',
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

app.controller('recordPageController', ['$scope','$ionicModal','$cordovaMedia', function ($scope, $ionicModal, $cordovaMedia) {

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
    $timeout.cancel($scope.timeout);
  };






// 이구간까지 스탑워치 기능 @기준
  //
  //var src = "../src/Urban.mp3";
  //var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
  //var my_media = new Media('cdvfile://localhost/temporary/recording.mp3');
  //
  //
  //var iOSPlayOptions = {
  //  numberOfLoops: 2,
  //  playAudioWhenScreenIsLocked: false
  //};
  //media.play(iOSPlayOptions); // iOS only!
  //media.play(); // Android
  //
  //media.pause();
  //
  //media.stop();
  //
  //media.release();
  //
  //media.seekTo(5000); // milliseconds value
  //
  //media.setVolume(0.5);
  //
  //media.startRecord();
  //
  //media.stopRecord();
  //
  //// media.getDuration(media); not working yet
  //
  //// media.getCurrentPosition().then(...); not working yet

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
  var final_transcript = '';
  var recognizing = false;
  var ignore_onend;
  var start_timestamp;


  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
      showInfo('info_speak_now');
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
    start_button.style.visibility = 'hidden';
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


}]);

app.directive("scrapListItem", function() {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/scrap-list-item.html"
  };
});


app.directive("scrapList", function () {
  return {
    restrict: "E",
    templateUrl: "templates/directives/scrap-list.html",
    controller: "scrapListController"
  };
});

app.controller('scrapListController', ['$scope', '$window', '$ionicModal', function ($scope, $window, $ionicModal) {
  $scope.dev_width = $window.innerWidth;
  $scope.preIndex = 0;

  $scope.previewCheck = function (index) {
    $scope.preIndex = index;
    console.log($scope.preIndex);
  };

  //$scope.selectItem = function (item) {
  //  item.selected = !item.selected;
  //  var selectedItems = {};
  //  for (var g of $scope.items) {
  //    selectedItems[g.id] = g.selected;
  //  }
  //  storage.set('selectedGoals', selectedGoals);
  //};

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

app.controller('MainController', function ($scope, $window, $ionicSlideBoxDelegate, $ionicTabsDelegate) {
  $scope.dev_width = $window.innerWidth;
  $scope.navTitle = '';


  $scope.pageTitle = "Record File";
  $scope.selected = 0;


  if ($scope.dev_width < 640) {
    $scope.navTitle = '<img style="margin-top: 8px; width:80px; height: 28px;"  class="title-image" src="img/logo.png" />';
  } else {
    $scope.navTitle = '<img style="z-index: 100; position: absolute; top: 10px; left: 20px; width:80px; height: 28px;"  class="title-image" src="img/logo.png" />';
  }

  $scope.recordIcon = '<i class="icon-record"></i>';
  $scope.scrapIcon = '<i class="icon-scrap"></i>';
  $scope.memoryIcon = '<i class="icon-memory"></i>';
  console.log("MainController");


  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  if ($scope.dev_width < 640) {
    $scope.pageTitle = "";
  }

  $scope.selectTabWithIndex = function (index) {
    $scope.selected = index;
    $ionicTabsDelegate.select(index);

    if ($scope.dev_width < 640) {
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

  $scope.navStyle = {
    'color': '#e4ff2b',
    'background-color': '#242526'
  };

  //$scope.selectItem = function (index) {
  //  $scope.selected = index;
  //
  //
  //  if ($scope.dev_width > 640) {
  //    return;
  //  } else {
  //    if ($scope.selected == 0) {
  //      $scope.pageTitle = "Record File";
  //    } else if ($scope.selected == 1) {
  //      $scope.pageTitle = "Scrap Book";
  //    } else {
  //      $scope.pageTitle = "Memory";
  //    }
  //    console.log($scope.selected);
  //  }
  //}


});

app.controller('recordController', function ($scope) {
  console.log("recordController");


});

app.controller('recordDetailController', function ($scope) {
  console.log("recordDetailController");


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



//app.directive('main', function () {
//  return {
//    templateUrl: 'templates/browse.html',
//    controller: 'MainController'
//  };
//});

app.controller('scrapViewModalController', function ($scope, $ionicModal) {

  $scope.dev_width = $window.innerWidth;
  //$scope.dev_height = $window.innerHeight;

  $scope.lockSlide = function () {
    $ionicSlideBoxDelegate.enableSlide(false);
  };


  $scope.pageTitle = "Record File";

  $scope.selected = 0;

  if ($scope.dev_width > 640) {
    $scope.pageTitle = "";
  }

  $scope.selectTabWithIndex = function (index) {
    $scope.selected = index;
    $ionicTabsDelegate.select(index);

    if ($scope.dev_width > 640) {
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

  //$scope.selectItem = function (index) {
  //  $scope.selected = index;
  //
  //
  //  if ($scope.dev_width > 640) {
  //    return;
  //  } else {
  //    if ($scope.selected == 0) {
  //      $scope.pageTitle = "Record File";
  //    } else if ($scope.selected == 1) {
  //      $scope.pageTitle = "Scrap Book";
  //    } else {
  //      $scope.pageTitle = "Memory";
  //    }
  //    console.log($scope.selected);
  //  }
  //}


});
