app.controller('allResourceModalController', function ($scope) {

  console.log('올리소스 컨트롤러');

  $scope.resources = [{
    images: [
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png",
      "img/record_list/list_imag2.png"
    ]
  }

  ];

  console.log($scope.resources.images);

});


