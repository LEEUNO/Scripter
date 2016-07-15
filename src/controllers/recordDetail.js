app.controller('recordDetailController', function ($scope, $window) {
  //console.log("recordDetailController");

  //@기준     
  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'black',
    progressColor: 'grey',
    height:64
  });

  var audioLength = wavesurfer.getCurrentTime();
  var audioTime = wavesurfer.getDuration();
  $scope.startRecording = function(){
    wavesurfer.playPause();
  };

  $scope.moveCursor = function(num){
   
   wavesurfer.seekTo(num); 
   wavesurfer.play();
  };

  
  wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
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


});
