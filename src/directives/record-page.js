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

app.controller('recordPageController', ['$scope', function ($scope) {
  console.log("ok");

  $scope.langs =
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

  for (var i = 0; i < langs.length; i++) {
    $scope.select_language.options[i] = new Option(langs[i][0], i);
  }
  $scope.select_language.selectedIndex = 35;
  $scope.updateCountry();
  $scope.select_dialect.selectedIndex = 6;
  showInfo('info_start');

  $scope.updateCountry = function () {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
      $scope.select_dialect.remove(i);
    }
    $scope.list = langs[select_language.selectedIndex];
    for (i = 1; i < list.length; i++) {
      $scope.select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    $scope.select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
  };

  $scope.create_email = false;
  $scope.final_transcript = '';
  $scope.recognizing = false;
  var ignore_onend;
  var start_timestamp;

  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    $scope.start_button.style.display = 'inline-block';
    $scope.recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
      showInfo('info_speak_now');
      //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-animate.gif';
    };

    recognition.onerror = function (event) {
      if (event.error == 'no-speech') {
        //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
        showInfo('info_no_speech');
        ignore_onend = true;
      }
      if (event.error == 'audio-capture') {
        //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
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
      $scope.recognizing = false;
      if (ignore_onend) {
        return;
      }
      //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
      if (!final_transcript) {
        showInfo('info_start');
        return;
      }
      showInfo('');
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
        $scope.range = document.createRange();
        range.selectNode(document.getElementById('final_span'));
        window.getSelection().addRange(range);
      }
      if (create_email) {
        $scope.create_email = false;
        $scope.createEmail();
      }
    };

    recognition.onresult = function (event) {
      var interim_transcript = '';
      if (typeof(event.results) == 'undefined') {
        recognition.onend = null;
        recognition.stop();
        $scope.upgrade();
        return;
      }
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          $scope.final_transcript += event.results[i][0].transcript;
        } else {
          $scope.interim_transcript += event.results[i][0].transcript;
        }
      }
      $scope.final_transcript = capitalize(final_transcript);
      $scope.final_span.innerHTML = linebreak(final_transcript);
      $scope.interim_span.innerHTML = linebreak(interim_transcript);
      if ($scope.final_transcript || $scope.interim_transcript) {
        showButtons('inline-block');
      }
    }
  }

  $scope.upgrade = function () {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
  }

  $scope.two_line = /\n\n/g;
  $scope.one_line = /\n/g;

  function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  }

  $scope.first_char = /\S/;

  function capitalize(s) {
    return s.replace(first_char, function (m) {
      return m.toUpperCase();
    });
  }

  function createEmail() {
    $scope.n = final_transcript.indexOf('\n');
    if (n < 0 || n >= 80) {
      $scope.n = 40 + final_transcript.substring(40).indexOf(' ');
    }
    $scope.subject = encodeURI(final_transcript.substring(0, n));
    $scope.body = encodeURI(final_transcript.substring(n + 1));
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  }

  $scope.copyButton = function () {
    if (recognizing) {
      $scope.recognizing = false;
      recognition.stop();
    }
    copy_button.style.display = 'none';
    copy_info.style.display = 'inline-block';
    showInfo('');
  };

  $scope.emailButton = function () {
    if (recognizing) {
      $scope.create_email = true;
      $scope.recognizing = false;
      recognition.stop();
    } else {
      createEmail();
    }
    email_button.style.display = 'none';
    email_info.style.display = 'inline-block';
    showInfo('');
  };

  $scope.startButton = function (event) {
    if (recognizing) {
      recognition.stop();
      return;
    }
    $scope.final_transcript = '';
    recognition.lang = select_dialect.value;
    recognition.start();
    $scope.ignore_onend = false;
    $scope.final_span.innerHTML = '';
    $scope.interim_span.innerHTML = '';
    //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
    showInfo('info_allow');
    showButtons('none');
    $scope.start_timestamp = $scope.event.timeStamp;
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

  var current_style;

  function showButtons(style) {
    if (style == current_style) {
      return;
    }
    current_style = style;
    $scope.copy_button.style.display = style;
    $scope.email_button.style.display = style;
    $scope.copy_info.style.display = 'none';
    $scope.email_info.style.display = 'none';
  }


}]);
