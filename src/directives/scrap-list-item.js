app.directive("scrapListItem", function() {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/scrap-list-item.html"
  };
});
