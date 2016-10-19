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
    "        <div class=\"content-wrapper\">\n" +
    "          <div id=\"waveform\"\n" +
    "               ng-style=\" (dev_width < 770) ? { 'height': '34px','margin-top':'-20px','padding':'0' } : {'padding':'15px 0'}\"></div>\n" +
    "\n" +
    "          <div class=\"media-controller\">\n" +
    "            <div class=\"button-wrap\">\n" +
    "              <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "              <div class=\"button\" ng-class=\"{'icon ion-ios-play':!active,'icon ion-ios-pause':active}\"\n" +
    "                   ng-click=\"pauseCursor();\"></div>\n" +
    "              <!--<div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>-->\n" +
    "              <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"timer\">\n" +
    "              <h2>\n" +
    "                {{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}.{{(\"0\"+(value)).slice(-2)}}</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "          <div class=\"content-block\">\n" +
    "            <div class=\"resource-block\">\n" +
    "\n" +
    "              <div class=\"wrapper\">\n" +
    "                <div class=\"re-bar\">\n" +
    "                  <h4><i class=\"icon-image\"></i>리소스 뷰어</h4>\n" +
    "                  <!--<div class=\"resource-counter\">2/15</div>-->\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"viewer\">\n" +
    "                <div class=\"resource-item\" style=\"background-image: url('{{viewerSet.image}}')\"\n" +
    "                     ng-repeat=\"viewerSet in resourceitems\">\n" +
    "                  <a href=\"\" class=\"viewr-script-button\">\n" +
    "                    <div id=\"{{$index}}\" ng-click=\"scriptClcik($event)\">음성듣기</div>\n" +
    "                  </a>\n" +
    "                  <div class=\"indexCheck\">{{$index +1 + \"/\" + resourceitems.length}}</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"script-block\">\n" +
    "              <div class=\"wrapper\">\n" +
    "                <div class=\"sc-bar\"\n" +
    "                     ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "                  <h4><i class=\"icon-record\"></i>스크립트</h4>\n" +
    "\n" +
    "                  <label class=\"item item-input\">\n" +
    "                    <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                    <input type=\"text\" placeholder=\"Search\" ng-model=\"searchKeyword\" ng-focus=\"isFocus = true\"\n" +
    "                           ng-blur=\"isFocus = false\">\n" +
    "                  </label>\n" +
    "                  <div class=\"search-btn\" ng-show=\"isFocus == true\">\n" +
    "                    <a><i class=\"ion-android-arrow-dropup\"></i></a>\n" +
    "                    <a><i class=\"ion-android-arrow-dropdown\"></i></a>\n" +
    "                  </div>\n" +
    "                  <span class=\"result-index\">{{findScript.length}}</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"script-section\">\n" +
    "                <span class=\"no-result\" ng-show=\"findScript.length == 0\">검색 결과가 없습니다.</span>\n" +
    "                <div class=\"sub-wrapper\" ng-repeat=\"scriptSet in resourceitems  | filter:searchKeyword as findScript\">\n" +
    "\n" +
    "\n" +
    "                  <div class=\"label\"><i ng-show=\"scriptSet.bookmark\" class=\"icon-bookmark\"></i></div>\n" +
    "                  <div class=\"timecheck\">\n" +
    "                    {{scriptSet.time}}\n" +
    "                  </div>\n" +
    "                  <button class=\"button-clear\">\n" +
    "                    <p id=\"{{$index}}\" ng-click=\"scriptClcik($event)\"\n" +
    "                       ng-bind-html=\"scriptSet.script | highlight:searchKeyword\"\n" +
    "                       ng-class=\"{'play-script':scriptSet.isPlay == true}\">{{scriptSet.script}}</p>\n" +
    "                  </button>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--<div class=\"record-info\">-->\n" +
    "\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--모바일 바디 영역-->\n" +
    "    <div class=\"for-m\">\n" +
    "\n" +
    "\n" +
    "      <div class=\"header-background\" ng-show=\"isFocus == !true\" ng-hide=\"dev_width > 770\">\n" +
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
    "      </div>\n" +
    "\n" +
    "      <div class=\"contents-wrap\" ng-style=\"isFocus && {'margin-top':'0'}\">\n" +
    "        <div class=\"wrapper\">\n" +
    "\n" +
    "\n" +
    "          <div class=\"sc-bar\"\n" +
    "               ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "\n" +
    "            <h4><i class=\"icon-record\"></i>스크립트 <span class=\"result-index\">{{findScript.length}}</span></h4>\n" +
    "\n" +
    "            <label class=\"item item-input\">\n" +
    "              <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "              <input type=\"text\" placeholder=\"Search\" ng-model=\"searchKeyword\" ng-focus=\"isFocusCheck()\"\n" +
    "                     ng-blur=\"isFocusCheck()\">\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"script-section\"\n" +
    "             ng-style=\" (dev_width < 770) ? { 'padding-top':'5px' } : {'transformY':'10px'}\">\n" +
    "\n" +
    "          <div class=\"script\">\n" +
    "            <span class=\"no-result\" ng-show=\"findScript.length == 0\">검색 결과가 없습니다.</span>\n" +
    "            <div class=\"sub-wrapper\" ng-repeat=\"scriptSet in resourceitems  | filter:searchKeyword as findScript\">\n" +
    "\n" +
    "              <div class=\"label\"><i ng-show=\"scriptSet.bookmark\" class=\"icon-bookmark\"></i></div>\n" +
    "              <div class=\"timecheck\">\n" +
    "                {{scriptSet.time}}\n" +
    "              </div>\n" +
    "              <p id=\"{{$index}}\" ng-click=\"scriptClcik($event)\"\n" +
    "                 ng-bind-html=\"scriptSet.script | highlight:searchKeyword\"\n" +
    "                 ng-class=\"{'play-script':scriptSet.isPlay == true}\">{{scriptSet.script}}</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"bar bar-footer\" id=\"myP\" ng-show=\"isFocus == !true\" ng-if=\"(dev_width < 770)\">\n" +
    "\n" +
    "          <div class=\"timer\">\n" +
    "            <h2>\n" +
    "              {{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}.{{(\"0\"+(value)).slice(-2)}}</h2>\n" +
    "          </div>\n" +
    "          <div class=\"button-wrap\">\n" +
    "            <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "            <div class=\"button\" ng-class=\"{'icon ion-ios-play':!active,'icon ion-ios-pause':active}\"\n" +
    "                 ng-click=\"pauseCursor();\"></div>\n" +
    "            <!--<div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>-->\n" +
    "            <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
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
    "              <h2><span>1.</span>자동차 입/출력 장치와 인터페이스</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-1.png\" alt=\"#\">\n" +
    "                <p>- 90% 이상의 대부분 사용자들이 음성통화나 인터넷검색등을 위해서 스마트폰을 이용, 멀티미디어사용 및 인터넷 정보검색을 위해서 14% 운전자들이 태블릿사용하나 아직까지 는 낮은\n" +
    "                  태블릿 시장과 보급율 때문에 주로 스마트폰을 활용하고 있다. - 37% 사용자들이 운전중 핸즈프리(Hands free)를 위해 스마트폰과 연계된 블루투스 장 치를 이용하고 있다. -\n" +
    "                  외근이나 외부 업무처리를 위해서 16% 이용자들이 노트북과 PDA를 차량내부에서 사용 하며, 필요시 폰을 통한 테더링 방식으로 무선인터넷에 접속하고 있다. - 3% 의 적은 사용자들이\n" +
    "                  개인 MP3를 자동차에 연결해서 음악 감상하고, 주로 다기능 멀티미디어기능의 스마트폰 사용하며, 일반적으로는 차량에 설치된 라디오나 음악장비를 사용한다. - 높은 보급율과 저가\n" +
    "                  내비게이션 출현, 그리고 스마트폰의 내비게이션 기능을 통해 대부 분의 사람들이 교통정보, 길안내, 생활정보 및 빠른길찾기 등을 사용하고 있다. - 남성보다는 여성구매자가 높은 블랙박스\n" +
    "                  시장은, 아직은 낮은 보급률이지만 향후 내비 게이션처럼 차량 필수사양으로 확장된다고 전문가들은 전망하고 있다.\n" +
    "                  전체적으로 자동차의 기본개념인 운송수단으로써의 역할로 길안내, 실시간 교통정보등 의 내비게이션이 가장 필요한 기능으로 요구되었으며, 스마트 차량관리와 운전중 안전보 안 기능이 뒤를\n" +
    "                  이었다. 그외 자동차의 부가적인 기능인 음악,TV, 비디오, 미디어 감상등 엔터테인먼트등이 비슷한 선호도를 보였으며, 특히 무선 네트워크의 보급화와 무선인터넷을 활용한 정보검색이 보\n" +
    "                  다 높은 요구로 나타났다. - 기존의 자동차의 운송수단의 개념에서 개인화, 정보화의 개념으로 변화하고 있으며, 이 동의 목적에서 컨텐츠 소비와 생산의 목적으로 진화하고 있다. 특히\n" +
    "                  무선정보통신과 인터 넷을 발달을 통해서 무선모바일 경험들이 자동차안으로 들어오게되면서 자동차와 융합환 경을 만들고 있다. 이를 통해 ‘언제 어디서나’ 필요한 정보를 구할수 있고 항상\n" +
    "                  사람과\n" +
    "                  디바이스간 연결되어 소통할수 있으며, 편리함을 제공하는 환경으로 발전되고 있다. 이것 은 모바일로 원격제어가 가능한 스마트홈의 개인화, 정보화와 동일한 개념이라 할수 있 다.\n" +
    "                </p>\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-2.png\" alt=\"#\">\n" +
    "                <p>- 대부분의 이용자들이 차량에서 필요한 입력방식으로는 음성인식과 명령(76%) 와 키보 드(41%)를, 출력방식으로는 큰화면 (Bigger display)를 주로 선호하였다. 그외\n" +
    "                  빠른 노트 를 위해서 스타일러스 펜(Stylus, 34%)와 헤드업 디스플레이 (Head-up-display)를 언급하 였다. - 많은 컨텐츠를 효율적으로 소비하기 위해서 큰화면의\n" +
    "                  디스플레이 필요성을 언급하였다. 보다 안전성을 가진 입력방식인 음성인식기술과 실시간 빠른 입력을 위한 키보드도 선호 되었다. 별도의 키보드는 기존의 태블릿 사용자들이 회사나 가정에서\n" +
    "                  효과적인 입력을 위 해 블루투스 키보드를 사용하는 것과 같은 사용 형태로 분석된다.\n" +
    "                </p>\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"index-title\">\n" +
    "              <h2><span>2.</span>자동차 네비게이션 스크린 발전사례</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-3.png\" alt=\"#\">\n" +
    "                <p>텔레매틱스의 포괄적이고 불명확한 정의에도 불구하고 텔레매틱스의 대한 대중적 이미지 가 처음으로 유포되기 시작한 것은 해외에서는 1996년 미국 GM(General Motors)에서\n" +
    "                  -54- 운전중에 길을 잃었을 때도 자동으로 목적지를 안내해주는 서비스인 OnStar를 선보이면 서 부터이다. 이후 밴츠(Benz)도 보안 시스템을 갖춘 원격 진단 서비스인\n" +
    "                  TeleAid를 내놓 았으며, 포드 자동차도 퀄컴과 손잡고 합작회사를 설립, 텔레매틱스 서비스 구현에 나섰 다. 그밖에 도요다의 Monet이 일본에서 유사한 텔레매틱스 서비스를\n" +
    "                  시작하였다. 텔레매틱스의 기술적특징 텔레매틱스는 하드웨어에만 의지하는것이 아닌 서비스적인 개념을 크게 가진 포괄적 의미 이다. 기본적으로 텔레매틱스 기술이 실제로 구현되기 위해서는\n" +
    "                  자동차와 텔레매틱스 솔 루션, 서비스센터 그리고 인공위성 등이 구현되어야하며, 차량 환경이라는것을 고려해 음 성으로 모든 기계 명령을 내리고 정보를 읽어주는 음성인식 및 합성 기술이\n" +
    "                  필수적이다. 텔레매틱스는 보다 많은 양의 동영상, 지도, 데이트 등을 송수신하기 위해서 보다 빠른 통신 환경이 요구되고 있다. 기존의 CDMA모듈과 EVDO보다 데이터 전송속도가\n" +
    "                  진화된 Wibro와 HSDPA같은 무선인터넷 지원이 가능한 서비스속도와 최근 4세대 통신인 LTE서 비스망에서 더욱 빠른 확산을 전망하고 있다. 또한 차량의 위치파악을 위한 GPS\n" +
    "                  안테나 및 모듈은 필수 시스템이고, 이를 차량 필수 유닛간의 제어를 위해서 차내 LAN기술도 추 진되고 있다. 전체적으로 자동차 이동성(Mobility), 안전성(Safty),\n" +
    "                  안락성(Comfort) 구현을 위한 전상 기술의 역할증대, 하드웨어 동작위주의 기기에서 소프트웨어 플랫폼을 중심으로한 기술진 화로 진행하고 있으며, 특히 유무선 네크워크를 활용한\n" +
    "                  자동차 제어기술이 보편화되면서 중추기술인 CAN(Controller Area Network:전자장비연계),LIN(Local Interconnect Network:자동차 편의시설\n" +
    "                  제어),MOST(Media Oriented System Transport: 자동차 항법 장치, 엔터테인먼트, 이동통신단말기 장비와 연결) 네크워크 적용 활성화, 무선통신(4G,\n" +
    "                  Wibro, HSDPA, DMB)을 통한 정보 매체로서의 시스템 진화, 차량 및 정보통신 분야에 대한 네트워크의 국제 표준화와 적극적인 적용이 이루어지고 있다.</p>\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-4.png\" alt=\"#\">\n" +
    "                <p>ITS, 지능형 교통시스템은 도로인프라와 교통시스템 그리고 자동차에 전자, 통신, 제어 첨 단기술을 접목시켜, 보다 안전하고 운영의 효율화를 꾀한 새로운 교통시스템으로 급속 진\n" +
    "                  화하고 있다. ITS의 핵심은 교통정보이다. 이는 지능형 도로의 궁극적인 목표가 원활한 차량 소통에 있 는데, 이러한 점은 교통정보의 효율적인 관리와 운용을 목표로 하고 있다.\n" +
    "                  교통정보 수집 은 수도권, 첨단교통 모델도시, 고속도로 및 국도로 구분하여 각각 해당기관이 자체적으 로 구축한 수집시스템으로 교통정보를 수집하고 있으며, 데이터는 가공되어 소통정보,\n" +
    "                  소 요시간, 영상정보, 유가정보 등의 정보를 인터넷, 모바일등 다양한 매체로 제공되고 있다. 특히 내비게이션이나 모바일폰 등을 통해서 실시간 교통정보를 쉽게 확인하고 접근해서 볼 수\n" +
    "                  있으며 또한 통신사업자들도 이것을 수익 모델로 한 서비스를 제공하고 있다.</p>\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"index-title\">\n" +
    "              <h2><span>3.</span>스마트카 UX서비스 트렌드</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-5.png\" alt=\"#\">\n" +
    "                <p>LBS는 위치기반 서비스로, 사용자의 현재 위치를 파악하여 이를 각종 서비스와 연계하는 서비스로 유비쿼터스의 핵심 기능 중 하나다. LBS를 이용할 경우 실시간 교통정보, 자동\n" +
    "                  차 내비게이션기능, 최단경로 및 최적경로 제공, 각종 물류시스템, 위치기반의 차별화된 과금 시스템, 맛집정보, 비상 구조 지원, 대중교통 위치 및 도착시간 제공등 위치기반 특 화\n" +
    "                  정보 및 맞춤 정보제공이 가능하다. 이와 관련해 모바일시장의 위치기반의 SNS서비스 도 더욱 활성화되고 있다. 사용자의 현재 위치를 찾아주는GPS와 유사개념인\n" +
    "                  GIS(Geographic Information System) 는 지리 정보 시스템으로 공간상의 위치를 도형 및 속성 자료로 통합 연결하여 처리하는\n" +
    "                  시스템을 말한다. 즉 이용자의 위치를 지도에 표시해주거나 주변 정보를 제공해주는 것이 GIS이다. ITS는 실시간 교통정보를 수집, 가공하여 제공하는 차세대 교통체계를 말한다.\n" +
    "                  그리고 도 시통합 관제기술은 U시티내에서 일어나는 모든 도시정보를 수집하고 통합 분석하여 이를 실시간 제공한다.55) LBS의 주요한 특징은 고객이 요구하는 정보를 이동통신\n" +
    "                  단말기를 통해 실시간으로 제공 하는 즉시성, 전국 어디서나 서비스 제공이 가능한 이동성, 개인의 현재 위치와 요구사항 에 맞는 서비스 제공의 개인성을 들 수 있다. 이러한 특성의\n" +
    "                  결합으로 LBS는 긴급구조, 미아방지 등의 단순위치추적서비스, 이동통신 서비스의 고도화 및 위치측위 기술의 발달 에 따라 엔터테인먼트, 교통, 의료, 환경, 물류, 모바일\n" +
    "                  상거래(M-Commerce)등의 다양한 서비스 활용으로 확대, 발전이 가능하다.</p>\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-6.png\" alt=\"#\">\n" +
    "\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"index-title\">\n" +
    "              <h2><span>4.</span>자율주행차 인터페이스 상관관계</h2>\n" +
    "            </div>\n" +
    "            <div class=\"scrap-content\">\n" +
    "              <div class=\"scrap-divider\">\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-7.png\" alt=\"#\">\n" +
    "                <p>퀄컴와의 합작회사인 윙캐스트 (Wingcast)는 막대한 투자자금이 투입되었음에도 불구하고 가입자 수가 기대에 크게 못미치자 사업을 중단해버렸다. 2007년 마이크로소프트사와\n" +
    "                  공동으로\n" +
    "                  개발해서 첫선을 보인 ‘싱크(SYNC)’ 마이크로소프 트의 내장형 OS인 ‘오트(Auto)’를 기반으로하며 음성인식등을 제공하고 휴대폰 연결후 통 화기능 지원등의 디지털기기와의\n" +
    "                  연계성을\n" +
    "                  강조한 서비스를 시작했다. 2010년 ‘싱크 앱링크(Sync Applink)라는 업그레이드된 서비스 플랫폼을 개발하고 기존 싱 크서비스의 기본기능외에 안드로이드와 블랙베리 스마트폰의\n" +
    "                  애플리케이션을 다운로드해 서 사용있고 특히 자동차 운행에 필요한 애플리케이션을 사용할 수 있도록 하고, 싱크용 모바일 애플리케이션을 개발과 확산을 장려하고 있다.68) 2011년,\n" +
    "                  소니와\n" +
    "                  협력하여 새로운 인포테인먼트 시스템인 마이포드(MyFord)를 개발해서 익스플로러(Exploror)에 적용하였다. 오디오 장착 기능 및 차량용 정보 단말기 개발로 모 바일 기능을\n" +
    "                  도입되면서 기존의 Sync(싱크) 시스템에서 별도의 LCD스크린이 추가되고 기 능이 개선되었다\n" +
    "                </p>\n" +
    "                <img class=\"scrap-image\" src=\"img/scrap-img/scrap-8.png\" alt=\"#\">\n" +
    "                <p>텔레에이드(TeleAid)는 운전자가 사고를 당했을 경우 위급 상황에서 탈출할 수 있도록 돕 는 시스템이다. 이것은 GSP 위성추적시스템과 연계되어 사고가 발생되면 차량에 장착된\n" +
    "                  충돌\n" +
    "                  센서들이 사고내용을 기록한 뒤, 곧바로 차량의 위치와 차번호, SOS 신호와 함께 가까운 서비스센터로 송출되는 서비스이다. 2008년식 차량부터 I-Pod 및 I-Phone을 위한\n" +
    "                  조향\n" +
    "                  휠 제어장치 관련 솔루션개발과 2012 년 CES쇼를 통해 ‘페이스북 카’를 공개했다. SL모델에 적용될 것으로 온라인의 페이스북 의 모든 기능이 아닌 일부의 커뮤니케이션 기능위주로\n" +
    "                  적용되는데, 여기서 중요한 경험은 위치 정보를 활용해서 운전자의 주변 정보를 보여주고 좋은 장소, 레스토랑을 공유하고 현재 교통상황을 고려해, 친구에게 도착 예정시간을 알려주는 것도\n" +
    "                  가능하다\n" +
    "                </p>\n" +
    "                <span class=\"annotation\">http://programmingsummaries.tistory.com/141</span>\n" +
    "              </div>\n" +
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
    "                        Sunday, Feb 21 1:09PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>3D포스터치와 GUI & PUI</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p>화면의 디자인이라는것 자체도 굉장히 많이 바뀌었어요 지금 여러분 웨어러블에서 중요한 디자인 원리중에 glancability라고 들어보셨을거에요\n" +
    "                          힐끔볼 수 있는거 이게 구십년대 자동차 유아이에서 디자인원리야 왜냐면 목숨걸고하는 유아이 디자인이니까 그죠 예 그걸 한참보면 안되잖아요 잠깐 보고 눈에띄고 이해할수있는\n" +
    "                          그래서 이런 디자인이 하나의 예시로서 여러분들에게 앞으로의 우리가 hci가 어떻게 변해야되느냐 그렇죠 ux가 어떻게 변해야되느냐 굉장히 중요한 시사점을 지니고\n" +
    "                          있다</p>\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <img src=\"img/scrap-img/scrap-resource/scrap-resource-4.png\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-image\"></i>\n" +
    "                        <p>지금까지의 디바이스가 우리가 얘기하는 인터렉션은 일대일의 방식이었어요 근데 전체적으로 스마트카 아이오티 웨어러블 인공지능 로봇 이렇게되면서 이 기본적인 뭐 아주\n" +
    "                          기초적인 디자인 가이드라인이 안먹혀요 전혀 다른 세상입니다 그래서 아셔야되요 이거는 뭐 기존에잇던거 다시하는 패러다임이 바뀌는거니까 어쩌면 우리에게는 새로운 기회가\n" +
    "                          될지도 모르겠어요 그리고 또 하나가 저희가 지금 여러가지 축이 있지만 또 하나가 오늘 드릴 어 말씀드리는게 입력에 관한거에요\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"recordcard\">\n" +
    "                    <div class=\"resource-header\">\n" +
    "                      <div class=\"rc-date\">\n" +
    "                        Saturday, Mar 12 5:33PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>Gesture Interaction을 통한 모바일 경험 향상</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p>화면도 커졌는데 사진 축소 확대를 두손들고 하는거 보다 그죠 예 이런거 할 수 있겠고 그래서 요로한 저희가 지금까지 하지않았던 새로운 디멘드를 여는 방식을 할 수 있고\n" +
    "                          그게 단순히 애플에서 포스터치를 이용했다는걸 넘어서서 어쩌면 우리나라한테 스마트폰뿐만아니라 다른 여러 여러가지 영역에서 새로운 인터렉션방식 더 편하게 이용할수있는\n" +
    "                          생기는것들이 대화면으로 갈수록 할수가 있겠죠</p>\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <img src=\"img/scrap-img/scrap-resource/scrap-resource-3.png\" alt=\"\">\n" +
    "                      </div>\n" +
    "\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-image\"></i>\n" +
    "                        <p>실제로 이렇게 공간을 컨트롤하기위해서는 힘이 우리가 가하는힘은 굉장히 연속적으로 힘을 가합니다 그런데 그 우리가 뭐 에어컨이나 모바일 쥐유아이에서 사용하는 방식은 그\n" +
    "                          힘의 크기를 이렇게 범주화 해서 단계화해서 그깊이를 단계별로 힘을 구분을 하는데요 그런데 사람의 손가락 힘에 대한 고려없이 이제 그래서 사람이 어떻게 손가락힘을 누르는\n" +
    "                          그 크기에대한 고려없이 설계하게될경우 사용자 경험이 우려가 되고 어 그래서 어 우려가되는 상황입니다</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"recordcard\">\n" +
    "                    <div class=\"resource-header\">\n" +
    "                      <div class=\"rc-date\">\n" +
    "                        Saturday, May 10 12:24PM / SEOUL\n" +
    "                      </div>\n" +
    "                      <div class=\"title\">\n" +
    "                        <h3>표면 질감 렌더링 기법을 이용한 모바일 입력방법</h3>\n" +
    "                      </div>\n" +
    "                      <a href=\"#/app/record-detail\" class=\"rc-button\">리소스보기</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"rc-content\">\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <img src=\"img/scrap-img/scrap-resource/scrap-resource-5.png\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"rc-script\">\n" +
    "                        <i class=\"icon-bookmark\"></i>\n" +
    "                        <p>오디토리오 컬러랑 햅틱 사이에 상호작용이 유의미하고 그리고 햅틱이 있느냐 없느냐에 따라서 컬러랑 아 컬러랑 그리고 소리 에 영향을 받게되는데요 이와같은 경우엔 햅틱이\n" +
    "                          없는데 햅틱이 여기없는데 예를들어서 컬러가 이렇게 내려가면 오디토리가 센텐에 감소하는데 여기서는 이렇게 증가해서 좀더 다른 상호작용이 보입니다 이런 그렇게 이제 그\n" +
    "                          어떤의미냐면은 이제 멀티호환이 될수록 점점 반응시간이 커 커지게 된다는 그래서 근데 이제 반면에 나오는게 만족도를 조사했을때에는 그냥 단순한 어떤 햅틱이 좋냐 비주얼이\n" +
    "                          좋냐 비주얼적인 사이즈 컬러가 좋냐 그리고 그리고 소리가 좋냐라고 했을때 만족도에서는 아까전에 소리가 어떤 가장 반응시간이 빠른반면에 소리가 이제 안좋다라고 했습니다\n" +
    "                        </p>\n" +
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
    "  <div class=\"bar bar-footer\" id=\"myP\" ng-show=\"(dev_width < 770)\">\n" +
    "    <div class=\"view-btn\" ng-click=\"recommendCard()\"><span>추천 레코드 카드(2)</span></div>\n" +
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
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: rgba(255, 71, 123, 1);\"> 이미지 (17 GB)</i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-image\"></i>전체 이미지 파일<span>214개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color:  rgba(114, 221, 70, 1);\"> 동영상 (23 GB) </i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-video\"></i>전체 동영상 파일<span>34개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: rgba(255, 163, 0, 1);\"> 음성파일 (10 GB) </i></div>\n" +
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
    "            ng-hide=\"dev_width > 770\"\n" +
    "            ng-if=\"findItems.length !== 0\">\n" +
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
    "          <input type=\"search\" placeholder=\"search\" ng-model=\"searchKeyword\" ng-focus=\"isFocus = true\"\n" +
    "                 ng-blur=\"isFocus = false\"/>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <ion-list class=\"record-items\">\n" +
    "    <span class=\"no-result\" ng-show=\"findItems.length == 0\">검색 결과가 없습니다.</span>\n" +
    "    <ion-item class=\"card-cover\" ng-repeat=\"item in items | filter: searchKeyword as findItems\"\n" +
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
    "\n" +
    "        <div class=\"videos-check\">Videos 0</div>\n" +
    "        <div class=\"photos-check\">Photo\n" +
    "          <span ng-show=\"imgURI !== undefined\">1</span>\n" +
    "          <span ng-show=\"imgURI === undefined\">0</span>\n" +
    "        </div>\n" +
    "        <div class=\"img-preview\">\n" +
    "          <img ng-show=\"imgURI !== undefined\" ng-src=\"{{imgURI}}\" alt=\"\">\n" +
    "          <div class=\"pre-placeholder\" ng-show=\"imgURI === undefined\"></div>\n" +
    "        </div>\n" +
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
    "\n" +
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
    "            <input type=\"search\" placeholder=\"search\" ng-model=\"searchKeyword\" ng-focus=\"isFocus = true\"\n" +
    "                   ng-blur=\"isFocus = false\"/>\n" +
    "            <span ng-show=\"isFocus === true\"> {{findItem.length}}</span>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <span class=\"no-result\" ng-show=\"findItems.length == 0\">검색 결과가 없습니다.</span>\n" +
    "    <ion-list class=\"scrap-items\"\n" +
    "              ng-class=\"{'scrap-list-mobile':dev_width < 770}\"\n" +
    "              ng-style=\"isFocus === true && {'width':'100%'}\">\n" +
    "\n" +
    "      <ion-item class=\"item \" ng-repeat=\"item in items  | filter: searchKeyword as findItems\"\n" +
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
    "    <div class=\"scrap-preview\" ng-hide=\"dev_width < 770\" ng-if=\"isFocus == !true\">\n" +
    "      <!--<h4 class=\"bdernone bb cc\"><i class=\"icon-scrap\"></i>-->\n" +
    "      <!--<p>{{items[selectedIndex].title}}</p></h4>-->\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4 style=\" border-top: none;\"><i class=\"icon-index\"></i>목차 <span\n" +
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
    "        <h4 class=\"mb\"><i class=\"icon-image\"></i>스크랩 이미지\n" +
    "          <span class=\"leng\"> {{activeIndex + 1}}/{{items[selectedIndex].preview.images.length}}</span>\n" +
    "        </h4>\n" +
    "        <!--<button ng-click=\"slidePrevious()\">Previous</button>-->\n" +
    "        <!--<button ng-click=\"slideNext()\">Next</button>-->\n" +
    "        <!--<span class=\"leng\" ng-click=\"slideNext(activeIndex)\"><i class=\"ion-chevron-right\"></i></span>-->\n" +
    "        <!--<span class=\"leng\" ng-click=\"slidePrevious(activeIndex)\"><i class=\"ion-chevron-left\"></i></span>-->\n" +
    "        <ion-slides options=\"options\" slider=\"data.slider\">\n" +
    "\n" +
    "          <ion-slide-page ng-repeat=\"image in items[selectedIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"Preview Images\">\n" +
    "          </ion-slide-page>\n" +
    "\n" +
    "        </ion-slides>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <h4><i class=\"icon-record\"></i>추천 레코드카드 <span\n" +
    "          class=\"leng\">{{items[selectedIndex].preview.recommended.length}}</span>\n" +
    "        </h4>\n" +
    "        <ui class=\"list resource-list\">\n" +
    "          <li class=\"list-items\" ng-repeat=\"resourceCard in items[selectedIndex].preview.recommended\">\n" +
    "            <!--{{ resource.preview.recommended.title}}-->\n" +
    "            <!--<span class=\"leng\"> {{ resource.preview.recommended.title }}</span>-->\n" +
    "\n" +
    "            <div class=\"resource-content-wrap\"\n" +
    "                 style=\"background-image: url('{{resourceCard.images}}')\">\n" +
    "              <!--<div class=\"item-label\"></div>-->\n" +
    "              <div class=\"contents\">\n" +
    "                <p class=\"date\"> {{ resourceCard.date }} </p>\n" +
    "                <h1 class=\"title\"> {{ resourceCard.title }} </h1>\n" +
    "                <div class=\"des-section\">\n" +
    "                  <p class=\"description\"> {{ resourceCard.Description }} </p>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "              <div class='background-filter'></div>\n" +
    "              <!--<label class=\"tag\"-->\n" +
    "              <!--ng-style=\"(dev_width > 770) ? {'left': '15px'}:{'left': '5px'}\">-->\n" +
    "              <!--<span ng-repeat=\"tag in resourceCard.tags \">{{ tag }}</span></label>-->\n" +
    "              <!--<div class=\"sub-contents\" ng-style=\"(dev_width > 770) ? {'right': '25px'}:{'right': '15px'}\">-->\n" +
    "              <!--<div class=\"noti\"> images {{ resourceCard.resource.images}}</div>-->\n" +
    "              <!--<div class=\"noti\"> videos {{resourceCard.resource.videos}}</div>-->\n" +
    "              <!--<div class=\"time\"> {{ item.time }}</div>-->\n" +
    "              <!--</div>-->\n" +
    "              <!--</label>-->\n" +
    "            </div>\n" +
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
    "        <ui class=\"list index-list\">\n" +
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
    "        <h4 class=\"mb\"><i class=\"icon-image\"></i>스크랩 이미지\n" +
    "          <span class=\"leng\"> {{activeIndex + 1}}/{{items[selectedIndex].preview.images.length}}</span>\n" +
    "        </h4>\n" +
    "        <!--<div class=\"preview-images\">-->\n" +
    "        <!--<ul>-->\n" +
    "        <!--<li class=\"images\" ng-repeat=\"image in items[selectedIndex].preview.images\">-->\n" +
    "        <!--<img src=\"{{image}}\" alt=\"\">-->\n" +
    "        <!--</li>-->\n" +
    "        <!--</ul>-->\n" +
    "\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <ion-slides options=\"options\" slider=\"data.slider\">\n" +
    "\n" +
    "          <ion-slide-page ng-repeat=\"image in items[selectedIndex].preview.images\">\n" +
    "            <img src=\"{{image}}\" alt=\"Preview Images\">\n" +
    "          </ion-slide-page>\n" +
    "\n" +
    "        </ion-slides>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <h4><i class=\"icon-record\"></i>추천 레코드카드 <span\n" +
    "          class=\"leng\">{{items[selectedIndex].preview.recommended.length}}</span>\n" +
    "        </h4>\n" +
    "        <ui class=\"list resource-list\">\n" +
    "          <li class=\"list-items\" ng-repeat=\"resourceCard in items[selectedIndex].preview.recommended\">\n" +
    "            <!--{{ resource.preview.recommended.title}}-->\n" +
    "            <!--<span class=\"leng\"> {{ resource.preview.recommended.title }}</span>-->\n" +
    "\n" +
    "            <div class=\"resource-content-wrap\"\n" +
    "                 style=\"background-image: url('{{resourceCard.images}}')\">\n" +
    "              <!--<div class=\"item-label\"></div>-->\n" +
    "              <div class=\"contents\">\n" +
    "                <p class=\"date\"> {{ resourceCard.date }} </p>\n" +
    "                <h1 class=\"title\"> {{ resourceCard.title }} </h1>\n" +
    "                <div class=\"des-section\">\n" +
    "                  <p class=\"description\"> {{ resourceCard.Description }} </p>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "              <div class='background-filter'></div>\n" +
    "              <!--<label class=\"tag\"-->\n" +
    "              <!--ng-style=\"(dev_width > 770) ? {'left': '15px'}:{'left': '5px'}\">-->\n" +
    "              <!--<span ng-repeat=\"tag in resourceCard.tags \">{{ tag }}</span></label>-->\n" +
    "              <!--<div class=\"sub-contents\" ng-style=\"(dev_width > 770) ? {'right': '25px'}:{'right': '15px'}\">-->\n" +
    "              <!--<div class=\"noti\"> images {{ resourceCard.resource.images}}</div>-->\n" +
    "              <!--<div class=\"noti\"> videos {{resourceCard.resource.videos}}</div>-->\n" +
    "              <!--<div class=\"time\"> {{ item.time }}</div>-->\n" +
    "              <!--</div>-->\n" +
    "              <!--</label>-->\n" +
    "            </div>\n" +
    "\n" +
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
