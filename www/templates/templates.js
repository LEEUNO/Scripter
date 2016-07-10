(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/browse.html",
    "<ion-view view-title=\"{{navTitle}}\" class=\"browse\">\n" +
    "  <!--contents-->\n" +
    "\n" +
    "  <ion-content\n" +
    "    scroll-sista=\"header-tabs\"\n" +
    "    ng-class=\"{'has-subheader':dev_width > 640, 'has-tabs-top':dev_width < 640}\">\n" +
    "    <div class=\"header-background\"\n" +
    "         ng-hide=\"dev_width < 640\">\n" +
    "    </div>\n" +
    "\n" +
    "    <img src=\"../img/nav-shadow.png\" class=\"nav-shadow\"\n" +
    "         ng-hide=\"dev_width < 640\">\n" +
    "    <div class=\"content-wrapper\">\n" +
    "      <div class=\"header-background-m\"\n" +
    "           ng-hide=\"dev_width > 640\">\n" +
    "      </div>\n" +
    "      <div class=\"shadow-wrapper\"\n" +
    "           ng-style=\"(dev_width < 640) ? {'border-radius': '12px',\n" +
    "    'margin': '0 7px'}:{'border-radius': '12px' }\">\n" +
    "        <div class=\"header\">\n" +
    "          <div class=\"header-wrap\"\n" +
    "               ng-style=\" (dev_width > 640) ? { 'margin-bottom':'10px', 'height':'90px', 'padding-top':'40px',\n" +
    "                'border-bottom':'1px solid #ededed' } : {'transformY':'10px'} \">\n" +
    "\n" +
    "            <h3 ng-hide=\"dev_width < 640\"><i class=\" header-icon\"\n" +
    "                                             ng-class=\"{'icon-record':selected === 0, 'icon-scrap': selected === 1, 'icon-memory':selected === 2 }\"></i>{{pageTitle}}\n" +
    "            </h3>\n" +
    "\n" +
    "            <div class=\"search-bar\"\n" +
    "                 ng-class=\"{'header-mobile':dev_width < 640, 'header-web':dev_width > 640}\"\n" +
    "                 ng-hide=\"selected === 2\">\n" +
    "              <i class=\"icon-card\"\n" +
    "                 ng-show=\"dev_width > 640\"></i>\n" +
    "\n" +
    "              <div class=\"select-option\"\n" +
    "                   ng-show=\"dev_width > 640\">\n" +
    "                <select>\n" +
    "                  <option selected> 전체검색</option>\n" +
    "                  <option>제목검색</option>\n" +
    "                  <option>내용검색</option>\n" +
    "                </select>\n" +
    "                <i class=\"ion-chevron-down\"></i>\n" +
    "              </div>\n" +
    "              <!--<div -->\n" +
    "              <!--ng-show=\"dev_width > 640\">-->\n" +
    "              <!--<form name=\"searchOption\">-->\n" +
    "              <!--<select name=\"job\">-->\n" +
    "              <!--<option value=\"\" selected=\"selected\">검색옵션</option>-->\n" +
    "              <!--<option value=\"\">All</option>-->\n" +
    "              <!--<option value=\"\">Title</option>-->\n" +
    "              <!--<option value=\"\">Content</option>-->\n" +
    "              <!--</select>-->\n" +
    "              <!--<i class=\"ion-chevron-down\"></i>-->\n" +
    "              <!--</form>-->\n" +
    "              <!--</div>-->\n" +
    "\n" +
    "\n" +
    "              <div class=\"sc-bar\"\n" +
    "                   ng-style=\" (dev_width < 640) ? { 'width':'100%', 'padding':'12px 20px' } : {'transformY':'10px'}\">\n" +
    "                <label class=\"item item-input\">\n" +
    "                  <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                  <input type=\"text\" placeholder=\"Search\">\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <ion-slide-box on-slide-changed=\"selectItem($index)\" active-slide=\"selected\" on-drag=\"lockSlide()\">\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "\n" +
    "            <record-list></record-list>\n" +
    "\n" +
    "          </ion-slide>\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "            <scrap-list></scrap-list>\n" +
    "          </ion-slide>\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "            3\n" +
    "            <div class=\"box pink\"><h1>Memory</h1></div>\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"paper-pointer\"\n" +
    "             ng-style=\"(dev_width > 640) ? {'background-color': '#242526'}:{'background-color':'#e5e5e5'}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <footer-section\n" +
    "        ng-hide=\"dev_width < 640\"></footer-section>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"footer-background\"\n" +
    "         ng-hide=\"dev_width < 640\">\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "\n" +
    "  <!--tabs-->\n" +
    "\n" +
    "  <ion-tabs class=\"tabs-style tabs-top tabs-icon-top\"\n" +
    "            ng-style=\" (dev_width > 640) ? { 'transformY':'20px' } : {'transformY':'10px'}\">\n" +
    "    <ion-tab title=\"Record File\"\n" +
    "             class=\"tabs-style\"\n" +
    "             icon-on=\"icon-record\"\n" +
    "             ng-class=\"{active: selected === 0,\n" +
    "             'active-color': selected === 0}\"\n" +
    "             ng-click=\"selectTabWithIndex(0)\"\n" +
    "             ng-style=\" (dev_width > 640) ? { 'padding-left':'550px' }:{'padding-left':'0'} \">\n" +
    "    </ion-tab>\n" +
    "\n" +
    "    <ion-tab title=\"Scrap Book\"\n" +
    "             class=\"tabs-style\"\n" +
    "             icon-on=\"icon-scrap\"\n" +
    "             ng-class=\"{active: selected === 1,\n" +
    "             'active-color': selected === 1}\"\n" +
    "             ng-click=\"selectTabWithIndex(1)\">\n" +
    "    </ion-tab>\n" +
    "    <ion-tab title=\"Memory\"\n" +
    "             class=\"tabs-style\"\n" +
    "             icon-on=\"icon-memory\"\n" +
    "             ng-class=\"{active: selected === 2,\n" +
    "             'active-color': selected === 2}\"\n" +
    "             ng-click=\"selectTabWithIndex(2)\">\n" +
    "    </ion-tab>\n" +
    "  </ion-tabs>\n" +
    "\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/login.html",
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
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/menu.html",
    "<ion-side-menus enable-menu-with-back-views=\"false\">\n" +
    "  <ion-side-menu-content>\n" +
    "    <ion-nav-bar class=\"bar-stable\">\n" +
    "      <ion-nav-back-button>\n" +
    "      </ion-nav-back-button>\n" +
    "\n" +
    "      <ion-nav-buttons side=\"left\">\n" +
    "        <button class=\"button button-icon button-clear ion-pricetag\" menu-toggle=\"left\">\n" +
    "        </button>\n" +
    "      </ion-nav-buttons>\n" +
    "    </ion-nav-bar>\n" +
    "    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n" +
    "  </ion-side-menu-content>\n" +
    "\n" +
    "  <ion-side-menu side=\"left\">\n" +
    "    <!--<ion-header-bar class=\"bar-stable\">-->\n" +
    "      <!--<h1 class=\"title\">Left</h1>-->\n" +
    "    <!--</ion-header-bar>-->\n" +
    "    <ion-content>\n" +
    "      <br><br>\n" +
    "      <ion-label primary fixed>태그관리</ion-label>\n" +
    "\n" +
    "      <label class=\"item item-input\">\n" +
    "        <i class=\"icon ion-search placeholder-icon\" ></i>\n" +
    "        <input type=\"search\" placeholder=\"search\" ng-model=\"searchQuery\" />\n" +
    "      </label>\n" +
    "\n" +
    "      <ion-list>\n" +
    "\n" +
    "        <ion-item ng-repeat=\"menu in menulist | filter:searchQuery\">\n" +
    "          {{menu.name}}\n" +
    "        </ion-item>\n" +
    "\n" +
    "      </ion-list>\n" +
    "    </ion-content>\n" +
    "  </ion-side-menu>\n" +
    "</ion-side-menus>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/playlist.html",
    "<ion-view view-title=\"Playlist\">\n" +
    "  <ion-content>\n" +
    "    <h1>Playlist</h1>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/playlists.html",
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
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/record-detail.html",
    "<ion-view class=\"record-detail\">\n" +
    "\n" +
    "  <ion-header-bar align-title=\"left\" class=\"bar-positive\">\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "\n" +
    "  <ion-content scroll=\"{{data.allowScroll}}\">\n" +
    "    <div class=\"header-background\">\n" +
    "    </div>\n" +
    "    <div class=\"record-derail-wrapper\" style=\"margin-top: {{margin.top}}\">\n" +
    "\n" +
    "      <h1>이미지 프리뷰</h1>\n" +
    "      <div class=\"record-images\">\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n" +
    "          <ion-slide ng-repeat=\"image in items[preIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"#\">\n" +
    "\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "      </div>\n" +
    "\n" +
    "      <h1>디테일 페이지입니다</h1>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-view>\n" +
    "\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/scrap-contents.html",
    "<ion-view class=\"scrpa-contents\">\n" +
    "  <ion-content>\n" +
    "\n" +
    "    <h1>스크랩컨텐츠</h1>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/search.html",
    "<ion-view view-title=\"Search\">\n" +
    "  <ion-content>\n" +
    "    <h1>Search</h1>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/test.html",
    "<h1>test.html</h1>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/record-list-item.html",
    "<a href=\"#/app/record-detail\">\n" +
    "  <div class=\"record-item\">\n" +
    "    <img src=\"{{item.images}}\" alt=\"#\">\n" +
    "    <div class=\"content-wrap\"\n" +
    "         ng-style=\"(dev_width > 640) ? {'padding': '25px'}:{'padding': '15px'}\">\n" +
    "      <div class=\"contents\" ng-class=\"{'content-320px': dev_width < 322 }\">\n" +
    "        <p class=\"date\"> {{ item.date }} </p>\n" +
    "        <h1 class=\"title\"> {{ item.title }} </h1>\n" +
    "        <div class=\"des-section\">\n" +
    "        <p class=\"description\"> {{ item.Description }} </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <label class=\"tag\"\n" +
    "             ng-style=\"(dev_width > 640) ? {'left': '25px'}:{'left': '5px'}\">\n" +
    "        <span ng-repeat=\"tag in item.tags \">{{ tag }}</span></label>\n" +
    "      <div class=\"sub-contents\" ng-style=\"(dev_width > 640) ? {'right': '25px'}:{'right': '15px'}\">\n" +
    "        <!--<div class=\"noti\"> images {{ item.resource.images}}</div>\n" +
    "        <div class=\"noti\"> videos {{item.resource.videos}}</div>\n" +
    "        -->\n" +
    "        <div class=\"time\"> {{ item.time }}</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</a>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/record-list.html",
    "<div class=\"record-page-wrap\">\n" +
    "\n" +
    "  <ion-item class=\"add-btn\"\n" +
    "            href=\"#/app/record-page\"\n" +
    "            ng-hide=\"dev_width > 640\">\n" +
    "    <span style=\"padding-left: 40px; background-color: transparent; \"><i class=\"ion-plus-round\"></i> Add Record</span>\n" +
    "\n" +
    "  </ion-item>\n" +
    "\n" +
    "\n" +
    "  <ion-list class=\"record-items\">\n" +
    "    <ion-item class=\"card\" ng-repeat=\"item in items\" ng-click=\"viewRecordContents()\">\n" +
    "      <ion-option-button class=\"button-assertive\">delete</ion-option-button>\n" +
    "      <record-list-item item=\"item\"></record-list-item>\n" +
    "\n" +
    "    </ion-item>\n" +
    "  </ion-list>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/record-page.html",
    "<ion-view>\n" +
    "\n" +
    "  <ion-header-bar align-title=\"left\" class=\"bar-positive\">\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button\" ng-click=\"doSomething()\">Left Button</button>\n" +
    "    </div>\n" +
    "    <h1 class=\"title\">Title!</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button\">Right Button</button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    <div class=\"browser-landing\" id=\"main\">\n" +
    "\n" +
    "      <div class=\"compact marquee\">\n" +
    "        <div id=\"info\" style=\"visibility: visible;\">\n" +
    "          <p id=\"info_start\" style=\"display: inline;\">\n" +
    "            녹음 버튼을 누르면 녹음이 시작됩니다\n" +
    "          </p>\n" +
    "          <p id=\"info_speak_now\" style=\"display:none\">\n" +
    "            레코딩중...\n" +
    "          </p>\n" +
    "          <p id=\"info_no_speech\" style=\"display:none\">\n" +
    "            No speech was detected. You may need to adjust your <a\n" +
    "            href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">microphone\n" +
    "            settings</a>.\n" +
    "          </p>\n" +
    "          <p id=\"info_no_microphone\" style=\"display:none\">\n" +
    "            No microphone was found. Ensure that a microphone is installed and that\n" +
    "            <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">\n" +
    "              microphone settings</a> are configured correctly.\n" +
    "          </p>\n" +
    "          <p id=\"info_allow\" style=\"display:none\">\n" +
    "            Click the \"Allow\" button above to enable your microphone.\n" +
    "          </p>\n" +
    "          <p id=\"info_denied\" style=\"display:none\">\n" +
    "            Permission to use microphone was denied.\n" +
    "          </p>\n" +
    "          <p id=\"info_blocked\" style=\"display:none\">\n" +
    "            Permission to use microphone is blocked. To change, go to\n" +
    "            chrome://settings/contentExceptions#media-stream\n" +
    "          </p>\n" +
    "          <p id=\"info_upgrade\" style=\"display:none\">\n" +
    "            Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a>\n" +
    "            version 25 or later.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"results\">\n" +
    "          <span class=\"final\" id=\"final_span\"></span> <span class=\"interim\" id=\"interim_span\"></span>\n" +
    "        </div>\n" +
    "        <center>\n" +
    "          <h1>{{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:<strong>{{(\"0\"+(second)).slice(-2)}}</strong>\n" +
    "            <small>.{{(\"0\"+(value)).slice(-2)}}</small>\n" +
    "          </h1>\n" +
    "        </center>\n" +
    "\n" +
    "        <center>\n" +
    "          <button class=\"button icon ion-camera\"></button>\n" +
    "          <button class=\"button\" ng-click=\"openModal();\">저장하기</button>\n" +
    "          <button class=\"button icon ion-bookmark\"></button>\n" +
    "        </center>\n" +
    "        <div id=\"div_start\">\n" +
    "          <center>\n" +
    "            <button class=\"button icon ion-play\" ng-show=\"btnPlay\" id=\"start_button\"\n" +
    "                    onclick=\"startButton(event)\"></button>\n" +
    "            <button class=\"button icon ion-stop\" ng-show=\"btnStop\" id=\"start_button\" ng-click=\"recordStop()\"\n" +
    "                    onclick=\"startButton(event)\"></button>\n" +
    "          </center>\n" +
    "        </div>\n" +
    "        <!--<div id=\"copy\">-->\n" +
    "        <!--<button class=\"button\" id=\"copy_button\" ng-click=\"copyButton()\">Copy and Paste</button>-->\n" +
    "        <!--<div id=\"copy_info\">-->\n" +
    "        <!--<p>-->\n" +
    "        <!--Press Control-C to copy text.-->\n" +
    "        <!--</p>-->\n" +
    "        <!--<p>-->\n" +
    "        <!--(Command-C on Mac.)-->\n" +
    "        <!--</p>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<button class=\"button\" id=\"email_button\" ng-click=\"emailButton()\">Create-->\n" +
    "        <!--Email-->\n" +
    "        <!--</button>-->\n" +
    "        <!--<div id=\"email_info\">-->\n" +
    "        <!--<p>-->\n" +
    "        <!--Text sent to default email application.-->\n" +
    "        <!--</p>-->\n" +
    "        <!--<p>-->\n" +
    "        <!--(See chrome://settings/handlers to change.)-->\n" +
    "        <!--</p>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<select ng-model=\"mainLangs\" ng-options=\"lang.county for lang in langs\"></select>-->\n" +
    "        <div class=\"compact marquee\" id=\"div_language\" style=\"display: none\">\n" +
    "          <select id=\"select_language\">\n" +
    "            <option value=\"0\">Afrikaans</option>\n" +
    "            <option value=\"1\">Bahasa Indonesia</option>\n" +
    "            <option value=\"2\">Bahasa Melayu</option>\n" +
    "            <option value=\"3\">Català</option>\n" +
    "            <option value=\"4\">Čeština</option>\n" +
    "            <option value=\"5\">Dansk</option>\n" +
    "            <option value=\"6\">Deutsch</option>\n" +
    "            <option value=\"7\">English</option>\n" +
    "            <option value=\"8\">Español</option>\n" +
    "            <option value=\"9\">Euskara</option>\n" +
    "            <option value=\"10\">Filipino</option>\n" +
    "            <option value=\"11\">Français</option>\n" +
    "            <option value=\"12\">Galego</option>\n" +
    "            <option value=\"13\">Hrvatski</option>\n" +
    "            <option value=\"14\">IsiZulu</option>\n" +
    "            <option value=\"15\">Íslenska</option>\n" +
    "            <option value=\"16\">Italiano</option>\n" +
    "            <option value=\"17\">Lietuvių</option>\n" +
    "            <option value=\"18\">Magyar</option>\n" +
    "            <option value=\"19\">Nederlands</option>\n" +
    "            <option value=\"20\">Norsk bokmål</option>\n" +
    "            <option value=\"21\">Polski</option>\n" +
    "            <option value=\"22\">Português</option>\n" +
    "            <option value=\"23\">Română</option>\n" +
    "            <option value=\"24\">Slovenščina</option>\n" +
    "            <option value=\"25\">Slovenčina</option>\n" +
    "            <option value=\"26\">Suomi</option>\n" +
    "            <option value=\"27\">Svenska</option>\n" +
    "            <option value=\"28\">Tiếng Việt</option>\n" +
    "            <option value=\"29\">Türkçe</option>\n" +
    "            <option value=\"30\">Ελληνικά</option>\n" +
    "            <option value=\"31\">български</option>\n" +
    "            <option value=\"32\">Pусский</option>\n" +
    "            <option value=\"33\">Српски</option>\n" +
    "            <option value=\"34\">Українська</option>\n" +
    "            <option value=\"35\">한국어</option>\n" +
    "            <option value=\"36\">中文</option>\n" +
    "            <option value=\"37\">日本語</option>\n" +
    "            <option value=\"38\">हिन्दी</option>\n" +
    "            <option value=\"39\">ภาษาไทย</option>\n" +
    "          </select>&nbsp;&nbsp;\n" +
    "\n" +
    "          <select id=\"select_dialect\" style=\"visibility: visible;\">\n" +
    "            <option value=\"en-AU\">Australia</option>\n" +
    "            <option value=\"en-CA\">Canada</option>\n" +
    "            <option value=\"en-IN\">India</option>\n" +
    "            <option value=\"en-NZ\">New Zealand</option>\n" +
    "            <option value=\"en-ZA\">South Africa</option>\n" +
    "            <option value=\"en-GB\">United Kingdom</option>\n" +
    "            <option value=\"en-US\">United States</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/scrap-list-item.html",
    "\n" +
    "  <div class=\"scrap-item\">\n" +
    "    <p class=\"date\">{{ item.date }} </p>\n" +
    "    <h1 class=\"title\">{{ item.title }}</h1>\n" +
    "    <label class=\"tag\"> 추천 리소스 <span>{{item.resource.recommended}}</span></label>\n" +
    "  </div>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/scrap-list.html",
    "<div class=\"scrap-page-wrap\">\n" +
    "\n" +
    "\n" +
    "  <div class=\"content-wrap\">\n" +
    "\n" +
    "    <ion-list class=\"scrap-items\"\n" +
    "              ng-class=\"{'scrap-list-mobile':dev_width < 640}\">\n" +
    "      <ion-item class=\"item\" ng-repeat=\"item in items\" ng-click=\"selectItem(item)\">\n" +
    "        <a href=\"#\" class=\"scrap-content\" ng-class=\"{'selected': item.selected}\">\n" +
    "          <ion-option-button class=\"button-assertive\">delete</ion-option-button>\n" +
    "          <scrap-list-item item=\"item\" ng-click=\"openScrapViewModal(); previewCheck($index);\"></scrap-list-item>\n" +
    "        </a>\n" +
    "        <button class=\"button\" ng-hide=\"dev_width < 640\" ng-click=\"viewScrapContents()\"> view</button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "\n" +
    "\n" +
    "    <div class=\"scrap-preview\" ng-hide=\"dev_width < 640\">\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4><i class=\"icon-index\"></i>목차 {{items[preIndex].preview.index.length}}</h4>\n" +
    "        <ui>\n" +
    "          <li ng-repeat=\"subtitle in items[preIndex].preview.index\">\n" +
    "            {{ subtitle }}\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"scrap-images\">\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n" +
    "          <ion-slide ng-repeat=\"image in items[preIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"#\">\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <ui>\n" +
    "          <li ng-repeat=\"resource in items[preIndex].preview.recommended\">\n" +
    "            {{ resource.resourceTitle }}\n" +
    "            {{ resource.dataSet }}\n" +
    "\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/modal/save-modal.html",
    "<ion-modal-view class=\"scrap-save-modal\">\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">Input Cover</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button button-positive\" ng-click=\"closeModal()\">Close</button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "      <div class=\"list\">\n" +
    "        <label class=\"item item-input item-stacked-label\">\n" +
    "          <span class=\"input-label\" id=\"ssf\">TITLE</span>\n" +
    "          <input type=\"text\" id=\"add_title\" placeholder=\"input title\">\n" +
    "        </label>\n" +
    "        <label class=\"item item-input item-stacked-label\">\n" +
    "          <span class=\"input-label\">DESCRIPTION</span>\n" +
    "          <textarea placeholder=\"Input contents description\"  id=\"add_description\" rows=\"7\"></textarea>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <p>COVER IMAGE</p>\n" +
    "      </div>\n" +
    "      <div class=\"card\">\n" +
    "      여기 앨범에서 선택한 사진 백그라운드로 박히게\n" +
    "      </div>\n" +
    "      <div class=\"list\" style=\"margin-bottom:10px;\">\n" +
    "        <div class=\"item item-input item-stacked-label\">\n" +
    "          <p><span class=\"input-label\">Tags</span></p>\n" +
    "          <input type=\"text\" id=\"add_tag\" placeholder=\"input tag\" style=\"width:80%;display:inline-block;\">\n" +
    "          <button ng-click=\"addTag()\" style=\"float:right; border:none; background-color:white; font-size:20px; margin-right:20px;\">+</button>\n" +
    "        </div>\n" +
    "        <div id=\"new_tag\">\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-modal-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/modal/scrap-view-modal.html",
    "<ion-modal-view class=\"scrap-view-modal\">\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">scrap preview</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button button-positive\" ng-click=\"closeModal()\">Close</button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "\n" +
    "    <div class=\"scrap-preview\">\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4><i class=\"icon-index\"></i>목차 {{items[preIndex].preview.index.length}}</h4>\n" +
    "        <ui>\n" +
    "          <li ng-repeat=\"subtitle in items[preIndex].preview.index\">\n" +
    "            {{ subtitle }}\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <h4><i class=\"icon-images\"></i>이미지 {{items[preIndex].preview.images.length}}</h4>\n" +
    "      <div class=\"scrap-images\">\n" +
    "        <!--<ul>-->\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n" +
    "          <ion-slide ng-repeat=\"image in items[preIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"#\">\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <ui>\n" +
    "          <li ng-repeat=\"resource in items[preIndex].preview.recommended\">\n" +
    "            {{ resource.resourceTitle }}\n" +
    "            {{ resource.dataSet }}\n" +
    "\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <button class=\"button button-block button-positive\" ng-click=\"viewScrapContents(); closeModal();\"> view</button>\n" +
    "  </ion-content>\n" +
    "</ion-modal-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/footer/footer.html",
    "<div class=\"footer\"\n" +
    "     style=\"background-color: #242526; width: 100%; height: 460px; position: relative; bottom: 0;\">\n" +
    "</div>\n" +
    "");
}]);
})();
