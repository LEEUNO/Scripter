(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/browse.html",
    "<ion-view view-title=\"{{ pageTitle }}\" class=\"browse\">\n" +
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
    "  <ion-content>\n" +
    "\n" +
    "\n" +
    "    <ion-slide-box on-slide-changed=\"selectItem($index)\" active-slide=\"selected\">\n" +
    "      <ion-slide>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"box yellow\"><h1>Record File</h1></div>\n" +
    "        <record-page></record-page>\n" +
    "\n" +
    "      </ion-slide>\n" +
    "      <ion-slide>\n" +
    "\n" +
    "        <div class=\"box yellow\"><h1>Scrap Book</h1></div>\n" +
    "      </ion-slide>\n" +
    "\n" +
    "      <ion-slide>\n" +
    "        3\n" +
    "        <div class=\"box pink\"><h1>Memory</h1></div>\n" +
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
    "        <!--<ion-item menu-close href=\"#/app/search\">-->\n" +
    "          <!--Search-->\n" +
    "        <!--</ion-item>-->\n" +
    "        <ion-item menu-close href=\"#/app/browse\">\n" +
    "          record\n" +
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

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/directives/record-item.html",
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/directives/record-list.html",
    "");
}]);
})();

(function(module) {
try { module = angular.module("bdApp"); }
catch(err) { module = angular.module("bdApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("www/templates/directives/record-page.html",
    "<div class=\"browser-landing\" id=\"main\">\n" +
    "  <!--<div class=\"compact marquee-stacked\" id=\"marquee\">-->\n" +
    "  <!--<div class=\"marquee-copy\">-->\n" +
    "  <!--<h1>-->\n" +
    "  <!--<a class=\"c1\" href=\"http://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html\">Web-->\n" +
    "  <!--Speech API</a> Demonstration-->\n" +
    "  <!--</h1>-->\n" +
    "  <!--</div>-->\n" +
    "  <!--</div>-->\n" +
    "  <div class=\"compact marquee\">\n" +
    "    <div id=\"info\" style=\"visibility: visible;\">\n" +
    "      <p id=\"info_start\" style=\"display: inline;\">\n" +
    "        녹음 버튼을 누르면 녹음이 시작됩니다\n" +
    "      </p>\n" +
    "      <p id=\"info_speak_now\" style=\"display:none\">\n" +
    "        레코딩중...\n" +
    "      </p>\n" +
    "      <p id=\"info_no_speech\" style=\"display:none\">\n" +
    "        No speech was detected. You may need to adjust your <a\n" +
    "        href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">microphone\n" +
    "        settings</a>.\n" +
    "      </p>\n" +
    "      <p id=\"info_no_microphone\" style=\"display:none\">\n" +
    "        No microphone was found. Ensure that a microphone is installed and that\n" +
    "        <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">\n" +
    "          microphone settings</a> are configured correctly.\n" +
    "      </p>\n" +
    "      <p id=\"info_allow\" style=\"display:none\">\n" +
    "        Click the \"Allow\" button above to enable your microphone.\n" +
    "      </p>\n" +
    "      <p id=\"info_denied\" style=\"display:none\">\n" +
    "        Permission to use microphone was denied.\n" +
    "      </p>\n" +
    "      <p id=\"info_blocked\" style=\"display:none\">\n" +
    "        Permission to use microphone is blocked. To change, go to\n" +
    "        chrome://settings/contentExceptions#media-stream\n" +
    "      </p>\n" +
    "      <p id=\"info_upgrade\" style=\"display:none\">\n" +
    "        Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a>\n" +
    "        version 25 or later.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"results\">\n" +
    "      <span class=\"final\" id=\"final_span\"></span> <span class=\"interim\" id=\"interim_span\"></span>\n" +
    "    </div>\n" +
    "    <div id=\"div_start\">\n" +
    "      <button id=\"start_button\" onclick=\"startButton(event)\" style=\"display: block;\">녹음</button>\n" +
    "    </div>\n" +
    "    <!--<div id=\"copy\">-->\n" +
    "      <!--<button class=\"button\" id=\"copy_button\" ng-click=\"copyButton()\">Copy and Paste</button>-->\n" +
    "      <!--<div id=\"copy_info\">-->\n" +
    "        <!--<p>-->\n" +
    "          <!--Press Control-C to copy text.-->\n" +
    "        <!--</p>-->\n" +
    "        <!--<p>-->\n" +
    "          <!--(Command-C on Mac.)-->\n" +
    "        <!--</p>-->\n" +
    "      <!--</div>-->\n" +
    "      <!--<button class=\"button\" id=\"email_button\" ng-click=\"emailButton()\">Create-->\n" +
    "        <!--Email-->\n" +
    "      <!--</button>-->\n" +
    "      <!--<div id=\"email_info\">-->\n" +
    "        <!--<p>-->\n" +
    "          <!--Text sent to default email application.-->\n" +
    "        <!--</p>-->\n" +
    "        <!--<p>-->\n" +
    "          <!--(See chrome://settings/handlers to change.)-->\n" +
    "        <!--</p>-->\n" +
    "      <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <!--<select ng-model=\"mainLangs\" ng-options=\"lang.county for lang in langs\"></select>-->\n" +
    "    <div class=\"compact marquee\" id=\"div_language\" style=\"display: none\">\n" +
    "      <select id=\"select_language\">\n" +
    "        <option value=\"0\">Afrikaans</option>\n" +
    "        <option value=\"1\">Bahasa Indonesia</option>\n" +
    "        <option value=\"2\">Bahasa Melayu</option>\n" +
    "        <option value=\"3\">Català</option>\n" +
    "        <option value=\"4\">Čeština</option>\n" +
    "        <option value=\"5\">Dansk</option>\n" +
    "        <option value=\"6\">Deutsch</option>\n" +
    "        <option value=\"7\">English</option>\n" +
    "        <option value=\"8\">Español</option>\n" +
    "        <option value=\"9\">Euskara</option>\n" +
    "        <option value=\"10\">Filipino</option>\n" +
    "        <option value=\"11\">Français</option>\n" +
    "        <option value=\"12\">Galego</option>\n" +
    "        <option value=\"13\">Hrvatski</option>\n" +
    "        <option value=\"14\">IsiZulu</option>\n" +
    "        <option value=\"15\">Íslenska</option>\n" +
    "        <option value=\"16\">Italiano</option>\n" +
    "        <option value=\"17\">Lietuvių</option>\n" +
    "        <option value=\"18\">Magyar</option>\n" +
    "        <option value=\"19\">Nederlands</option>\n" +
    "        <option value=\"20\">Norsk bokmål</option>\n" +
    "        <option value=\"21\">Polski</option>\n" +
    "        <option value=\"22\">Português</option>\n" +
    "        <option value=\"23\">Română</option>\n" +
    "        <option value=\"24\">Slovenščina</option>\n" +
    "        <option value=\"25\">Slovenčina</option>\n" +
    "        <option value=\"26\">Suomi</option>\n" +
    "        <option value=\"27\">Svenska</option>\n" +
    "        <option value=\"28\">Tiếng Việt</option>\n" +
    "        <option value=\"29\">Türkçe</option>\n" +
    "        <option value=\"30\">Ελληνικά</option>\n" +
    "        <option value=\"31\">български</option>\n" +
    "        <option value=\"32\">Pусский</option>\n" +
    "        <option value=\"33\">Српски</option>\n" +
    "        <option value=\"34\">Українська</option>\n" +
    "        <option value=\"35\">한국어</option>\n" +
    "        <option value=\"36\">中文</option>\n" +
    "        <option value=\"37\">日本語</option>\n" +
    "        <option value=\"38\">हिन्दी</option>\n" +
    "        <option value=\"39\">ภาษาไทย</option>\n" +
    "      </select>&nbsp;&nbsp;\n" +
    "\n" +
    "      <select id=\"select_dialect\" style=\"visibility: visible;\">\n" +
    "        <option value=\"en-AU\">Australia</option>\n" +
    "        <option value=\"en-CA\">Canada</option>\n" +
    "        <option value=\"en-IN\">India</option>\n" +
    "        <option value=\"en-NZ\">New Zealand</option>\n" +
    "        <option value=\"en-ZA\">South Africa</option>\n" +
    "        <option value=\"en-GB\">United Kingdom</option>\n" +
    "        <option value=\"en-US\">United States</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();
