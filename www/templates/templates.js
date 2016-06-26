(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/browse.html",
    "<ion-view view-title=\"Browse\">\n" +
    "  <div class=\"tabs tabs-icon-only\">\n" +
    "    <a class=\"tab-item\"\n" +
    "       ng-class=\"{active: selected === 0}\"\n" +
    "       ng-click=\"selected = 0\">\n" +
    "      <!--<i class=\"icon ion-home\"></i>-->\n" +
    "      <p>Record File</p>\n" +
    "    </a>\n" +
    "    <a class=\"tab-item\"\n" +
    "       ng-class=\"{active: selected === 1}\"\n" +
    "       ng-click=\"selected = 1\">\n" +
    "      <!--<i class=\"icon ion-star\"></i>-->\n" +
    "      <p>Scrap Book</p>\n" +
    "    </a>\n" +
    "    <a class=\"tab-item\"\n" +
    "       ng-class=\"{active: selected === 2}\"\n" +
    "       ng-click=\"selected = 2\">\n" +
    "      <!--<i class=\"icon ion-gear-a\"></i>-->\n" +
    "      <p>Momory</p>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <ion-content class=\"browse\">\n" +
    "\n" +
    "\n" +
    "    <ion-slide-box on-slide-changed=\"selectItem($index)\" active-slide=\"selected\">\n" +
    "      <ion-slide>\n" +
    "        <div class=\"box blue\"><h1>BLUE</h1></div>\n" +
    "        <h1>Browse</h1>\n" +
    "\n" +
    "      </ion-slide>\n" +
    "      <ion-slide>\n" +
    "        <div class=\"box yellow\"><h1>YELLOW</h1></div>\n" +
    "      </ion-slide>\n" +
    "      <ion-slide>\n" +
    "        <div class=\"box pink\"><h1>PINK</h1></div>\n" +
    "      </ion-slide>\n" +
    "    </ion-slide-box>\n" +
    "\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/login.html",
    "<ion-modal-view>\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">Login</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button button-clear\" ng-click=\"closeLogin()\">Close</button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    <form ng-submit=\"doLogin()\">\n" +
    "      <div class=\"list\">\n" +
    "        <label class=\"item item-input\">\n" +
    "          <span class=\"input-label\">Username</span>\n" +
    "          <input type=\"text\" ng-model=\"loginData.username\">\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "          <span class=\"input-label\">Password</span>\n" +
    "          <input type=\"password\" ng-model=\"loginData.password\">\n" +
    "        </label>\n" +
    "        <label class=\"item\">\n" +
    "          <button class=\"button button-block button-positive\" type=\"submit\">Log in</button>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-modal-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/menu.html",
    "<ion-side-menus enable-menu-with-back-views=\"false\">\n" +
    "  <ion-side-menu-content>\n" +
    "    <ion-nav-bar class=\"bar-stable\">\n" +
    "      <ion-nav-back-button>\n" +
    "      </ion-nav-back-button>\n" +
    "\n" +
    "      <ion-nav-buttons side=\"left\">\n" +
    "        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n" +
    "        </button>\n" +
    "      </ion-nav-buttons>\n" +
    "    </ion-nav-bar>\n" +
    "    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n" +
    "  </ion-side-menu-content>\n" +
    "\n" +
    "  <ion-side-menu side=\"left\">\n" +
    "    <ion-header-bar class=\"bar-stable\">\n" +
    "      <h1 class=\"title\">Left</h1>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "      <ion-list>\n" +
    "        <ion-item menu-close ng-click=\"login()\">\n" +
    "          Login\n" +
    "        </ion-item>\n" +
    "        <ion-item menu-close href=\"#/app/search\">\n" +
    "          Search\n" +
    "        </ion-item>\n" +
    "        <ion-item menu-close href=\"#/app/browse\">\n" +
    "          Browse\n" +
    "        </ion-item>\n" +
    "        <ion-item menu-close href=\"#/app/playlists\">\n" +
    "          Playlists\n" +
    "        </ion-item>\n" +
    "      </ion-list>\n" +
    "    </ion-content>\n" +
    "  </ion-side-menu>\n" +
    "</ion-side-menus>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/playlist.html",
    "<ion-view view-title=\"Playlist\">\n" +
    "  <ion-content>\n" +
    "    <h1>Playlist</h1>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/playlists.html",
    "<ion-view view-title=\"Playlists\">\n" +
    "  <ion-content>\n" +
    "    <ion-list>\n" +
    "      <ion-item ng-repeat=\"playlist in playlists\" href=\"#/app/playlists/{{playlist.id}}\">\n" +
    "        {{playlist.title}}\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/search.html",
    "<ion-view view-title=\"Search\">\n" +
    "  <ion-content>\n" +
    "    <h1>Search</h1>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/test.html",
    "<h1>test.html</h1>\n" +
    "");
}]);
})();
