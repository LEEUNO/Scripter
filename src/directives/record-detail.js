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
