app.directive("recordListItem", function() {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "templates/directives/record-list-item.html"
  };
});
