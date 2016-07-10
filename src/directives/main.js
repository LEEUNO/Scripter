app.directive("mainSection", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/main.html"
  };
});
