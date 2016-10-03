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
    "           <!--ng-style=\"(dev_width < 770) ? {'border-radius': '12px',-->\n" +
    "    <!--'margin': '0 7px'}:{'border-radius': '12px' }\">-->\n" +
    "        <div class=\"header\">\n" +
    "          <div class=\"header-wrap\"\n" +
    "               ng-style=\" (dev_width > 770) ? { 'margin-bottom':'10px', 'height':'90px', 'padding-top':'40px',\n" +
    "                'border-bottom':'1px solid #ededed' } : {'transformY':'10px'} \">\n" +
    "\n" +
    "            <h3 ng-hide=\"dev_width < 770\"><i class=\" header-icon\"\n" +
    "                                             ng-class=\"{'icon-record':selected === 0, 'icon-scrap': selected === 1, 'icon-memory':selected === 2 }\"></i>{{pageTitle}}\n" +
    "            </h3>\n" +
    "\n" +
    "            <div class=\"search-bar\"\n" +
    "                 ng-class=\"{'header-mobile':dev_width < 770, 'header-web':dev_width > 770}\"\n" +
    "                 ng-hide=\"selected === 2\">\n" +
    "              <i class=\"icon-card\"\n" +
    "                 ng-show=\"dev_width > 770\"></i>\n" +
    "\n" +
    "              <!--<label class=\"item item-input item-select\">-->\n" +
    "\n" +
    "              <!--<select>-->\n" +
    "              <!--<option selected>전체검색</option>-->\n" +
    "              <!--<option>제목검색</option>-->\n" +
    "              <!--<option>내용검색</option>-->\n" +
    "              <!--</select>-->\n" +
    "              <!--</label>-->\n" +
    "\n" +
    "\n" +
    "              <div class=\"select-option item item-input item-select\"\n" +
    "                   ng-show=\"dev_width > 770\">\n" +
    "                <select>\n" +
    "                  <option selected> 전체검색</option>\n" +
    "                  <option>제목검색</option>\n" +
    "                  <option>내용검색</option>\n" +
    "                </select>\n" +
    "                <!--<i class=\"ion-chevron-down\"></i>-->\n" +
    "              </div>\n" +
    "              <!--<div -->\n" +
    "              <!--ng-show=\"dev_width > 770\">-->\n" +
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
    "                   ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'12px 20px' } : {'width':'50%'}\">\n" +
    "                <label class=\"item item-input\">\n" +
    "                  <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                  <input type=\"text\" placeholder=\"Search\">\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
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
    "\n" +
    "    </img>\n" +
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
    "          <!--<div class=\"title\">-->\n" +
    "            <!--<h1 class=\"detail-title\">인터랙션 연구분야의 시선추 활용사례</h1>-->\n" +
    "          <!--</div>-->\n" +
    "          <!--<div class=\"date\">-->\n" +
    "            <!--Saterday, Feb 17 3:11 PM / TAEBACK-->\n" +
    "          <!--</div>-->\n" +
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
    "\n" +
    "          </div>\n" +
    "          <!--<div class=\"tag\" ng-hide=\"dev_width < 770\">-->\n" +
    "          <!--<span>테그들입니다1</span>-->\n" +
    "          <!--<span>테그들입니다2</span>-->\n" +
    "          <!--<span>테그들입니다3</span>-->\n" +
    "          <!--</div>-->\n" +
    "          <!--<div class=\"btn-wrapper\">-->\n" +
    "          <!--<button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i-->\n" +
    "          <!--class=\"icon-delete detail-icon\"></i>-->\n" +
    "          <!--<a class=\"nav-btn\">Delete</a>-->\n" +
    "          <!--</button>-->\n" +
    "\n" +
    "          <!--<button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i-->\n" +
    "          <!--class=\"icon-resource detail-icon\"></i>-->\n" +
    "          <!--<a class=\"nav-btn\" href=\"#\">All resource</a>-->\n" +
    "          <!--</button>-->\n" +
    "          <!--</div>-->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--모바일 네비게이션-->\n" +
    "    <div class=\"for-m\" ng-hide=\"dev_width > 770\">\n" +
    "      <div class=\"view-title\" side=\"left\">\n" +
    "        <div class=\"title-wrapper\">\n" +
    "          <div class=\"title\">\n" +
    "            모바일버전 가제목입니다.\n" +
    "          </div>\n" +
    "          <div class=\"date\">\n" +
    "            Saterday, Feb 17 3:11 PM / TAEBACK\n" +
    "          </div>\n" +
    "          <div class=\"tag\" ng-hide=\"dev_width < 770\">\n" +
    "            <span>테그들입니다1</span>\n" +
    "            <span>테그들입니다2</span>\n" +
    "            <span>테그들입니다3</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </ion-nav-title>\n" +
    "  <!--<ion-header-bar class=\"bar bar-subheader\"  align-title=\"left\" ng-if=\"(dev_width > 770)\">-->\n" +
    "    <!--&lt;!&ndash;<h1 class=\"detail-title\">웹버전 가제목입니다.</h1>&ndash;&gt;-->\n" +
    "    <!--<div class=\"tag\" ng-hide=\"dev_width < 770\">-->\n" +
    "      <!--<i class=\"ion-pricetag\"></i>-->\n" +
    "      <!--<span>테그들입니다1</span>-->\n" +
    "      <!--<span>테그들입니다2</span>-->\n" +
    "      <!--<span>테그들입니다3</span>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "  <!--</ion-header-bar>-->\n" +
    "  <ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-back-button class=\"button-clear back-btn\">\n" +
    "     <i class=\"ion-ios-arrow-back\"></i> <p ng-hide=\"dev_width < 770\">리스트 목록가기</p>\n" +
    "    </ion-nav-back-button>\n" +
    "\n" +
    "\n" +
    "    <!--<ion-nav-buttons side=\"right\">-->\n" +
    "    <!--<button class=\"button button-clear save-btn\" ng-click=\"openModal();\">-->\n" +
    "    <!--Save-->\n" +
    "    <!--</button>-->\n" +
    "    <!--</ion-nav-buttons>-->\n" +
    "    <!---->\n" +
    "    <!--<ion-nav-buttons side=\"right\">-->\n" +
    "    <!--<button class=\"button button-clear \" ng-click=\"allResourceModal()\"><i class=\"icon-resource detail-icon\"></i>-->\n" +
    "    <!--<a class=\"nav-btn\" href=\"#\">All resource</a>-->\n" +
    "    <!--</button>-->\n" +
    "    <!--<button class=\"button button-clear\" ng-click=\"deleteRecord()\"><i class=\"icon-delete detail-icon\"></i>-->\n" +
    "    <!--<a class=\"nav-btn\">Delete</a>-->\n" +
    "    <!--</button>-->\n" +
    "    <!--</ion-nav-buttons>-->\n" +
    "  </ion-nav-bar>\n" +
    "  <!--<ion-header-bar align-title=\"left\" class=\"bar-positive\">-->\n" +
    "\n" +
    "  <!--</ion-header-bar>-->\n" +
    "  <!---->\n" +
    "\n" +
    "\n" +
    "  <!--<ion-content scroll=\"false\" ng-class=\"{'has-subheader':dev_width > 770}\">-->\n" +
    "  <ion-content scroll=\"false\">\n" +
    "\n" +
    "    <!--웹 바디 영역-->\n" +
    "    <div class=\"for-w\" id=\"wrap\" ng-hide=\"dev_width < 770\">\n" +
    "\n" +
    "      <div class=\"header-background\" id=\"header\">\n" +
    "        <div class=\"date\">\n" +
    "          Saterday, Feb 17 3:11 PM / TAEBACK\n" +
    "        </div>\n" +
    "        <h1>인터랙션 연구분야의 시선추 활용사례 </h1>\n" +
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
    "        <!--<detail-preview-images></detail-preview-images>-->\n" +
    "\n" +
    "\n" +
    "        <div id=\"waveform\"\n" +
    "             ng-style=\" (dev_width < 770) ? { 'height': '34px','margin-top':'-20px','padding':'0' } : {'padding':'15px 0'}\"></div>\n" +
    "\n" +
    "        <div class=\"media-controller\">\n" +
    "          <div class=\"button-wrap\">\n" +
    "            <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "            <div class=\"button  icon ion-ios-play\" ng-click=\"pauseCursor();\"></div>\n" +
    "            <div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>\n" +
    "            <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"timer\">\n" +
    "            <h2>00:00:00</h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"content-block\">\n" +
    "          <div class=\"resource-block\">\n" +
    "            <div class=\"wrapper\">\n" +
    "              <div class=\"re-bar\">\n" +
    "                <h4><i class=\"icon-image\"></i>리소스 뷰어</h4>\n" +
    "                <div class=\"resource-counter\">2/15</div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"viewer\">\n" +
    "              <div class=\"resource-item\">\n" +
    "\n" +
    "              </div>\n" +
    "              <div class=\"resource-item\">\n" +
    "\n" +
    "              </div>\n" +
    "              <div class=\"resource-item\">\n" +
    "\n" +
    "              </div>\n" +
    "              <div class=\"resource-item\">\n" +
    "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"script-block\">\n" +
    "            <div class=\"wrapper\">\n" +
    "              <div class=\"sc-bar\"\n" +
    "                   ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "                <h4><i class=\"icon-record\"></i>스크립트</h4>\n" +
    "                <label class=\"item item-input\">\n" +
    "                  <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                  <input type=\"text\" placeholder=\"Search\">\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"preview-resource\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"script-section\">\n" +
    "              <!--<div class=\"script\">-->\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>123</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은안녕질서를 유지할 필요가 있을 때</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.\n" +
    "                  전직대통령의 인하여 불이익한 처우를 받지 아니한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나\n" +
    "                  공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <!--</div>-->\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"content\"></div>\n" +
    "      <div id=\"top\">Back to top</div>\n" +
    "    </div>\n" +
    "    <!--모바일 바디 영역-->\n" +
    "    <div class=\"for-m\" ng-if=\"(dev_width < 770)\">\n" +
    "      <div class=\"header-background\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!--style=\"margin-top: {{margin.top}}; \"-->\n" +
    "      <div class=\"record-detail-wrapper\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i\n" +
    "            class=\"icon-delete detail-icon\"></i>\n" +
    "            <a class=\"nav-btn\">Delete</a>\n" +
    "          </button>\n" +
    "\n" +
    "          <button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i\n" +
    "            class=\"icon-resource detail-icon\"></i>\n" +
    "            <a class=\"nav-btn\" href=\"#\">All resource</a>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "        <div class=\"record-info\">\n" +
    "\n" +
    "          <!--<div class=\"title\" id='detail_title'-->\n" +
    "          <!--ng-style=\" (dev_width < 770) ? { 'padding-top': '24px' } : {'padding-top':'50px'}\">-->\n" +
    "          <!--가제목입니다.-->\n" +
    "          <!--</div>-->\n" +
    "          <!--<div class=\"date\" id=\"detail_date\" ng-style=\" (dev_width < 770) ? { 'top':'5px'} : {'top':'25px'}\">-->\n" +
    "          <!--Saterday, Feb 17 3:11 PM / TAEBACK-->\n" +
    "          <!--</div>-->\n" +
    "\n" +
    "          <!--<div class=\"title\"-->\n" +
    "          <!--ng-style=\" (dev_width < 770) ? { 'padding-top': '24px' } : {'padding-top':'50px'}\">-->\n" +
    "          <!--가제목입니다.-->\n" +
    "          <!--</div>-->\n" +
    "          <!--<div class=\"date\" ng-style=\" (dev_width < 770) ? { 'top':'5px'} : {'top':'25px'}\">-->\n" +
    "          <!--Saterday, Feb 17 3:11 PM / TAEBACK-->\n" +
    "          <!--</div>-->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "        <!--<h1>이미지 프리뷰</h1>-->\n" +
    "        <detail-preview-images></detail-preview-images>\n" +
    "\n" +
    "\n" +
    "        <!--이부분 타임라인 재생정지 컨트롤러 들어갈 자리@기준 -->\n" +
    "\n" +
    "\n" +
    "        <div id=\"waveform\"\n" +
    "             ng-if=\"(dev_width < 770)\"\n" +
    "             ng-style=\" (dev_width < 770) ? { 'height': '34px','padding':'0' } : {'padding':'15px 0'}\"></div>\n" +
    "        <!-- 여기까지 -->\n" +
    "\n" +
    "\n" +
    "        <!--이부분 타임라인 재생정지 컨트롤러 들어갈 자리@기준 -->\n" +
    "\n" +
    "\n" +
    "        <!--지우지말것-->\n" +
    "        <!--<div class=\"record-images\">-->\n" +
    "        <!--<ion-slide-box on-slide-changed=\"slideHasChanged($index)\">-->\n" +
    "        <!--<ion-slide ng-repeat=\"image in items[preIndex].preview.images\">-->\n" +
    "        <!--<img src=\"{{image}}\" alt=\"#\" style=\" width: 350px; height: 130px;\">-->\n" +
    "\n" +
    "        <!--</ion-slide>-->\n" +
    "        <!--</ion-slide-box>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<div class=\"record-images\">-->\n" +
    "        <!--<ion-slide-box on-slide-changed=\"slideHasChanged($index)\">-->\n" +
    "        <!--<ion-slide>-->\n" +
    "        <!--<img src=\"\" alt=\"#\">-->\n" +
    "        <!--</ion-slide>-->\n" +
    "        <!--<ion-slide>-->\n" +
    "        <!--<img src=\"\" alt=\"#\">-->\n" +
    "        <!--</ion-slide>-->\n" +
    "\n" +
    "        <!--<ion-slide>-->\n" +
    "        <!--<img src=\"\" alt=\"#\">-->\n" +
    "        <!--</ion-slide>-->\n" +
    "\n" +
    "        <!--<ion-slide>-->\n" +
    "        <!--<img src=\"\" alt=\"#\">-->\n" +
    "        <!--</ion-slide>-->\n" +
    "\n" +
    "        <!--</ion-slide-box>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <div class=\"contents-wrap\">\n" +
    "          <div class=\"wrapper\">\n" +
    "            <div class=\"sc-bar\"\n" +
    "                 ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "              <h4><i class=\"icon-record\"></i>스크립트</h4>\n" +
    "              <label class=\"item item-input\">\n" +
    "                <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                <input type=\"text\" placeholder=\"Search\">\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"script-section\" ng-style=\" (dev_width < 770) ? { 'padding-top':'5px' } : {'transformY':'10px'}\">\n" +
    "            <div class=\"script\" id=\"script_contents\">\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <p>모바일 버전 스크립트입니다</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은안녕질서를 유지할 필요가 있을 때</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.\n" +
    "                  전직대통령의 인하여 불이익한 처우를 받지 아니한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나\n" +
    "                  공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "          <div class=\"bar bar-footer\" id=\"myP\">\n" +
    "            <div class=\"button-wrap\">\n" +
    "              <div class=\"button  icon ion-ios-rewind\"></div>\n" +
    "              <div class=\"button  icon ion-ios-play\" ng-click=\"pauseCursor();\"></div>\n" +
    "              <div class=\"button  icon ion-ios-pause\" ng-click=\"stopCursor();\"></div>\n" +
    "              <div class=\"button  icon ion-ios-fastforward\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
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
    "    <!--웹 네비게이션-->\n" +
    "    <div class=\"for-w\" ng-if=\"(dev_width > 770)\">\n" +
    "\n" +
    "      <div class=\"view-title\" side=\"left\">\n" +
    "        <div class=\"title-wrapper\">\n" +
    "\n" +
    "          <div class=\"btn-wrapper\">\n" +
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
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--모바일 네비게이션-->\n" +
    "    <div class=\"for-m\" ng-hide=\"dev_width > 770\">\n" +
    "      <div class=\"view-title\" side=\"left\">\n" +
    "        <div class=\"title-wrapper\">\n" +
    "          <div class=\"title\">\n" +
    "            모바일버전 가제목입니다.\n" +
    "          </div>\n" +
    "          <div class=\"date\">\n" +
    "            Saterday, Feb 17 3:11 PM / TAEBACK\n" +
    "          </div>\n" +
    "          <div class=\"tag\" ng-hide=\"dev_width < 770\">\n" +
    "            <span>테그들입니다1</span>\n" +
    "            <span>테그들입니다2</span>\n" +
    "            <span>테그들입니다3</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </ion-nav-title>\n" +
    "\n" +
    "  <ion-nav-bar>\n" +
    "\n" +
    "    <ion-nav-back-button class=\"button-clear back-btn\">\n" +
    "      <i class=\"ion-ios-arrow-back\"></i>\n" +
    "      <p ng-hide=\"dev_width < 770\">리스트 목록가기</p>\n" +
    "    </ion-nav-back-button>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-content scroll=\"false\">\n" +
    "\n" +
    "    <!--웹 바디 영역-->\n" +
    "    <div class=\"for-w\" id=\"wrap\" ng-hide=\"dev_width < 770\">\n" +
    "\n" +
    "      <div class=\"record-detail-wrapper\" id=\"nav\">\n" +
    "        <h1>스크랩 컨텐츠</h1>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!--모바일 바디 영역-->\n" +
    "    <div class=\"for-m\" ng-if=\"(dev_width < 770)\">\n" +
    "      <div class=\"header-background\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!--style=\"margin-top: {{margin.top}}; \"-->\n" +
    "      <div class=\"record-detail-wrapper\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <button class=\"button button-clear nav-btn\" ng-click=\"deleteRecord()\"><i\n" +
    "            class=\"icon-delete detail-icon\"></i>\n" +
    "            <a class=\"nav-btn\">Delete</a>\n" +
    "          </button>\n" +
    "\n" +
    "          <button class=\"button button-clear nav-btn\" ng-click=\"allResourceModal()\"><i\n" +
    "            class=\"icon-resource detail-icon\"></i>\n" +
    "            <a class=\"nav-btn\" href=\"#\">All resource</a>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"contents-wrap\">\n" +
    "          <div class=\"wrapper\">\n" +
    "            <div class=\"sc-bar\"\n" +
    "                 ng-style=\" (dev_width < 770) ? { 'width':'100%', 'padding':'0 20px' } : {'transformY':'10px'}\">\n" +
    "              <h4><i class=\"icon-record\"></i>스크립트</h4>\n" +
    "              <label class=\"item item-input\">\n" +
    "                <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "                <input type=\"text\" placeholder=\"Search\">\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"script-section\" ng-style=\" (dev_width < 770) ? { 'padding-top':'5px' } : {'transformY':'10px'}\">\n" +
    "            <div class=\"script\" id=\"script_contents\">\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <p>모바일 버전 스크립트입니다</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></i></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은안녕질서를 유지할 필요가 있을 때</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"label\"></div>\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.\n" +
    "                  전직대통령의 인하여 불이익한 처우를 받지 아니한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나\n" +
    "                  공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은\n" +
    "                  안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\">\n" +
    "\n" +
    "                </div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "              <div class=\"sub-wrapper\">\n" +
    "                <div class=\"timecheck\">\n" +
    "                  00:00:00\n" +
    "                </div>\n" +
    "                <div class=\"label\"><i class=\"icon-bookmark\"></i></div>\n" +
    "                <p>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.</p>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"bar bar-footer\" id=\"myP\">\n" +
    "            <div class=\"button-wrap\">\n" +
    "              <div class=\"button  icon ion-play\" ng-click=\"pauseCursor();\"></div>\n" +
    "              <div class=\"button  icon ion-stop\" ng-click=\"stopCursor();\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
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
    "    <span href=\"\"><img src=\"http://placehold.it/400x400.jpg\" id=\"detail_image_1\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"http://placehold.it/400x400.jpg\" id=\"detail_image_2\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"http://placehold.it/400x400.jpg\" id=\"detail_image_3\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"http://placehold.it/400x400.jpg\" id=\"detail_image_4\" class=\"coverflow__image\"/></span>\n" +
    "    <span href=\"\"><img src=\"http://placehold.it/400x400.jpg\" id=\"detail_image_5\" class=\"coverflow__image\"/></span>\n" +
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
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: #ff477b;\"> 이미지 (17 GB)</i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-image\"></i>전체 이미지 파일<span>214개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: #72dd46;\"> 동영상 (23 GB) </i></div>\n" +
    "      <div class=\"button\">\n" +
    "        <div class=\"btn-wrapper\">\n" +
    "          <div class=\"memory-btn\"><i class=\"icon-video\"></i>전체 동영상 파일<span>34개</span></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-wrapper\">\n" +
    "      <div class=\"index\"><i class=\"ion-stop\" style=\"color: #ffa300;\"> 음성파일 (10 GB) </i></div>\n" +
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
    "<div class=\"record-page-wrap\" onload>\n" +
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
    "<!--지우지말것-->\n" +
    "\n" +
    "  <ion-list class=\"record-items\">\n" +
    "    <ion-item class=\"card-cover\" ng-repeat=\"item in items\">\n" +
    "      <!--<ion-option-button class=\"button-assertive\">delete</ion-option-button>-->\n" +
    "      <record-list-item item=\"item\"  ng-click=\"viewRecordDetail()\"></record-list-item>\n" +
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
    "  <!---->\n" +
    "  <!--<ion-nav-buttons side=\"primary\">-->\n" +
    "  <!--<button class=\"button\" ng-click=\"doSomething()\">-->\n" +
    "  <!--Save-->\n" +
    "  <!--</button>-->\n" +
    "  <!--</ion-nav-buttons>-->\n" +
    "  <!--<ion-nav-title>-->\n" +
    "  <!--<div class=\"view-title\" style=\"color:#e4ff2b; font-weight: 400;\">Record-->\n" +
    "  <!--<div class=\"recording-icon\"></div>-->\n" +
    "  <!--<div class=\"recording-icon\"></div>-->\n" +
    "  <!--<div class=\"recording-icon\"></div>-->\n" +
    "\n" +
    "  <!--&lt;!&ndash;<i class=\"ion-android-radio-button-off\"></i>&ndash;&gt;-->\n" +
    "  <!--&lt;!&ndash;<i class=\"ion-android-radio-button-off\"></i>&ndash;&gt;-->\n" +
    "  <!--&lt;!&ndash;<i class=\"ion-android-radio-button-off\"></i>&ndash;&gt;-->\n" +
    "  <!--</div>-->\n" +
    "  <!--</ion-nav-title>-->\n" +
    "\n" +
    "  <!--<ion-header-bar align-title=\"left\" class=\"bar-positive\">-->\n" +
    "  <!--<div class=\"buttons\">-->\n" +
    "  <!--<button class=\"button\">Left Button</button>-->\n" +
    "  <!--</div>-->\n" +
    "  <!--<div class=\"buttons\">-->\n" +
    "  <!--<button class=\"button\">Right Button</button>-->\n" +
    "  <!--</div>-->\n" +
    "  <!--</ion-header-bar>-->\n" +
    "  <ion-content>\n" +
    "    <div class=\"browser-landing\" id=\"main\">\n" +
    "\n" +
    "      <div class=\"time-count-section\">\n" +
    "        <h1 class=\"time-count\">{{(\"0\"+(hour)).slice(-2)}}:{{(\"0\"+(minute)).slice(-2)}}:{{(\"0\"+(second)).slice(-2)}}\n" +
    "          <span class=\"mil-count\">.{{(\"0\"+(value)).slice(-2)}}</span>\n" +
    "        </h1>\n" +
    "        <div class=\"wave-img\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"index-bar\">\n" +
    "        <div class=\"line\"></div>\n" +
    "        <div class=\"time-check\">00:00:00</div>\n" +
    "        <div class=\"bookmark-check\"></div>\n" +
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
    "          <span class=\"final\" id=\"final_span\"></span> <span class=\"interim\" id=\"interim_span\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<img ng-show=\"imgURI !== undefined\" ng-src=\"{{imgURI}}\">\n" +
    "        <img ng-show=\"imgURI === undefined\" ng-src=\"http://placehold.it/300x300\"> -->\n" +
    "\n" +
    "\n" +
    "        <!--\n" +
    ">>>>>>> 7481ee6a249a8c54041aa2e2f747cbca3dab616f\n" +
    "      </center>\n" +
    "      <div id=\"div_start\">\n" +
    "        <center>\n" +
    "          <button class=\"button icon ion-play\" ng-show=\"btnPlay\" id=\"start_button\"\n" +
    "                  onclick=\"startButton(ㅑevent)\"></button>\n" +
    "          <button class=\"button icon ion-stop\" ng-show=\"btnStop\" id=\"start_button\" ng-click=\"recordStop()\"\n" +
    "                  onclick=\"startButton(event)\"></button>\n" +
    "        </center>\n" +
    "      </div> -->\n" +
    "\n" +
    "\n" +
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
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bottom-section\" style=\"display: none;\">\n" +
    "      <div class=\"button-wrapper\">\n" +
    "        <form method=\"post\" enctype=\"multipart/form-data\" action=\"http://52.69.199.91:3000/imageUpload\"\n" +
    "              style=\"font-size:15px; display:inline;\">\n" +
    "          <!-- <input type=\"file\" id=\"typist_image\" name=\"typist_audio\" style=\"width:84%;font-size:15px; padding:0px;\"> -->\n" +
    "          <label class=\"button icon ion-camera\" style=\"margin-right:5px;\">\n" +
    "            <input type=\"file\" id=\"typist_image\" name=\"typist_image\" value=\"\"\n" +
    "                   style='position：absolute; margin-left:-10px; width:5px; height:5px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'>\n" +
    "          </label>\n" +
    "          <!--<button type=\"submit\" class=\"button\" ng-click=\"openModal();\">저장하기</button>-->\n" +
    "          <button class=\"button\" ng-click=\"openModal();\">저장하기</button>\n" +
    "          <button class=\"button icon ion-bookmark\" ng-click=\"addBookmark();\"></button>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"circleContainer\">\n" +
    "        <button class=\"micButton\" ng-class=\"{active:active}\"\n" +
    "                onclick=\"startButton(event)\"\n" +
    "                ng-click=\"recordStop()\">\n" +
    "          <i ng-class=\"{'ion-record':!active,'ion-stop':active}\"></i>\n" +
    "        </button>\n" +
    "      </div>\n" +
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
    "        <button class=\"camera-btn\">\n" +
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
    "        <button class=\"bookmark-btn\" ng-click=\"addBookmark();\"></button>\n" +
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
    "    <ion-list class=\"scrap-items\"\n" +
    "              ng-class=\"{'scrap-list-mobile':dev_width < 770}\">\n" +
    "      <ion-item class=\"item \" ng-repeat=\"item in items\"\n" +
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
    "\n" +
    "        <button class=\"button view-btn\" ng-hide=\"dev_width < 770\" ng-click=\"viewScrapContents()\">view</button>\n" +
    "\n" +
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
    "  <ion-content>\n" +
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
    "  <ion-content>\n" +
    "    <!--<ion-content class=\"has-footer\">-->\n" +
    "    <div class=\"scrap-preview\">\n" +
    "      <h4 class=\"bdernone bb\"><i class=\"icon-scrap\"></i>\n" +
    "        <p>{{items[selectedIndex].title}}</p></h4>\n" +
    "\n" +
    "      <div class=\"sub-title-list\">\n" +
    "        <h4><i class=\"icon-index\"></i>목차 <span\n" +
    "          class=\"leng\">{{items[selectedIndex].preview.index.length}}</span></h4>\n" +
    "        <ui class=\"list\" style=\"margin-top: -12px;\">\n" +
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
    "\n" +
    "        <ion-slide-box on-slide-changed=\"slideHasChanged($index)\" on-drag=\"releaseSlide()\">\n" +
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
    "\n" +
    "      <div class=\"recommended-list\">\n" +
    "        <h4><i class=\"icon-record\"></i>추천 레코드카드 <span class=\"leng\">{{items[selectedIndex].preview.images.length}}</span></h4>\n" +
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
