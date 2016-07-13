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

app.controller('recordPageController', ['$scope','$ionicModal', '$timeout', function ($scope, $ionicModal, $cordovaCamera, $timeout) {

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
            url:'http://52.69.199.91:3000/recordAdd',
            type:'GET',
            data:{title:add_title,description:add_description,tagArr:tag,tagCount:tagCount},
            success:function(result){
              console.log(result);
              if(result == 1){
                console.log("ok");
              }
            }
          }); 
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

         $cordovaCamera.getPicture(options).then(function(imageData) {
               $scope.imgURI = "data:image/jpeg;base64," + imageData;
           }, function(err) {
               // An error occured. Show a message to the user
           });
       }


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
