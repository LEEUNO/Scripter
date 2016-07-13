app.directive("footerSection", function () {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/footer/footer-section.html"
  };
});
