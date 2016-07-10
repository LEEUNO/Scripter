app.directive("recordDist", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/record-detail.html",
    controller: "recordDetailController"
  };
});

app.controller('recordDetailController', ['$scope', '$window', '$ionicSlideBoxDelegate', function ($scope, $window, $ionicSlideBoxDelegate) {
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








  /*------------------------------
   Album Cover Slider
   --------------------------------*/
//start added by Chase
  var a = document.getElementsByTagName("a");
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
