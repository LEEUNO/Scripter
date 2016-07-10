app.directive("scrapcontentsModal", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/scrap",
    controller: "recordPageController"
  };
});
