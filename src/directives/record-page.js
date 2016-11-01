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
  $scope.items = {
    images: [
      'img/scrap-img/scrap-1.png',
      'img/scrap-img/scrap-2.png',
      'img/scrap-img/scrap-3.png',
      'img/scrap-img/scrap-4.png',
      'img/scrap-img/scrap-5.png',
      'img/scrap-img/scrap-6.png',
      'img/scrap-img/scrap-7.png',
      'img/scrap-img/scrap-8.png'
    ]
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
