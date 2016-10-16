(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/browse.html",
    "<ion-view view-title=\"{{navTitle}}\" class=\"browse\"\n" +
    "          ng-class=\"{'bk-web':dev_width > 770, 'bk-m':dev_width < 770}\">\n" +
    "  <!--contents-->\n" +
    "\n" +
    "  <ion-content\n" +
    "    scroll-sista=\"header-tabs\"\n" +
    "    ng-class=\"{'has-subheader':dev_width > 770, 'has-tabs-top':dev_width < 770}\">\n" +
    "    <div class=\"header-background\"\n" +
    "         ng-hide=\"dev_width < 770\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<img src=\"../img/nav-shadow.png\" class=\"nav-shadow\"-->\n" +
    "    <!--ng-hide=\"dev_width < 770\">-->\n" +
    "    <div class=\"content-wrapper\">\n" +
    "      <!--<div class=\"header-background-m\"-->\n" +
    "      <!--ng-hide=\"dev_width > 770\">-->\n" +
    "      <!--</div>-->\n" +
    "      <div class=\"shadow-wrapper\">\n" +
    "        <!--ng-style=\"(dev_width < 770) ? {'border-radius': '12px',-->\n" +
    "        <!--'margin': '0 7px'}:{'border-radius': '12px' }\">-->\n" +
    "        <div class=\"header\">\n" +
    "          <div class=\"header-wrap\"\n" +
    "               ng-style=\" (dev_width > 770) ? { 'margin-bottom':'10px', 'height':'90px', 'padding-top':'40px',\n" +
    "                'border-bottom':'1px solid #ededed' } : {'transformY':'10px'} \">\n" +
    "\n" +
    "            <h3 ng-hide=\"dev_width < 770\"><i class=\" header-icon\"\n" +
    "                                             ng-class=\"{'icon-record':selected === 0, 'icon-scrap': selected === 1, 'icon-memory':selected === 2 }\"></i>{{pageTitle}}\n" +
    "            </h3>\n" +
    "\n" +
    "            <!--<div class=\"search-bar\"-->\n" +
    "            <!--ng-class=\"{'header-mobile':dev_width < 770, 'header-web':dev_width > 770}\"-->\n" +
    "            <!--ng-hide=\"selected === 2\">-->\n" +
    "            <!--<i class=\"icon-card\"-->\n" +
    "            <!--ng-show=\"dev_width > 770\"></i>-->\n" +
    "            <!--<label class=\"item item-input\">-->\n" +
    "            <!--<i class=\"icon ion-search placeholder-icon\" ></i>-->\n" +
    "            <!--<input type=\"search\" placeholder=\"search\" ng-model=\"searchQuery\" />-->\n" +
    "            <!--</label>-->\n" +
    "\n" +
    "            <!--<div class=\"select-option item item-input item-select\"-->\n" +
    "            <!--ng-show=\"dev_width > 770\">-->\n" +
    "            <!--<select>-->\n" +
    "            <!--<option selected> 전체검색</option>-->\n" +
    "            <!--<option>제목검색</option>-->\n" +
    "            <!--<option>내용검색</option>-->\n" +
    "            <!--</select>-->\n" +
    "\n" +
    "            <!--</div>-->\n" +
    "            <!--<div class=\"sc-bar\"-->\n" +
    "            <!--ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'12px 20px' } : {'width':'50%'}\">-->\n" +
    "            <!--<label class=\"item item-input\">-->\n" +
    "            <!--<i class=\"icon ion-search placeholder-icon\"></i>-->\n" +
    "            <!--<input type=\"text\" placeholder=\"Search\">-->\n" +
    "            <!--</label>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--</div>-->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <ion-slide-box on-slide-changed=\"selectTabWithIndex($index)\" active-slide=\"selected\" on-drag=\"lockSlide()\">\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 770}\">\n" +
    "\n" +
    "            <record-list></record-list>\n" +
    "\n" +
    "          </ion-slide>\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 770}\">\n" +
    "            <scrap-list></scrap-list>\n" +
    "          </ion-slide>\n" +
    "\n" +
    "          <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 770}\">\n" +
    "            <memory></memory>\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"paper-pointer\"\n" +
    "             ng-style=\"(dev_width > 770) ? {'background-color': '#2f3235'}:{'background-color':'#e5e5e5'}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <footer-section ng-hide=\"dev_width < 770\"></footer-section>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"footer-background\"\n" +
    "         ng-hide=\"dev_width < 770\">\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "\n" +
    "  <!--tabs--><!--tabs-->\n" +
    "\n" +
    "  <ion-tabs class=\"tabs-style tabs-top tabs-icon-top\"\n" +
    "            ng-style=\" (dev_width > 770) ? { 'transformY':'20px' } : {'transformY':'10px'}\">\n" +
    "    <img class=\"logo\" src=\"img/title-logo.png\"\n" +
    "         ng-hide=\"dev_width < 660\">\n" +
    "    <!--<div class=\"cursor-wrapper\">-->\n" +
    "    <!--<div class=\"cursor\"></div>-->\n" +
    "    <!--<img ng-hide=\"dev_width < 660\" style=\"margin-top: 8px; width:87px; height: 26px;\" class=\"title-image\"-->\n" +
    "    <!--src=\"img/title-logo.png\"/></img>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <ion-tab title=\"Record Card\"\n" +
    "             class=\"tabs-style\"\n" +
    "             icon-on=\"icon-record\"\n" +
    "             ng-class=\"{active: selected === 0,\n" +
    "             'active-color': selected === 0}\"\n" +
    "             ng-click=\"selectTabWithIndex(0)\"\n" +
    "             ng-style=\" (dev_width > 770) ? { 'padding-left':'550px' }:{'padding-left':'0'} \">\n" +
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
  $templateCache.put("templates/main.html",
    "\n" +
    "<ion-content\n" +
    "  scroll-sista=\"header-tabs\"\n" +
    "  ng-class=\"{'has-subheader':dev_width > 640, 'has-tabs-top':dev_width < 640}\">\n" +
    "  <div class=\"header-background\"\n" +
    "       ng-hide=\"dev_width < 640\">\n" +
    "  </div>\n" +
    "\n" +
    "  <img src=\"../img/nav-shadow.png\" class=\"nav-shadow\"\n" +
    "       ng-hide=\"dev_width < 640\">\n" +
    "  <ion-nav-view name=\"browse\">\n" +
    "  </ion-nav-view>\n" +
    "  <div class=\"content-wrapper\">\n" +
    "    <div class=\"header-background-m\"\n" +
    "         ng-hide=\"dev_width > 640\">\n" +
    "    </div>\n" +
    "    <div class=\"shadow-wrapper\"\n" +
    "         ng-style=\"(dev_width < 640) ? {'border-radius': '12px',\n" +
    "    'margin': '0 7px'}:{'border-radius': '12px' }\">\n" +
    "      <div class=\"header\">\n" +
    "        <div class=\"header-wrap\"\n" +
    "             ng-style=\" (dev_width > 640) ? { 'margin-bottom':'10px', 'height':'90px', 'padding-top':'40px',\n" +
    "                'border-bottom':'1px solid #ededed' } : {'transformY':'10px'} \">\n" +
    "\n" +
    "          <h3 ng-hide=\"dev_width < 640\"><i class=\" header-icon\"\n" +
    "                                           ng-class=\"{'icon-record':selected === 0, 'icon-scrap': selected === 1, 'icon-memory':selected === 2 }\"></i>{{pageTitle}}\n" +
    "          </h3>\n" +
    "\n" +
    "          <div class=\"search-bar\"\n" +
    "               ng-class=\"{'header-mobile':dev_width < 640, 'header-web':dev_width > 640}\"\n" +
    "               ng-hide=\"selected === 2\">\n" +
    "            <i class=\"icon-card\"\n" +
    "               ng-show=\"dev_width > 640\"></i>\n" +
    "\n" +
    "            <div class=\"select-option\"\n" +
    "                 ng-show=\"dev_width > 640\">\n" +
    "              <select>\n" +
    "                <option selected> 전체검색</option>\n" +
    "                <option>제목검색</option>\n" +
    "                <option>내용검색</option>\n" +
    "              </select>\n" +
    "              <i class=\"ion-chevron-down\"></i>\n" +
    "            </div>\n" +
    "            <!--<div -->\n" +
    "            <!--ng-show=\"dev_width > 640\">-->\n" +
    "            <!--<form name=\"searchOption\">-->\n" +
    "            <!--<select name=\"job\">-->\n" +
    "            <!--<option value=\"\" selected=\"selected\">검색옵션</option>-->\n" +
    "            <!--<option value=\"\">All</option>-->\n" +
    "            <!--<option value=\"\">Title</option>-->\n" +
    "            <!--<option value=\"\">Content</option>-->\n" +
    "            <!--</select>-->\n" +
    "            <!--<i class=\"ion-chevron-down\"></i>-->\n" +
    "            <!--</form>-->\n" +
    "            <!--</div>-->\n" +
    "\n" +
    "\n" +
    "            <div class=\"sc-bar\"\n" +
    "                 ng-style=\" (dev_width < 640) ? { 'width':'100%', 'padding':'12px 20px' } : {'transformY':'10px'}\">\n" +
    "              <label class=\"item item-input\">\n" +
    "                <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                <input type=\"text\" placeholder=\"Search\">\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <ion-slide-box on-slide-changed=\"selectItem($index)\" active-slide=\"selected\" on-drag=\"lockSlide()\">\n" +
    "\n" +
    "        <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "\n" +
    "          <record-list></record-list>\n" +
    "\n" +
    "        </ion-slide>\n" +
    "\n" +
    "        <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "          <scrap-list></scrap-list>\n" +
    "        </ion-slide>\n" +
    "\n" +
    "        <ion-slide ng-class=\"{ 'web-margin-top': dev_width > 640}\">\n" +
    "          3\n" +
    "          <div class=\"box pink\"><h1>Memory</h1></div>\n" +
    "        </ion-slide>\n" +
    "      </ion-slide-box>\n" +
    "      <div class=\"paper-pointer\"\n" +
    "           ng-style=\"(dev_width > 640) ? {'background-color': '#242526'}:{'background-color':'#e5e5e5'}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <footer-section\n" +
    "      ng-hide=\"dev_width < 640\"></footer-section>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"footer-background\"\n" +
    "       ng-hide=\"dev_width < 640\">\n" +
    "  </div>\n" +
    "</ion-content>\n" +
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
    "  <ion-side-menu-content class=\"menu-nav\">\n" +
    "    <ion-nav-bar class=\"bar-stable\">\n" +
    "      <ion-nav-back-button>\n" +
    "      </ion-nav-back-button>\n" +
    "\n" +
    "      <ion-nav-buttons side=\"left\">\n" +
    "        <button class=\"button button-icon button-clear ion-pricetag\" menu-toggle=\"left\">\n" +
    "        </button>\n" +
    "      </ion-nav-buttons>\n" +
    "    </ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n" +
    "  </ion-side-menu-content>\n" +
    "\n" +
    "  <ion-side-menu side=\"left\">\n" +
    "    <!--<ion-header-bar class=\"bar-stable\">-->\n" +
    "      <!--<h1 class=\"title\">Left</h1>-->\n" +
    "    <!--</ion-header-bar>-->\n" +
    "    <ion-content class=\"menu-content-section\">\n" +
    "      <!--<br><br>-->\n" +
    "      <ion-label><i class=\"ion-pricetags\"></i>태그관리</ion-label>\n" +
    "\n" +
    "      <label class=\"item item-input\">\n" +
    "        <i class=\"icon ion-search placeholder-icon\" ></i>\n" +
    "        <input type=\"search\" placeholder=\"search\" ng-model=\"searchQuery\" />\n" +
    "      </label>\n" +
    "\n" +
    "      <ion-list>\n" +
    "        <ion-item ng-repeat=\"menu in menulist | filter:searchQuery\" class=\"tag-list-item\">\n" +
    "          <i class=\"ion-pricetag\"></i>{{menu.name}}\n" +
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
    "<ion-view class=\"record-detail\" view-title=\"\">\n" +
    "\n" +
    "  <ion-nav-title>\n" +
    "    <!--웹 네비게이션-->\n" +
    "    <div class=\"for-w\" ng-if=\"(dev_width > 770)\">\n" +
    "\n" +
    "      <div class=\"view-title\" side=\"left\">\n" +
    "        <div class=\"title-wrapper\">\n" +
    "          <div class=\"btn-wrapper\">\n" +
    "\n" +
    "            <button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i\n" +
    "              class=\"icon-resource detail-icon\"></i>\n" +
    "              <a class=\"nav-btn\" href=\"#\">All resource</a>\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i\n" +
    "              class=\"icon-delete detail-icon\"></i>\n" +
    "              <a class=\"nav-btn\">Delete</a>\n" +
    "            </button>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--모바일 네비게이션-->\n" +
    "    <div class=\"for-m\" ng-if=\"dev_width < 770\">\n" +
    "      <div class=\"view-title\" side=\"left\">\n" +
    "        <div class=\"title-wrapper\">\n" +
    "          <div class=\"btn-wrapper\" style=\"position: absolute; right: 0; top: 5px;\">\n" +
    "\n" +
    "            <button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i\n" +
    "              class=\"icon-resource detail-icon\" style=\"position: absolute; top: -4px; left: -19px;\"></i>\n" +
    "              <a class=\"nav-btn\" href=\"#\">All resource</a>\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i\n" +
    "              style=\"position: absolute; top: -5px; left: -19px;\" class=\"icon-delete detail-icon\"></i>\n" +
    "              <a class=\"nav-btn\">Delete</a>\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </ion-nav-title>\n" +
    "  <ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-back-button class=\"button-clear back-btn\">\n" +
    "      <i class=\"ion-ios-arrow-back\"></i>\n" +
    "      <p>리스트 목록가기</p>\n" +
    "    </ion-nav-back-button>\n" +
    "\n" +
    "  </ion-nav-bar>\n" +
    "  <ion-content scroll=\"false\">\n" +
    "\n" +
    "    <!--웹 바디 영역-->\n" +
    "    <div class=\"for-w\" id=\"wrap\" ng-hide=\"dev_width < 770\">\n" +
    "\n" +
    "      <div class=\"header-background\" id=\"header\">\n" +
    "        <div class=\"date\">\n" +
    "          Saterday, Feb 17 3:11 PM / TAEBACK\n" +
    "        </div>\n" +
    "        <h1>헬스케어 서비스를 위한 빅데이터 설계 포인트</h1>\n" +
    "\n" +
    "\n" +
    "        <div class=\"tag\" ng-hide=\"dev_width < 770\">\n" +
    "          <i class=\"ion-pricetag\"></i>\n" +
    "          <span>테그들입니다1</span>\n" +
    "          <span>테그들입니다2</span>\n" +
    "          <span>테그들입니다3</span>\n" +
    "        </div>\n" +
    "        <div class=\"backfilter\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"record-detail-wrapper\" id=\"nav\">\n" +
    "        <div class=\"record-info\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div id=\"waveform\"\n" +
    "             ng-style=\" (dev_width < 770) ? { 'height': '34px','margin-top':'-20px','padding':'0' } : {'padding':'15px 0'}\"></div>\n" +
    "\n" +
    "        <div class=\"media-controller\">\n" +
    "          <div class=\"button-wrap\">\n" +
    "            <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "            <div class=\"button\" ng-class=\"{'icon ion-ios-play':!active,'icon ion-ios-pause':active}\"\n" +
    "                 ng-click=\"pauseCursor();\"></div>\n" +
    "            <!--<div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>-->\n" +
    "            <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"timer\">\n" +
    "            <h2>\n" +
    "              {{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}.{{(\"0\"+(value)).slice(-2)}}</h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"content-block\">\n" +
    "          <div class=\"resource-block\">\n" +
    "\n" +
    "            <div class=\"wrapper\">\n" +
    "              <div class=\"re-bar\">\n" +
    "                <h4><i class=\"icon-image\"></i>리소스 뷰어</h4>\n" +
    "                <!--<div class=\"resource-counter\">2/15</div>-->\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"viewer\">\n" +
    "              <div class=\"resource-item\" style=\"background-image: url('{{viewerSet.image}}')\"\n" +
    "                   ng-repeat=\"viewerSet in resourceitems\">\n" +
    "                <a href=\"\" class=\"viewr-script-button\">\n" +
    "                  <div id=\"{{$index}}\" ng-click=\"scriptClcik($event)\">음성듣기</div>\n" +
    "                </a>\n" +
    "                <div class=\"indexCheck\">{{$index +1 + \"/\" + resourceitems.length}}</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"script-block\">\n" +
    "            <div class=\"wrapper\">\n" +
    "              <div class=\"sc-bar\"\n" +
    "                   ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "                <h4><i class=\"icon-record\"></i>스크립트</h4>\n" +
    "\n" +
    "                <label class=\"item item-input\">\n" +
    "                  <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                  <input type=\"text\" placeholder=\"Search\" ng-model=\"searchKeyword\" ng-focus=\"isFocus = true\"\n" +
    "                         ng-blur=\"isFocus = false\">\n" +
    "                </label>\n" +
    "                <div class=\"search-btn\" ng-show=\"isFocus == true\">\n" +
    "                  <a><i class=\"ion-android-arrow-dropup\"></i></a>\n" +
    "                  <a><i class=\"ion-android-arrow-dropdown\"></i></a>\n" +
    "                </div>\n" +
    "                <span class=\"result-index\">{{findScript.length}}</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"script-section\">\n" +
    "              <span class=\"no-result\" ng-show=\"findScript.length == 0\">검색 결과가 없습니다.</span>\n" +
    "              <div class=\"sub-wrapper\" ng-repeat=\"scriptSet in resourceitems  | filter:searchKeyword as findScript\">\n" +
    "\n" +
    "\n" +
    "                <div class=\"label\"><i ng-show=\"scriptSet.bookmark\" class=\"icon-bookmark\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  {{scriptSet.time}}\n" +
    "                </div>\n" +
    "                <button class=\"button-clear\">\n" +
    "                  <p id=\"{{$index}}\" ng-click=\"scriptClcik($event)\"\n" +
    "                     ng-bind-html=\"scriptSet.script | highlight:searchKeyword\"\n" +
    "                     ng-class=\"{'play-script':scriptSet.isPlay == true}\">{{scriptSet.script}}</p>\n" +
    "                </button>\n" +
    "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--모바일 바디 영역-->\n" +
    "    <div class=\"for-m\" ng-if=\"(dev_width < 770)\">\n" +
    "\n" +
    "      <div class=\"header-background\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!--style=\"margin-top: {{margin.top}}; \"-->\n" +
    "      <div class=\"record-detail-wrapper\">\n" +
    "        <div class=\"title\" ng-show=\"isFocus == !true\">\n" +
    "          헬스케어 서비스를 위한 빅데이터 설계 포인트\n" +
    "        </div>\n" +
    "        <!--<div class=\"btn-wrapper\">-->\n" +
    "        <!--<button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i-->\n" +
    "        <!--class=\"icon-delete detail-icon\"></i>-->\n" +
    "        <!--<a class=\"nav-btn\">Delete</a>-->\n" +
    "        <!--</button>-->\n" +
    "\n" +
    "        <!--<button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i-->\n" +
    "        <!--class=\"icon-resource detail-icon\"></i>-->\n" +
    "        <!--<a class=\"nav-btn\" href=\"#\">All resource</a>-->\n" +
    "        <!--</button>-->\n" +
    "        <!--</div>-->\n" +
    "        <div class=\"record-info\">\n" +
    "        </div>\n" +
    "\n" +
    "        <detail-preview-images ng-show=\"isFocus == !true\"></detail-preview-images>\n" +
    "\n" +
    "\n" +
    "        <div class=\"contents-wrap\" ng-style=\"isFocus && {'margin-top':'0'}\">\n" +
    "          <div class=\"wrapper\">\n" +
    "            <div class=\"sc-bar\"\n" +
    "                 ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "\n" +
    "              <h4><i class=\"icon-record\"></i>스크립트 <span class=\"result-index\">{{findScript.length}}</span></h4>\n" +
    "\n" +
    "              <label class=\"item item-input\">\n" +
    "                <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                <input type=\"text\" placeholder=\"Search\" ng-model=\"searchKeyword\" ng-focus=\"isFocusCheck()\"\n" +
    "                       ng-blur=\"isFocusCheck()\">\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"script-section\"\n" +
    "               ng-style=\" (dev_width < 770) ? { 'padding-top':'5px' } : {'transformY':'10px'}\">\n" +
    "            <div class=\"script\">\n" +
    "              <span class=\"no-result\" ng-show=\"findScript.length == 0\">검색 결과가 없습니다.</span>\n" +
    "              <div class=\"sub-wrapper\" ng-repeat=\"scriptSet in resourceitems  | filter:searchKeyword as findScript\">\n" +
    "\n" +
    "              <div class=\"label\"><i ng-show=\"scriptSet.bookmark\" class=\"icon-bookmark\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  {{scriptSet.time}}\n" +
    "                </div>\n" +
    "                <p id=\"{{$index}}\" ng-click=\"scriptClcik($event)\"\n" +
    "                   ng-bind-html=\"scriptSet.script | highlight:searchKeyword\"\n" +
    "                   ng-class=\"{'play-script':scriptSet.isPlay == true}\">{{scriptSet.script}}</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "          <div class=\"bar bar-footer\" id=\"myP\" ng-show=\"isFocus == !true\">\n" +
    "            <div class=\"timer\">\n" +
    "              <h2>\n" +
    "                {{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}.{{(\"0\"+(value)).slice(-2)}}</h2>\n" +
    "            </div>\n" +
    "            <div class=\"button-wrap\">\n" +
    "              <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "              <div class=\"button\" ng-class=\"{'icon ion-ios-play':!active,'icon ion-ios-pause':active}\"\n" +
    "                   ng-click=\"pauseCursor();\"></div>\n" +
    "              <!--<div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>-->\n" +
    "              <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "            </div>\n" +
    "            <div id=\"waveform\"\n" +
    "                 ng-style=\" (dev_width < 770) ? { 'height': '34px','margin-top':'-20px','padding':'0' } : {'padding':'15px 0'}\">\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
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
  $templateCache.put("templates/scrap-detail.html",
    "<ion-view class=\"scrap-detail\" view-title=\"\">\n" +
    "\n" +
    "  <ion-nav-title>\n" +
    "    <!--&lt;!&ndash;웹 네비게이션&ndash;&gt;-->\n" +
    "    <!--<div class=\"for-w\" ng-if=\"(dev_width > 770)\">-->\n" +
    "\n" +
    "    <!--<div class=\"view-title\" side=\"left\">-->\n" +
    "\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <!--모바일 네비게이션-->\n" +
    "    <!--<div class=\"for-m\" ng-hide=\"dev_width > 770\">-->\n" +
    "    <!--<div class=\"view-title\" side=\"left\">-->\n" +
    "    <!--<div class=\"title-wrapper\">-->\n" +
    "    <!--<div class=\"title\">-->\n" +
    "    <!--모바일버전 가제목입니다.-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"date\">-->\n" +
    "    <!--Saterday, Feb 17 3:11 PM / TAEBACK-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"tag\" ng-hide=\"dev_width < 770\">-->\n" +
    "    <!--<span>테그들입니다1</span>-->\n" +
    "    <!--<span>테그들입니다2</span>-->\n" +
    "    <!--<span>테그들입니다3</span>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <!--</div>-->\n" +
    "  </ion-nav-title>\n" +
    "\n" +
    "  <ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-back-button class=\"button-clear back-btn\">\n" +
    "      <i class=\"ion-ios-arrow-back\"></i>\n" +
    "      <p>리스트 목록가기</p>\n" +
    "\n" +
    "    </ion-nav-back-button>\n" +
    "    <ion-nav-buttons class=\"button-wrapper\" side=\"right\">\n" +
    "      <div class=\"button button-clear \"><i class=\"icon-export\" ng-hide=\"dev_width > 770\"></i></div>\n" +
    "      <div class=\"button button-clear\"><i class=\"icon-save\" ng-hide=\"dev_width > 770\"></i></div>\n" +
    "      <div class=\"button button-clear\"><i class=\"icon-delete\" ng-hide=\"dev_width > 770\"></i></div>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content scroll=\"false\">\n" +
    "\n" +
    "    <!--웹 바디 영역-->\n" +
    "    <div class=\"for-w\" id=\"wrap\" ng-class=\"{'device-m':dev_width < 770}\">\n" +
    "\n" +
    "      <div class=\"scrap-detail-wrapper\">\n" +
    "\n" +
    "        <div class=\"header-section\">\n" +
    "          <div class=\"header-wrapper\">\n" +
    "            <div class=\"date\">\n" +
    "              Saterday, Feb 17 3:11 PM / TAEBACK\n" +
    "            </div>\n" +
    "            <h1 class=\"scrap-title\">자동차 컨트롤 디자인 경향 연구 - PUI 입출력 제안</h1>\n" +
    "            <div class=\"button-wrapper\" ng-show=\"dev_width > 770\">\n" +
    "              <div class=\"button button-clear \"><i class=\"icon-export\"></i> Export File</div>\n" +
    "              <div class=\"button button-clear\"><i class=\"icon-save\"></i> Save File</div>\n" +
    "              <div class=\"button button-clear\"><i class=\"icon-delete\"></i> Delete</div>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"content-block\">\n" +
    "          <div class=\"navigation\" ng-show=\"dev_width > 770\">\n" +
    "            <div class=\"index-button-wrapper\">\n" +
    "              <a href=\"#\" class=\"index\" style=\"background-color: #20252c\">1</a>\n" +
    "              <a href=\"#\" class=\"index\">2</a>\n" +
    "              <a href=\"#\" class=\"index\">3</a>\n" +
    "              <a href=\"#\" class=\"index\">4</a>\n" +
    "            </div>\n" +
    "            <!--<div class=\"generate-button-section\">-->\n" +
    "            <!--<a href=\"#\" class=\"generate\">+</a>-->\n" +
    "            <!--<a href=\"#\" class=\"generate\">-</a>-->\n" +
    "            <!--</div>-->\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"scrap-section\">\n" +
    "            <div class=\"index-title\">\n" +
    "              <h2><span>1.</span>자동차 컨트롤 개선 사례</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <p>1960년대부터 인포그래픽이라는 단어가 쓰이기 시작했다. 데이터는 언제나 존재하는 것이며 들여다 볼 수 있는 기술들이 발달함으로써 인포그래픽이 주목을 많이 받고 있다.\n" +
    "                  멀티미디어 수업을 들으면서도 느끼는 거지만 예전부터 인포그래픽이 쓰이고 있으며 현재 우리의 주변에도 많이 존재하고 있다는 것이다.\n" +
    "                  무심코 보는 뉴스, 신문, 인터넷에도 많은 인포그래픽이 존재하고 있다.\n" +
    "                  인포그래피는 저널리즘의 한 장르이다. 그래픽 작업은 언론사에서 많이 해오던 장르이며 인포그래픽의 처음에 있다.\n" +
    "\n" +
    "                  질문하는 사람만 답을 얻을 수 있다.\n" +
    "                  질문 -> 답 : 사람의 삶\n" +
    "\n" +
    "                  질문을 해야 답을 얻을 수 있다. 강사님은 이것의 사례 3가지를 보여 주셨다.\n" +
    "                  첫번째, 요즘 이슈인 싸이의 강남스타일을 시각화하여 보여준 사례\n" +
    "\n" +
    "                  강남스타일의 해외기사중 많이 쓰인 단어들을 골라서 시각화.\n" +
    "                  재미와 정보를 한꺼번에 접할 수 있는 인포그래픽이라고 생각했다.\n" +
    "                </p>\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"index-title\">\n" +
    "              <h2><span>2.</span>자동차 컨트롤 개선 사례</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <p>1960년대부터 인포그래픽이라는 단어가 쓰이기 시작했다. 데이터는 언제나 존재하는 것이며 들여다 볼 수 있는 기술들이 발달함으로써 인포그래픽이 주목을 많이 받고 있다.\n" +
    "                  멀티미디어 수업을 들으면서도 느끼는 거지만 예전부터 인포그래픽이 쓰이고 있으며 현재 우리의 주변에도 많이 존재하고 있다는 것이다.\n" +
    "                  무심코 보는 뉴스, 신문, 인터넷에도 많은 인포그래픽이 존재하고 있다.</p>\n" +
    "                <img class=\"scrap-image\" src=\"../img/record_list/detail-img.png\" alt=\"#\">\n" +
    "                <p>1960년대부터 인포그래픽이라는 단어가 쓰이기 시작했다. 데이터는 언제나 존재하는 것이며 들여다 볼 수 있는 기술들이 발달함으로써 인포그래픽이 주목을 많이 받고 있다.\n" +
    "                  멀티미디어 수업을 들으면서도 느끼는 거지만 예전부터 인포그래픽이 쓰이고 있으며 현재 우리의 주변에도 많이 존재하고 있다는 것이다.\n" +
    "                  무심코 보는 뉴스, 신문, 인터넷에도 많은 인포그래픽이 존재하고 있다.\n" +
    "                  인포그래피는 저널리즘의 한 장르이다. 그래픽 작업은 언론사에서 많이 해오던 장르이며 인포그래픽의 처음에 있다.\n" +
    "\n" +
    "                  질문하는 사람만 답을 얻을 수 있다.\n" +
    "                  질문 -> 답 : 사람의 삶\n" +
    "\n" +
    "                  질문을 해야 답을 얻을 수 있다. 강사님은 이것의 사례 3가지를 보여 주셨다.\n" +
    "                  첫번째, 요즘 이슈인 싸이의 강남스타일을 시각화하여 보여준 사례\n" +
    "\n" +
    "                  강남스타일의 해외기사중 많이 쓰인 단어들을 골라서 시각화.\n" +
    "                  재미와 정보를 한꺼번에 접할 수 있는 인포그래픽이라고 생각했다.\n" +
    "                </p>\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-block2\" ng-show=\"dev_width > 770\">\n" +
    "            <div class=\"recordcard-section\">\n" +
    "              <div class=\"rc-wrapper\">\n" +
    "                <div class=\"recordcard-label\">\n" +
    "                  <h2 class=\"recommended-title\">추천리소스카드</h2>\n" +
    "                  <div class=\"to-index\"><span>To >></span>1.자동차 컨트롤 개선 사례</div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"recordcard-wapper\">\n" +
    "\n" +
    "                  <div class=\"recordcard\">\n" +
    "                    <div class=\"resource-header\">\n" +
    "                      <div class=\"rc-date\">\n" +
    "                        Sunday, Feb 21 1:09 PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>자율주행 자동차 포럼</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p>산업혁명시대를 거쳐 지금까지의 자동차 인테리어는 기술적 발전을 중심으로 조형을 다루거나, 디자인 인간공학을 바탕으로 개발되어왔으며, </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <img src=\"../img/scrap-img/scrap_img2.jpg\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-image\"></i>\n" +
    "                        <p>현재 디지털 정보사회에서의 자동차\n" +
    "                          인테리어는 이미 디지털화 되어가는 기술환경에 적응하기 위한 초기단계에 들어서고 있다.</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"recordcard\">\n" +
    "                    <div class=\"resource-header\">\n" +
    "                      <div class=\"rc-date\">\n" +
    "                        Sunday, Feb 21 1:09 PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>인공지능 물체 감지 시스템</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p> 현재 세계 자동차 회사들은 정보화사회에 맞는 수많은 자동차 인테리어 컨셉을\n" +
    "                          제시하고있으며, 기초적인 정보 디바이스를 자동차에 탑재하여 양산하고 있다.</p>\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <img src=\"../img/scrap-img/scrap-img3.png\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-image\"></i>\n" +
    "                        <p>산업혁명시대를 거쳐 지금까지의 자동차 인테리어는 기술적 발전을 중심으로 조형을 다루거나, 디자인 인간공학을 바탕으로 개발되어왔으며, </p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"recordcard\">\n" +
    "                    <div class=\"resource-header\">\n" +
    "                      <div class=\"rc-date\">\n" +
    "                        Sunday, Feb 21 1:09 PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>자율주행 자동차 포럼</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p>그러나 이러한 자동차 인테리어의 개발환경은 앞으로 하루가 다르게 변해가는 디지털환경에 적응할 것이며, 그에 따라 디자이너는 디지털화 되어가는 인테리어의 디자인적\n" +
    "                          접근방법을 필요로 하게 될 것이다.</p>\n" +
    "                      </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "  <div class=\"bar bar-footer\" id=\"myP\">\n" +
    "    <div class=\"view-btn\" ng-click=\"recommendCard()\"><span>추천 레코드 카드</span></div>\n" +
    "  </div>\n" +
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
  $templateCache.put("templates/directives/detailPreviewImages.html",
    "<div class=\"preview-wrap\" ng-class=\"{'preview-wrap-web':dev_width > 770, 'preview-wrap-m':dev_width < 770}\">\n" +
    "  <div class=\"coverflow top10 bot10\">\n" +
    "    <span class=\"prev-arrow\" ng-hide=\"dev_width<770\"></span>\n" +
    "    <!--<span href=\"\" ng-repeat=\"item in previewItems\">-->\n" +
    "      <!--<img src=\"{{ item.image }}\" id=\"{{item.id}}\" class=\"coverflow__image\"/>-->\n" +
    "    <!--</span>-->\n" +
    "    <span href=\"\"><img src=\"{{previewItems[0].image}}\" id=\"detail_image_2\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"{{previewItems[1].image}}\" id=\"detail_image_3\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"{{previewItems[2].image}}\" id=\"detail_image_4\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"{{previewItems[3].image}}\" id=\"detail_image_5\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"{{previewItems[4].image}}\" id=\"detail_image_5\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"{{previewItems[5].image}}\" id=\"detail_image_5\" class=\"coverflow__image\"/></span>\n" +
    "    <span class=\"next-arrow\" ng-hide=\"dev_width<770\"></span>\n" +
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
  $templateCache.put("templates/directives/memory.html",
    "<div class=\"memory\">\n" +
    "\n" +
    "  <div class=\"memory-view\">\n" +
    "    <div class=\"title\">\n" +
    "      <h2>Web Cloud</h2>\n" +
    "    </div>\n" +
    "    <div class=\"info\">\n" +
    "      <p>12GB의 여유 공간 (총58GB)</p>\n" +
    "    </div>\n" +
    "    <div class=\"memory-bar\">\n" +
    "      <span class=\"pic-memory\">17 GB</span>\n" +
    "      <span class=\"video-memory\">23 GB</span>\n" +
    "      <span class=\"voice-memory\">10 GB</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"memory-detail\">\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: rgba(255, 71, 123, .7);\"> 이미지 (17 GB)</i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-image\"></i>전체 이미지 파일<span>214개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color:  rgba(114, 221, 70, .7);\"> 동영상 (23 GB) </i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-video\"></i>전체 동영상 파일<span>34개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: rgba(255, 163, 0, .7);\"> 음성파일 (10 GB) </i></div>\n" +
    "\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-voice\"></i>전체 음성 파일<span>28개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
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
  $templateCache.put("templates/directives/record-list-item.html",
    "<a href=\"#/app/record-detail\">\n" +
    "  <div class=\"card\">\n" +
    "    <div class=\"record-item\">\n" +
    "\n" +
    "      <div class=\"content-wrap\"\n" +
    "           style=\"background-image: url('{{item.images}}')\"\n" +
    "           ng-style=\"(dev_width > 770) ? {'padding': '25px'}:{'padding': '15px'}\">\n" +
    "        <!--<div class=\"item-label\"></div>-->\n" +
    "        <div class=\"contents\"\n" +
    "             ng-class=\"{'content-320px': dev_width < 322 }\">\n" +
    "          <p class=\"date\"\n" +
    "             ng-style=\"(dev_width > 770) ? {'top': '-45px', 'left': '-22px', 'font-size':'12px'}:{'top': '-35px'}\"> {{\n" +
    "            item.date }} </p>\n" +
    "          <h1 class=\"title\"\n" +
    "              ng-style=\"(dev_width > 770) && {'font-size': '23px', 'margin-top':'0','height':'36px'}\"> {{ item.title }} </h1>\n" +
    "          <div class=\"des-section\">\n" +
    "            <p class=\"description\"\n" +
    "               ng-style=\"(dev_width > 770) && {'font-size': '14px'}\"\n" +
    "            > {{ item.Description }} </p>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class='background-filter'></div>\n" +
    "        <label class=\"tag\"\n" +
    "               ng-style=\"(dev_width > 770) ? {'left': '15px'}:{'left': '5px'}\">\n" +
    "          <span ng-repeat=\"tag in item.tags \">{{ tag }}</span></label>\n" +
    "        <div class=\"sub-contents\" ng-style=\"(dev_width > 770) ? {'right': '25px'}:{'right': '15px'}\">\n" +
    "          <div class=\"noti\"> images {{ item.resource.images}}</div>\n" +
    "          <div class=\"noti\"> videos {{item.resource.videos}}</div>\n" +
    "          <div class=\"time\"> {{ item.time }}</div>\n" +
    "        </div>\n" +
    "        </label>\n" +
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
    "            ng-hide=\"dev_width > 770\">\n" +
    "    <p style=\"padding-left: 40px; background-color: transparent; \"><i class=\"ion-plus-round\"></i>Add Record</p>\n" +
    "\n" +
    "  </ion-item>\n" +
    "\n" +
    "\n" +
    "  <!--<div class=\"record-items\">-->\n" +
    "\n" +
    "  <!--</div>-->\n" +
    "\n" +
    "\n" +
    "  <!--지우지말것-->\n" +
    "  <div class=\"search-wrapper\">\n" +
    "    <div class=\"search-bar\"\n" +
    "         ng-class=\"{'header-mobile':dev_width < 770, 'header-web':dev_width > 770}\"\n" +
    "         ng-hide=\"selected === 2\">\n" +
    "      <i class=\"icon-card\"\n" +
    "         ng-show=\"dev_width > 770\"></i>\n" +
    "      <div class=\"select-option item item-input item-select\"\n" +
    "           ng-show=\"dev_width > 770\">\n" +
    "        <select>\n" +
    "          <option selected> 전체검색</option>\n" +
    "          <option>제목검색</option>\n" +
    "          <option>내용검색</option>\n" +
    "        </select>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"sc-bar\"\n" +
    "           ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'width':'70%'}\">\n" +
    "        <label class=\"item item-input\">\n" +
    "          <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "          <input type=\"search\" placeholder=\"search\" ng-model=\"searchKeyword\"/>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <ion-list class=\"record-items\">\n" +
    "    <ion-item class=\"card-cover\" ng-repeat=\"item in items | filter: searchKeyword \"\n" +
    "              ng-bind-html=\"item | highlight:searchKeyword\">\n" +
    "      <!--<ion-option-button class=\"button-assertive\">delete</ion-option-button>-->\n" +
    "      <record-list-item item=\"item\" ng-click=\"viewRecordDetail()\"></record-list-item>\n" +
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
    "<ion-view class=\"record-page\">\n" +
    "  <ion-nav-title>\n" +
    "    <div class=\"view-title\" style=\"color:#e4ff2b; font-weight: 400; margin-left: 10px;\">Record\n" +
    "      <div class=\"recording-icon\"></div>\n" +
    "      <div class=\"recording-icon\"></div>\n" +
    "      <div class=\"recording-icon\"></div>\n" +
    "    </div>\n" +
    "  </ion-nav-title>\n" +
    "  <ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-back-button class=\"button-icon icon  ion-ios-arrow-back\">\n" +
    "    </ion-nav-back-button>\n" +
    "\n" +
    "\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "      <button class=\"button button-clear save-btn\" ng-click=\"openModal();\">\n" +
    "        Save\n" +
    "      </button>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"browser-landing\" id=\"main\">\n" +
    "\n" +
    "      <div class=\"time-count-section\">\n" +
    "        <h1 class=\"time-count\">{{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}\n" +
    "          <span class=\"mil-count\">.{{(\"0\"+(value)).slice(-2)}}</span>\n" +
    "        </h1>\n" +
    "\n" +
    "        <div class=\"soundwave\" ng-show=\"active\">\n" +
    "          <canvas id=\"canv\" width='400' height='400'></canvas>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"index-bar\">\n" +
    "        <div class=\"line\"></div>\n" +
    "        <div class=\"time-check\">00:00:00</div>\n" +
    "        <div class=\"bookmark-check\" ng-class=\"{'is-mark':bookmark_sign}\">\n" +
    "          <i class=\"icon-bookmark\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"videos-check\">Videos 0</div>\n" +
    "\n" +
    "        <div class=\"photos-check\">Photos 4</div>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"compact marquee\">\n" +
    "\n" +
    "        <div id=\"info\" style=\"visibility: visible; text-align: center;\">\n" +
    "          <p id=\"info_start\" style=\"display: inline;\">\n" +
    "            <!--녹음 버튼을 누르면 녹음이 시작됩니다-->\n" +
    "          </p>\n" +
    "          <p id=\"info_speak_now\" style=\"display:none\">\n" +
    "            <!--레코딩중...-->\n" +
    "          </p>\n" +
    "          <p id=\"info_no_speech\" style=\"display:none\">\n" +
    "            <!--No speech was detected. You may need to adjust your <a-->\n" +
    "            <!--href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">microphone-->\n" +
    "            <!--settings</a>.-->\n" +
    "          </p>\n" +
    "          <p id=\"info_no_microphone\" style=\"display:none\">\n" +
    "            <!--No microphone was found. Ensure that a microphone is installed and that-->\n" +
    "            <!--<a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\">-->\n" +
    "            <!--microphone settings</a> are configured correctly.-->\n" +
    "          </p>\n" +
    "          <p id=\"info_allow\" style=\"display:none\">\n" +
    "            <!--Click the \"Allow\" button above to enable your microphone.-->\n" +
    "          </p>\n" +
    "          <p id=\"info_denied\" style=\"display:none\">\n" +
    "            <!--Permission to use microphone was denied.-->\n" +
    "          </p>\n" +
    "          <p id=\"info_blocked\" style=\"display:none\">\n" +
    "            <!--Permission to use microphone is blocked. To change, go to-->\n" +
    "            <!--chrome://settings/contentExceptions#media-stream-->\n" +
    "          </p>\n" +
    "          <p id=\"info_upgrade\" style=\"display:none\">\n" +
    "\n" +
    "            <!--Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a>-->\n" +
    "            <!--version 25 or later.-->\n" +
    "          </p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"results\">\n" +
    "          <div class=\"record-caption\">\n" +
    "            <h5>Speech Typing...</h5>\n" +
    "          </div>\n" +
    "          <!--<div id=\"waveform\"></div>-->\n" +
    "\n" +
    "          <span class=\"final\" id=\"final_span\"></span>\n" +
    "          <span class=\"interim\" id=\"interim_span\"></span>\n" +
    "        </div>\n" +
    "\n" +
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
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"circleCoainer\">\n" +
    "\n" +
    "    </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </ion-content>\n" +
    "  <div class=\"controller-section bar bar-footer\">\n" +
    "    <div class=\"trim-cover\">\n" +
    "      <div class=\"trim\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"controller-wrapper\">\n" +
    "      <div class=\"open-camera\">\n" +
    "        <button class=\"camera-btn\" ng-click=\"takePhoto()\">\n" +
    "        </button>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"record-buttons\">\n" +
    "        <button\n" +
    "          ng-class=\"{'stop-button':active,'record-button':!active}\"\n" +
    "          onclick=\"startButton(event)\"\n" +
    "          ng-click=\"recordStop()\">\n" +
    "\n" +
    "        </button>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"add-bookmark\">\n" +
    "        <button class=\"bookmark-btn\" ng-click=\"addBookmark()\"></button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
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
    "    <h1 class=\"title\"\n" +
    "        ng-class=\"{'title-m':dev_width < 770}\">\n" +
    "      {{ item.title }}</h1>\n" +
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
    "  <div class=\"content-wrap\" ng-style=\" (dev_width > 770) && { 'min-width' : '927px'}\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"search-wrapper\">\n" +
    "      <div class=\"search-bar\"\n" +
    "           ng-class=\"{'header-mobile':dev_width < 770, 'header-web':dev_width > 770}\"\n" +
    "           ng-hide=\"selected === 2\">\n" +
    "        <div class=\"select-option item item-input item-select\"\n" +
    "             ng-show=\"dev_width > 770\">\n" +
    "          <select>\n" +
    "            <option selected> 전체검색</option>\n" +
    "            <option>제목검색</option>\n" +
    "            <option>내용검색</option>\n" +
    "          </select>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"sc-bar\"\n" +
    "             ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'width':'86%'}\">\n" +
    "          <label class=\"item item-input\">\n" +
    "            <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "            <input type=\"search\" placeholder=\"search\" ng-model=\"searchKeyword\"/>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <ion-list class=\"scrap-items\"\n" +
    "              ng-class=\"{'scrap-list-mobile':dev_width < 770}\">\n" +
    "      <ion-item class=\"item \" ng-repeat=\"item in items  | filter: searchKeyword\"\n" +
    "                ng-click=\" itemClicked($index); openScrapViewModal();\"\n" +
    "                on-drag=\"lockSlide()\">\n" +
    "\n" +
    "        <div ng-class=\"{'selected-item': $index == selectedIndex }\"\n" +
    "             ng-hide=\"dev_width < 770\">\n" +
    "        </div>\n" +
    "        <div class=\"hover-wrapper\"></div>\n" +
    "        <a href=\"#\" class=\"scrap-content\">\n" +
    "          <!--<ion-option-button class=\"button-assertive\">delete</ion-option-button>-->\n" +
    "          <scrap-list-item item=\"item\"></scrap-list-item>\n" +
    "        </a>\n" +
    "        <button class=\"button view-btn\" ng-hide=\"dev_width < 770\" ng-click=\"viewScrapContents()\">view</button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "\n" +
    "\n" +
    "    <div class=\"scrap-preview\" ng-hide=\"dev_width < 770\">\n" +
    "      <h4 class=\"bdernone bb cc\"><i class=\"icon-scrap\"></i>\n" +
    "        <p>{{items[selectedIndex].title}}</p></h4>\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4><i class=\"icon-index\"></i>목차 <span\n" +
    "          class=\"leng\">{{items[selectedIndex].preview.index.length}}</span></h4>\n" +
    "        <ui class=\"list\">\n" +
    "          <li ng-repeat=\"subtitle in items[selectedIndex].preview.index\">\n" +
    "            {{ subtitle }}\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <!--<div class=\"scrap-images\">-->\n" +
    "      <!--<h4 class=\"mb\"><i class=\"icon-image\"></i>이미지 <span-->\n" +
    "      <!--class=\"leng\"> {{items[selectedIndex].preview.images.length}}</span></h4>-->\n" +
    "      <!--&lt;!&ndash;<ul>&ndash;&gt;-->\n" +
    "      <!--<ion-slide-box on-slide-changed=\"slideHasChanged($index)\">-->\n" +
    "      <!--<ion-slide ng-repeat=\"image in items[selectedIndex].preview.images\">-->\n" +
    "      <!--<img src=\"{{image}}\" alt=\"#\">-->\n" +
    "      <!--</ion-slide>-->\n" +
    "      <!--</ion-slide-box>-->\n" +
    "      <!--</div>-->\n" +
    "      <div class=\"scrap-images\">\n" +
    "        <h4 class=\"mb\"><i class=\"icon-image\"></i>이미지 <span\n" +
    "          class=\"leng\"> {{items[selectedIndex].preview.images.length}}</span></h4>\n" +
    "        <!--<button ng-click=\"slidePrevious()\">Previous</button>-->\n" +
    "        <!--<button ng-click=\"slideNext()\">Next</button>-->\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n" +
    "          <ion-slide>\n" +
    "            <img src=\"\" alt=\"Preview Images\">\n" +
    "          </ion-slide>\n" +
    "          <ion-slide>\n" +
    "            <img src=\"\" alt=\"Preview Images\">\n" +
    "          </ion-slide>\n" +
    "          <ion-slide>\n" +
    "            <img src=\"\" alt=\"Preview Images\">\n" +
    "          </ion-slide>\n" +
    "          <ion-slide>\n" +
    "            <img src=\"\" alt=\"Preview Images\">\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <h4><i class=\"icon-record\"></i>추천 레코드카드 <span class=\"leng\">{{items[selectedIndex].preview.images.length}}</span>\n" +
    "        </h4>\n" +
    "        <ui class=\"list\">\n" +
    "          <li class=\"list-items\" ng-repeat=\"resource in items[selectedIndex].preview.recommended\">\n" +
    "            {{ resource.resourceTitle }}\n" +
    "            <span class=\"leng\"> {{ resource.dataSet }}</span>\n" +
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
  $templateCache.put("templates/modal/all-resource-modal.html",
    "<ion-modal-view class=\"all-resource-modal\" ng-controller=\"allResourceModalController\">\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">All resource</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <div class=\"close-btn\" ng-click=\"closeModal()\"><i style=\"color: #666;\" class=\"ion-close-round\"></i></div>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    리소스 모달\n" +
    "    <div class=\"contents-wrap\">\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"resource-wrap\">\n" +
    "        <div class=\"resource\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-modal-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/modal/recommend-card-modal.html",
    "<ion-modal-view class=\"recommend-card-modal\">\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">추천 레코드카드</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <div class=\"close-btn\" ng-click=\"closeModal()\"><i style=\"color: #666;\" class=\"ion-close-round\"></i></div>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
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
  $templateCache.put("templates/modal/save-modal.html",
    "<ion-modal-view class=\"scrap-save-modal\">\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">\n" +
    "      커버페이지\n" +
    "    </h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <div class=\"close-btn\" ng-click=\"closeModal()\"><i style=\"color: #666;\" class=\"ion-close-round\"></i></div>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content ng-controller=\"saveModalController\" class=\"has-header\">\n" +
    "    <div class=\"list\">\n" +
    "      <label class=\"item item-input item-stacked-label\">\n" +
    "        <span class=\"input-label\" id=\"ssf\">TITLE</span>\n" +
    "        <input type=\"text\" id=\"add_title\" placeholder=\"input title\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input item-stacked-label\">\n" +
    "        <span class=\"input-label\">DESCRIPTION</span>\n" +
    "        <textarea placeholder=\"Input contents description\" id=\"add_description\" rows=\"6\"></textarea>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <p>COVER IMAGE</p>\n" +
    "    </div>\n" +
    "    <div class=\"card\" id=\"image_background\">\n" +
    "      <img id=\"image_background2\">\n" +
    "    </div>\n" +
    "    <div class=\"list\" style=\"margin-bottom:10px;\">\n" +
    "      <div class=\"item item-input item-stacked-label\">\n" +
    "        <p style=\"padding:0px;\"><span class=\"input-label\">Tags</span></p>\n" +
    "        <input type=\"text\" id=\"add_tag\" placeholder=\"input tag\" style=\"width:80%;display:inline-block;\">\n" +
    "        <button ng-click=\"addTag()\"\n" +
    "                style=\"float:right; border:none; background-color:white; font-size:20px; margin-right:20px;\">+\n" +
    "        </button>\n" +
    "      </div>\n" +
    "      <div id=\"new_tag\">\n" +
    "        <br>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "  <div class=\"bar bar-footer\" id=\"myP\">\n" +
    "    <div class=\"view-btn\" ng-click=\"closeModal();\"><span>저장하기</span></div>\n" +
    "  </div>\n" +
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
    "    <h1 class=\"title\"><i class=\"ion-ios-eye\" style=\"margin-right: 5px; font-size: 18px;\"></i>스크랩 미리보기</h1>\n" +
    "    <div class=\"buttons\">\n" +
    "      <div class=\"close-btn\" ng-click=\"closeModal()\"><i style=\"color: #666;\" class=\"ion-close-round\"></i></div>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ion-content ng-controller=\"scrapViewModalController\">\n" +
    "    <!--<ion-content class=\"has-footer\">-->\n" +
    "    <div class=\"scrap-preview\">\n" +
    "      <h4 class=\"bdernone bb\"><i class=\"icon-scrap\"></i>\n" +
    "        <p>{{items[selectedIndex].title}}</p></h4>\n" +
    "\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4><i class=\"icon-index\"></i>목차 <span\n" +
    "          class=\"leng\">{{items[selectedIndex].preview.index.length}}</span></h4>\n" +
    "        <ui class=\"list index-list\" style=\"margin-top: -12px;\">\n" +
    "          <li ng-repeat=\"subtitle in items[selectedIndex].preview.index\">\n" +
    "            {{ subtitle }}\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <!--<div class=\"scrap-images\">-->\n" +
    "      <!--<h4 class=\"mb\"><i class=\"icon-image\"></i>이미지 <span-->\n" +
    "      <!--class=\"leng\"> {{items[selectedIndex].preview.images.length}}</span></h4>-->\n" +
    "      <!---->\n" +
    "      <!--<ion-slide-box on-slide-changed=\"slideHasChanged($index)\">-->\n" +
    "      <!--<ion-slide ng-repeat=\"image in items[selectedIndex].preview.images\">-->\n" +
    "      <!--<img src=\"{{image}}\" alt=\"#\">-->\n" +
    "      <!--</ion-slide>-->\n" +
    "      <!--</ion-slide-box>-->\n" +
    "      <!--</div>-->\n" +
    "\n" +
    "      <div class=\"scrap-images\">\n" +
    "        <h4 class=\"mb\"><i class=\"icon-image\"></i>이미지 <span\n" +
    "          class=\"leng\"> {{items[selectedIndex].preview.images.length}}</span></h4>\n" +
    "        <!--<div class=\"preview-images\">-->\n" +
    "        <!--<ul>-->\n" +
    "        <!--<li class=\"images\" ng-repeat=\"image in items[selectedIndex].preview.images\">-->\n" +
    "        <!--<img src=\"{{image}}\" alt=\"\">-->\n" +
    "        <!--</li>-->\n" +
    "        <!--</ul>-->\n" +
    "\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\" on-drag=\"releaseSlide()\">\n" +
    "          <ion-slide ng-repeat=\"image in items[selectedIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"Preview Images\">\n" +
    "          </ion-slide>\n" +
    "\n" +
    "        </ion-slide-box>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <h4><i class=\"icon-record\"></i>추천 레코드카드 <span class=\"leng\">{{items[selectedIndex].preview.recommended.length}}</span>\n" +
    "        </h4>\n" +
    "        <ui class=\"list\">\n" +
    "          <li class=\"list-items\" ng-repeat=\"item in items[selectedIndex].preview.recommended\">\n" +
    "            <div class=\"record-item\">\n" +
    "\n" +
    "              <div class=\"content-wrap\"\n" +
    "                   style=\"background-image: url('{{item.images}}')\"\n" +
    "                   ng-style=\"(dev_width > 770) ? {'padding': '25px'}:{'padding': '15px'}\">\n" +
    "                <!--<div class=\"item-label\"></div>-->\n" +
    "                <div class=\"contents\"\n" +
    "                     ng-class=\"{'content-320px': dev_width < 322 }\">\n" +
    "                  <p class=\"date\"\n" +
    "                     ng-style=\"(dev_width > 770) ? {'top': '-45px', 'left': '-22px', 'font-size':'12px'}:{'top': '-35px'}\">\n" +
    "                    {{\n" +
    "                    item.date }} </p>\n" +
    "                  <h1 class=\"title\"\n" +
    "                      ng-style=\"(dev_width > 770) && {'font-size': '23px', 'margin-top':'0','height':'36px'}\"> {{\n" +
    "                    item.title }} </h1>\n" +
    "                  <div class=\"des-section\">\n" +
    "                    <p class=\"description\"\n" +
    "                       ng-style=\"(dev_width > 770) && {'font-size': '14px'}\"\n" +
    "                    > {{ item.Description }} </p>\n" +
    "                  </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class='background-filter'></div>\n" +
    "                <label class=\"tag\"\n" +
    "                       ng-style=\"(dev_width > 770) ? {'left': '15px'}:{'left': '5px'}\">\n" +
    "                  <span ng-repeat=\"tag in item.tags \">{{ tag }}</span></label>\n" +
    "                <div class=\"sub-contents\" ng-style=\"(dev_width > 770) ? {'right': '25px'}:{'right': '15px'}\">\n" +
    "                  <div class=\"noti\"> images {{ item.resource.images}}</div>\n" +
    "                  <div class=\"noti\"> videos {{item.resource.videos}}</div>\n" +
    "                  <div class=\"time\"> {{ item.time }}</div>\n" +
    "                </div>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "        </ui>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </ion-content>\n" +
    "  <div class=\"bar bar-footer\" id=\"myP\">\n" +
    "    <div class=\"view-btn\" ng-click=\"viewScrapContents(); closeModal();\"><span>스크랩 보기</span></div>\n" +
    "  </div>\n" +
    "</ion-modal-view>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("TypistApp"); }
catch(err) { module = angular.module("TypistApp", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directives/footer/footer-section.html",
    "<div class=\"footer-section\">\n" +
    "  <div class=\"dotted-spaced\">\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"footer1\">\n" +
    "    <div class=\"footer-left\">\n" +
    "      <div class=\"content-wrapper\">\n" +
    "        <div class=\"email-section\">\n" +
    "\n" +
    "          <img src=\"img/sub-log.png\" alt=\"#\">\n" +
    "          <div class=\"list list-inset\">\n" +
    "            <label class=\"item item-input\">\n" +
    "              <input type=\"text\" placeholder=\"Enter email to receive updates and newslatter\">\n" +
    "            </label>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"contact\">\n" +
    "          <p>Contact with us</p>\n" +
    "          <img class=\"sns-icon\" src=\"img/icon-sns/Facebook.png\" alt=\"#\">\n" +
    "          <img class=\"sns-icon\" src=\"img/icon-sns/Intsagram.png\" alt=\"#\">\n" +
    "          <img class=\"sns-icon\" src=\"img/icon-sns/Pinterest.png\" alt=\"#\">\n" +
    "          <img class=\"sns-icon\" src=\"img/icon-sns/Tumblr.png\" alt=\"#\">\n" +
    "          <img class=\"sns-icon\" src=\"img/icon-sns/Twitter.png\" alt=\"#\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"content-wrapper\">\n" +
    "      <div class=\"footer-right\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-25\"><a href=\"#\">About</a></div>\n" +
    "          <div class=\"col\"><p>The Typist is will record your all type data\n" +
    "            for easy use.</p></div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-25\"><a href=\"#\">Record File</a></div>\n" +
    "          <div class=\"col\"><p>Various data generated during recording It can be\n" +
    "            integrated on the basis of script timeline.</p></div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-25\"><a href=\"#\">Scrap Book</a></div>\n" +
    "          <div class=\"col\"><p>Typist Chrome extension offers Your proper\n" +
    "            resource at the time Searching reference of the report.</p></div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-25\"><a href=\"#\">Memory</a></div>\n" +
    "          <div class=\"col\"><p>Manage your resources and local and cloud memory.</p></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"dotted-spaced margin-top40\"></div>\n" +
    "\n" +
    "  <div class=\"copyright\">\n" +
    "    <h4>Copyright © 2016 Typist, Inc. </h4>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();
