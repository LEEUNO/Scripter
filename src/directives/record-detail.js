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

    //$scope.loadMedia = function() {
    //
    //  wavesurfer.load('../src/audios/listening to the radio.mp3');
    //
    //};


    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#fc5656',
      height: 64
    });
    wavesurfer.load('audios/Urban.mp3');
    $scope.audioLength = wavesurfer.getCurrentTime();
    $scope.audioTime = wavesurfer.getDuration();

    $scope.startRecording = function () {
      wavesurfer.playPause();
    };


    var play_check = 0;

    $scope.stopCursor = function () {
      wavesurfer.stop();
    };
    $scope.pauseCursor = function () {
      if (play_check == 0) {
        $(this).attr('class', 'button icon ion-pause');
        wavesurfer.play();
        play_check = 1;
      } else if (play_check == 1) {
        $(this).attr('class', 'button icon ion-play');
        wavesurfer.pause();
        play_check = 0;
      }
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

    //wavesurfer.load('../../src/audios/listening to the radio.mp3');

    //var fileURL = "";
    //var scriptArr = [];
    //$.ajax({
    //  url: 'http://52.69.199.91:3000/imageSelect',
    //  type: 'GET',
    //  data: {recordNo: $state.params.param_no},
    //  success: function (result) {
    //    for (var i = 0; i < i < result.length; i++) {
    //      if (result.length > 1) {
    //        $("#detail_image_" + i).attr("src", result[i].image_url);
    //      } else {
    //        $("#detail_image_3").attr("src", result[i].image_url);
    //      }
    //    }
    //  }
    //});
    //
    //
    //$.ajax({
    //  url: 'http://52.69.199.91:3000/recordDetail',
    //  type: 'GET',
    //  data: {recordNo: $state.params.param_no},
    //  success: function (result) {
    //    $('#detail_title').append(result[0].title);
    //    $('#detail_date').append(result[0].date);
    //    fileURL = result[0].file_url;
    //    console.log(result);
    //    for (var i = 0; i < result.length; i++) {
    //      if (result[i].bookmark == 1) {
    //        $('#script_contents').append("<div style='position: relative;'><span style='position: absolute;'><i class='icon-bookmark'></i></span><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
    //      } else {
    //        $('#script_contents').append("<div><p class='scriptContents' id='" + i + "'>" + result[i].contents + "</p></div>");
    //      }
    //    }
    //
    //
    //    var wavesurfer = WaveSurfer.create({
    //      container: '#waveform',
    //      waveColor: '#ddd',
    //      progressColor: '#fc5656',
    //      height: 64
    //    });
    //    $scope.audioLength = wavesurfer.getCurrentTime();
    //    $scope.audioTime = wavesurfer.getDuration();
    //    $scope.startRecording = function () {
    //      wavesurfer.playPause();
    //    };
    //
    //    wavesurfer.load('../src/audios/listenling to the radio.mp3');
    //
    //    var play_check = 0;
    //
    //    $scope.stopCursor = function () {
    //      wavesurfer.stop();
    //    };
    //    $scope.pauseCursor = function () {
    //      if (play_check == 0) {
    //        $(this).attr('class', 'button icon ion-pause');
    //        wavesurfer.play();
    //        play_check = 1;
    //      } else if (play_check == 1) {
    //        $(this).attr('class', 'button icon ion-play');
    //        wavesurfer.pause();
    //        play_check = 0;
    //      }
    //    };
    //
    //    $('.scriptContents').on("click", function () {
    //      console.log("gg");
    //      if ($(this).attr('id') == "0") {
    //        console.log("0");
    //        wavesurfer.seekTo(0);
    //      } else {
    //        console.log("1");
    //        wavesurfer.seekTo(result[$(this).attr('id') - 1].time / result[result.length - 1].time);
    //      }
    //      wavesurfer.play();
    //    });
    //  }
    //});


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

  }
);
