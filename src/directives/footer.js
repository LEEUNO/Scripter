app.directive("footerSection", function () {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/footer/footer.html"
  };
});
