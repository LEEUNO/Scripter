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
