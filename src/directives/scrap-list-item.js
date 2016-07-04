app.directive("scrapListItem", function() {
  return {
    restrict: "E",
    scope: {
      item: "="
    },
    templateUrl: "templates/directives/scrap-list-item.html"
  };
});

