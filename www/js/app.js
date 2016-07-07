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
      title: '김진웅 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag1.png',
      resource: {
        images: 2,
        videos: 4
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      time: '00:20:10'
    },
    {
      title: '2이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag2.png',
      resource: {
        images: 2,
        videos: 4
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      time: '00:20:10'
    },
    {
      title: '3이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag3.png',
      resource: {
        images: 2,
        videos: 4
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      time: '00:20:10'
    },
    {
      title: '4이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag4.png',
      resource: {
        images: 2,
        videos: 4
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      time: '00:20:10'
    },
    {
      title: '5이부분은 제목입니다',
      Description: '이부분은 설명입니다',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      images: 'img/record_list/list_imag5.png',
      resource: {
        images: 2,
        videos: 4
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      time: '00:20:10'
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
      title: '1 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '2 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소주제 제목입니다',
          '4. 소주123123니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '3 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소12312입니다',
          '3. 소주제 제목입니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '4 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 123123다',
          '2. 소주제 제목입니다',
          '3. 소123123입니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    },
    {
      title: '5 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소12312344목입니다',
          '3. 소주제ㄴㅇㅊㅁㄴㅇㅊㅁ입니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    }, {
      title: '6 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소ㅁㄴㅊㄴㅁ입니다',
          '2. 소주제 제목입니다',
          '3. 소주ㅊㅁㄴㅊㄴ니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    }, {
      title: '7 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주1ㅇㅇㅇ니다',
          '3. 소주ㅇㅇㅇ니다',
          '4. 소주제 제목입니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
      }
    }, {
      title: '8 스크립트 타이틀입니다.',
      date: 'Sunday, Feb 21 1:09 PM / SEOUL',
      resource: {
        recommended: 2
      },
      preview: {
        index: [
          '1. 소주제 제목입니다',
          '2. 소주제 제목입니다',
          '3. 소2323입니다',
          '4. 소주23232444니다'
        ],
        images: [
          'img/record_list/list_imag5.png',
          'img/record_list/list_imag3.png',
          'img/record_list/list_imag2.png'
        ],
        recommended: [{
          resourceTitle: '추천리소스제목입니다',
          dataSet: 3
        },
          {
            resourceTitle: '추천리소스제목입니다',
            dataSet: 2
          }]
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
