(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Courthouse = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Courthouse</p>";
  }

};
var _default = Courthouse;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Donate = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Donate</p>";
  }

};
var _default = Donate;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Home = {
  main() {
    placeholder.innerHTML = `
    <img src="images/statue.JPG" class="mainPagePic">
    <p class="mainPageTitle">The following resolution was passed on September 25, 2018. We thank everyone for their support and God for His favor.</p>
    <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/42625726_10212310715698302_542771406790721536_o.jpg?_nc_cat=103&oh=510b6a926764b139b04fff2e70f57b22&oe=5C594BA8" class="mainPagePic">
    <p class="mainText">After the tragic events in Charlottesville, VA last August, conversations started happening in Franklin about how our city would \(or would not) react if something similar happened here. In a lot of ways, our city is like Charlottesville. These discussions led to the thought that it would be better to be “actionary” instead of “reactionary.” The result of these conversations led to the idea that instead of taking down historical markers, what if we added to them and told a     “fuller story.” Further, it was believed that the CHURCH in Franklin should lead this effort.<br><br>Over the course of this past year we have initiated further dialogue between<br><br>•…pastors and church leaders.<br>•…the historical community in Franklin and Williamson County.<br>•…the city administrator, city mayor and county mayor.<br>•…the downtown business community.<br>•…and a host of individuals.
    <br><br><br><br><br>Timeline <br><br><br>Phase 1 (four historical markers around the downtown square) – A dedication of these markers on Monday, January 14, 2019 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>The four markers are:<br><br>•	United States Colored Troops<br>•	1867 Downtown Riot<br>•	Courthouse and Market House<br>•	Reconstruction and Jim Crow<br><br><br>Phase 2 – Erect a statue of a United States Colored Troop soldier at a yet to be determined location inside the city limits of Franklin. A dedication of this statue on Monday, January 13, 2020 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>• Present “Fuller Story” at BOMA Workshop on Tuesday, August 14, 2018. <br>•	Present “Fuller Story” to County Commissioners on Monday, September 10, 2018.<br>• Announce fundraiser for the USCT statue September / October 2018.<br>• A fall “revival” with the CHURCHES in Franklin / Williamson County.<br><br><br><br><br>The Ask <br><br>We are asking you, the city leaders, to lend your support behind our efforts and to help us with the locations of the markers and the statue. We are not asking the city for any money. All funds will be raised through private donations.</p>
            `;
  }

};
var _default = Home;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.loadNavbar();

_home.default.main();

},{"./home":3,"./nav":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Media = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Media</p>";
  }

};
var _default = Media;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usct = _interopRequireDefault(require("./usct"));

var _courthouse = _interopRequireDefault(require("./courthouse"));

var _riot = _interopRequireDefault(require("./riot"));

var _reconstruction = _interopRequireDefault(require("./reconstruction"));

var _statue = _interopRequireDefault(require("./statue"));

var _media = _interopRequireDefault(require("./media"));

var _donate = _interopRequireDefault(require("./donate"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let placeholder = document.getElementById("Navbar");
const navBar = {
  eventListeners(event) {
    let newPage = event.target.value;

    switch (newPage) {
      case "usct":
        _usct.default.main();

        break;

      case "courthouse":
        _courthouse.default.main();

        break;

      case "riot":
        _riot.default.main();

        break;

      case "reconstruction":
        _reconstruction.default.main();

        break;

      case "statue":
        _statue.default.main();

        break;

      case "media":
        _media.default.main();

        break;

      case "donate":
        _donate.default.main();

        break;

      case "home":
        _home.default.main();

        break;
    }
  },

  makeBtn(value, text) {
    let btn = document.createElement("button");
    btn.addEventListener("click", navBar.eventListeners);
    btn.setAttribute("value", value);
    btn.setAttribute("class", "menu");
    btn.innerText = text;
    return btn;
  },

  loadNavbar() {
    let elementHolder = document.createDocumentFragment();
    let heading = document.createElement("h1");
    heading.setAttribute("id", "mainTitle");
    heading.innerText = "Telling a FULLER STORY of Franklin";
    elementHolder.appendChild(heading);
    let subHeading = document.createElement("h3");
    subHeading.setAttribute("id", "subTitle");
    subHeading.innerText = "Learning From Our Past To Reconcile Our Future";
    elementHolder.appendChild(subHeading);
    let div = document.createElement("div");
    div.setAttribute("class", "heading");
    div.appendChild(navBar.makeBtn("usct", "United States Colored Troops"));
    div.appendChild(navBar.makeBtn("courthouse", "Courthouse/Market House"));
    div.appendChild(navBar.makeBtn("riot", "1867 Riot"));
    div.appendChild(navBar.makeBtn("reconstruction", "Reconstruction & Jim Crow"));
    div.appendChild(navBar.makeBtn("statue", "USCT Statue"));
    div.appendChild(navBar.makeBtn("media", "Media"));
    div.appendChild(navBar.makeBtn("donate", "Donate"));
    div.appendChild(navBar.makeBtn("home", "Home"));
    elementHolder.appendChild(div);
    placeholder.appendChild(elementHolder);
  }

};
var _default = navBar; // <p id="leftHeading">Seeking To Tell A &nbsp</p>
// <p id="bigHeading">Fuller Story</p>
// <p id="rightHeading">&nbsp Of Franklin</p>
// <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>

exports.default = _default;

},{"./courthouse":1,"./donate":2,"./home":3,"./media":5,"./reconstruction":7,"./riot":8,"./statue":9,"./usct":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Reconstruction = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Reconstruction</p>";
  }

};
var _default = Reconstruction;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Riot = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Riot</p>";
  }

};
var _default = Riot;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Statue = {
  main() {
    placeholder.innerHTML = "<p class=\"mainPageTitle\">Statue</p>";
  }

};
var _default = Statue;
exports.default = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const USCT = {
  main() {
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("class", "otherText");
    temp.innerHTML = "United States Colored Troops <br><br> Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard.";
    placeholder.appendChild(temp);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "www.slavestosoldiers.com");
    pageLink.setAttribute("class", "link");
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/slaveToSoldiers.jpg");
    temp.setAttribute("alt", "Slave To Soldiers Pic");
    temp.setAttribute("class", "mainPagePic");
    pageLink.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("class", "linkText");
    temp.innerHTML = "Click here to learn more.";
    pageLink.appendChild(temp);
    placeholder.appendChild(pageLink);
  }

};
var _default = USCT;
exports.default = _default;

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLDJDQUF4QjtBQUNEOztBQUpnQixDQUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7QUNUZixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUVBLE1BQU0sTUFBTSxHQUFHO0FBRWIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLHVDQUF4QjtBQUNEOztBQUpZLENBQWY7ZUFPZSxNOzs7Ozs7Ozs7O0FDVGYsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFFQSxNQUFNLElBQUksR0FBRztBQUVYLEVBQUEsSUFBSSxHQUFHO0FBQ0wsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF5Qjs7Ozs7O2FBQXpCO0FBT0Q7O0FBVlUsQ0FBYjtlQWFlLEk7Ozs7OztBQ2ZmOztBQUNBOzs7O0FBRUEsYUFBTyxVQUFQOztBQUNBLGNBQUssSUFBTDs7Ozs7Ozs7O0FDSkEsSUFBSSxXQUFXLEdBQUcsUUFBUSxD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Q0FBa0IsT0FBbEIsRUFBMkIsYUFBM0I7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLElBQXJCO0FBQ0EsSUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBM0I7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBMUJVLENBQWI7ZUE2QmUsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBDb3VydGhvdXNlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwibWFpblBhZ2VUaXRsZVxcXCI+Q291cnRob3VzZTwvcD5cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJ0aG91c2UiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgRG9uYXRlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwibWFpblBhZ2VUaXRsZVxcXCI+RG9uYXRlPC9wPlwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IEhvbWUgPSB7XG5cbiAgbWFpbigpIHtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvc3RhdHVlLkpQR1wiIGNsYXNzPVwibWFpblBhZ2VQaWNcIj5cbiAgICA8cCBjbGFzcz1cIm1haW5QYWdlVGl0bGVcIj5UaGUgZm9sbG93aW5nIHJlc29sdXRpb24gd2FzIHBhc3NlZCBvbiBTZXB0ZW1iZXIgMjUsIDIwMTguIFdlIHRoYW5rIGV2ZXJ5b25lIGZvciB0aGVpciBzdXBwb3J0IGFuZCBHb2QgZm9yIEhpcyBmYXZvci48L3A+XG4gICAgPGltZyBzcmM9XCJodHRwczovL3Njb250ZW50LWF0bDMtMS54eC5mYmNkbi5uZXQvdi90MS4wLTkvNDI2MjU3MjZfMTAyMTIzMTA3MTU2OTgzMDJfNTQyNzcxNDA2NzkwNzIxNTM2X28uanBnP19uY19jYXQ9MTAzJm9oPTUxMGI2YTkyNjc2NGIxMzliMDRmZmYyZTcwZjU3YjIyJm9lPTVDNTk0QkE4XCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblRleHRcIj5BZnRlciB0aGUgdHJhZ2ljIGV2ZW50cyBpbiBDaGFybG90dGVzdmlsbGUsIFZBIGxhc3QgQXVndXN0LCBjb252ZXJzYXRpb25zIHN0YXJ0ZWQgaGFwcGVuaW5nIGluIEZyYW5rbGluIGFib3V0IGhvdyBvdXIgY2l0eSB3b3VsZCBcXChvciB3b3VsZCBub3QpIHJlYWN0IGlmIHNvbWV0aGluZyBzaW1pbGFyIGhhcHBlbmVkIGhlcmUuIEluIGEgbG90IG9mIHdheXMsIG91ciBjaXR5IGlzIGxpa2UgQ2hhcmxvdHRlc3ZpbGxlLiBUaGVzZSBkaXNjdXNzaW9ucyBsZWQgdG8gdGhlIHRob3VnaHQgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gYmUg4oCcYWN0aW9uYXJ54oCdIGluc3RlYWQgb2Yg4oCccmVhY3Rpb25hcnku4oCdIFRoZSByZXN1bHQgb2YgdGhlc2UgY29udmVyc2F0aW9ucyBsZWQgdG8gdGhlIGlkZWEgdGhhdCBpbnN0ZWFkIG9mIHRha2luZyBkb3duIGhpc3RvcmljYWwgbWFya2Vycywgd2hhdCBpZiB3ZSBhZGRlZCB0byB0aGVtIGFuZCB0b2xkIGEgICAgIOKAnGZ1bGxlciBzdG9yeS7igJ0gRnVydGhlciwgaXQgd2FzIGJlbGlldmVkIHRoYXQgdGhlIENIVVJDSCBpbiBGcmFua2xpbiBzaG91bGQgbGVhZCB0aGlzIGVmZm9ydC48YnI+PGJyPk92ZXIgdGhlIGNvdXJzZSBvZiB0aGlzIHBhc3QgeWVhciB3ZSBoYXZlIGluaXRpYXRlZCBmdXJ0aGVyIGRpYWxvZ3VlIGJldHdlZW48YnI+PGJyPuKAouKApnBhc3RvcnMgYW5kIGNodXJjaCBsZWFkZXJzLjxicj7igKLigKZ0aGUgaGlzdG9yaWNhbCBjb21tdW5pdHkgaW4gRnJhbmtsaW4gYW5kIFdpbGxpYW1zb24gQ291bnR5Ljxicj7igKLigKZ0aGUgY2l0eSBhZG1pbmlzdHJhdG9yLCBjaXR5IG1heW9yIGFuZCBjb3VudHkgbWF5b3IuPGJyPuKAouKApnRoZSBkb3dudG93biBidXNpbmVzcyBjb21tdW5pdHkuPGJyPuKAouKApmFuZCBhIGhvc3Qgb2YgaW5kaXZpZHVhbHMuXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj5UaW1lbGluZSA8YnI+PGJyPjxicj5QaGFzZSAxIChmb3VyIGhpc3RvcmljYWwgbWFya2VycyBhcm91bmQgdGhlIGRvd250b3duIHNxdWFyZSkg4oCTIEEgZGVkaWNhdGlvbiBvZiB0aGVzZSBtYXJrZXJzIG9uIE1vbmRheSwgSmFudWFyeSAxNCwgMjAxOSBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPlRoZSBmb3VyIG1hcmtlcnMgYXJlOjxicj48YnI+4oCiXHRVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzPGJyPuKAolx0MTg2NyBEb3dudG93biBSaW90PGJyPuKAolx0Q291cnRob3VzZSBhbmQgTWFya2V0IEhvdXNlPGJyPuKAolx0UmVjb25zdHJ1Y3Rpb24gYW5kIEppbSBDcm93PGJyPjxicj48YnI+UGhhc2UgMiDigJMgRXJlY3QgYSBzdGF0dWUgb2YgYSBVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3Agc29sZGllciBhdCBhIHlldCB0byBiZSBkZXRlcm1pbmVkIGxvY2F0aW9uIGluc2lkZSB0aGUgY2l0eSBsaW1pdHMgb2YgRnJhbmtsaW4uIEEgZGVkaWNhdGlvbiBvZiB0aGlzIHN0YXR1ZSBvbiBNb25kYXksIEphbnVhcnkgMTMsIDIwMjAgZHVyaW5nIHRoZSBDSFVSQ0hFU+KAmSBhbm51YWwgTWFydGluIEx1dGhlciBLaW5nIERheSBDZWxlYnJhdGlvbi4gPGJyPjxicj7igKIgUHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gYXQgQk9NQSBXb3Jrc2hvcCBvbiBUdWVzZGF5LCBBdWd1c3QgMTQsIDIwMTguIDxicj7igKJcdFByZXNlbnQg4oCcRnVsbGVyIFN0b3J54oCdIHRvIENvdW50eSBDb21taXNzaW9uZXJzIG9uIE1vbmRheSwgU2VwdGVtYmVyIDEwLCAyMDE4Ljxicj7igKIgQW5ub3VuY2UgZnVuZHJhaXNlciBmb3IgdGhlIFVTQ1Qgc3RhdHVlIFNlcHRlbWJlciAvIE9jdG9iZXIgMjAxOC48YnI+4oCiIEEgZmFsbCDigJxyZXZpdmFs4oCdIHdpdGggdGhlIENIVVJDSEVTIGluIEZyYW5rbGluIC8gV2lsbGlhbXNvbiBDb3VudHkuPGJyPjxicj48YnI+PGJyPjxicj5UaGUgQXNrIDxicj48YnI+V2UgYXJlIGFza2luZyB5b3UsIHRoZSBjaXR5IGxlYWRlcnMsIHRvIGxlbmQgeW91ciBzdXBwb3J0IGJlaGluZCBvdXIgZWZmb3J0cyBhbmQgdG8gaGVscCB1cyB3aXRoIHRoZSBsb2NhdGlvbnMgb2YgdGhlIG1hcmtlcnMgYW5kIHRoZSBzdGF0dWUuIFdlIGFyZSBub3QgYXNraW5nIHRoZSBjaXR5IGZvciBhbnkgbW9uZXkuIEFsbCBmdW5kcyB3aWxsIGJlIHJhaXNlZCB0aHJvdWdoIHByaXZhdGUgZG9uYXRpb25zLjwvcD5cbiAgICAgICAgICAgIGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxubmF2QmFyLmxvYWROYXZiYXIoKVxuSG9tZS5tYWluKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgTWVkaWEgPSB7XG5cbiAgbWFpbigpIHtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJtYWluUGFnZVRpdGxlXFxcIj5NZWRpYTwvcD5cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhIiwiaW1wb3J0IFVTQ1QgZnJvbSBcIi4vdXNjdFwiXG5pbXBvcnQgQ291cnRob3VzZSBmcm9tIFwiLi9jb3VydGhvdXNlXCJcbmltcG9ydCBSaW90IGZyb20gXCIuL3Jpb3RcIlxuaW1wb3J0IFJlY29uc3RydWN0aW9uIGZyb20gXCIuL3JlY29uc3RydWN0aW9uXCJcbmltcG9ydCBTdGF0dWUgZnJvbSBcIi4vc3RhdHVlXCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiXG5pbXBvcnQgRG9uYXRlIGZyb20gXCIuL2RvbmF0ZVwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCJcblxubGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOYXZiYXJcIilcblxuY29uc3QgbmF2QmFyID0ge1xuXG4gIGV2ZW50TGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgbGV0IG5ld1BhZ2UgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc3dpdGNoKG5ld1BhZ2UpIHtcbiAgICAgIGNhc2UgXCJ1c2N0XCI6XG4gICAgICAgIFVTQ1QubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvdXJ0aG91c2VcIjpcbiAgICAgICAgQ291cnRob3VzZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlvdFwiOlxuICAgICAgICBSaW90Lm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyZWNvbnN0cnVjdGlvblwiOlxuICAgICAgICBSZWNvbnN0cnVjdGlvbi5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RhdHVlXCI6XG4gICAgICAgIFN0YXR1ZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaWFcIjpcbiAgICAgICAgTWVkaWEubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvbmF0ZVwiOlxuICAgICAgICBEb25hdGUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgSG9tZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gIH0sXG5cbiAgbWFrZUJ0bih2YWx1ZSwgdGV4dCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuZXZlbnRMaXN0ZW5lcnMpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIilcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBidG5cbiAgfSxcblxuICBsb2FkTmF2YmFyKCkge1xuICAgIGxldCBlbGVtZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblRpdGxlXCIpXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRlbGxpbmcgYSBGVUxMRVIgU1RPUlkgb2YgRnJhbmtsaW5cIlxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHN1YkhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJUaXRsZVwiKVxuICAgIHN1YkhlYWRpbmcuaW5uZXJUZXh0ID0gXCJMZWFybmluZyBGcm9tIE91ciBQYXN0IFRvIFJlY29uY2lsZSBPdXIgRnV0dXJlXCJcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nXCIpXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwidXNjdFwiLCBcIlVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHNcIikpXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiY291cnRob3VzZVwiLCBcIkNvdXJ0aG91c2UvTWFya2V0IEhvdXNlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcInJpb3RcIiwgXCIxODY3IFJpb3RcIikpXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwicmVjb25zdHJ1Y3Rpb25cIiwgXCJSZWNvbnN0cnVjdGlvbiAmIEppbSBDcm93XCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcIm1lZGlhXCIsIFwiTWVkaWFcIikpXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcImhvbWVcIiwgXCJIb21lXCIpKVxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGVsZW1lbnRIb2xkZXIpXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuXG4gICAgLy8gPHAgaWQ9XCJsZWZ0SGVhZGluZ1wiPlNlZWtpbmcgVG8gVGVsbCBBICZuYnNwPC9wPlxuICAgIC8vIDxwIGlkPVwiYmlnSGVhZGluZ1wiPkZ1bGxlciBTdG9yeTwvcD5cbiAgICAvLyA8cCBpZD1cInJpZ2h0SGVhZGluZ1wiPiZuYnNwIE9mIEZyYW5rbGluPC9wPlxuICAgIC8vIDxwIGlkPVwidGFnSGVhZGluZ1wiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L3A+IiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJlY29uc3RydWN0aW9uID0ge1xuXG4gIG1haW4oKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwibWFpblBhZ2VUaXRsZVxcXCI+UmVjb25zdHJ1Y3Rpb248L3A+XCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbnN0cnVjdGlvbiIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBSaW90ID0ge1xuXG4gIG1haW4oKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwibWFpblBhZ2VUaXRsZVxcXCI+UmlvdDwvcD5cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpb3QiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgU3RhdHVlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwibWFpblBhZ2VUaXRsZVxcXCI+U3RhdHVlPC9wPlwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFVTQ1QgPSB7XG5cbiAgbWFpbigpIHtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5QYWdlUGljXCIpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib3RoZXJUZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHMgPGJyPjxicj4gQXJvdW5kIDMwMCBXaWxsaWFtc29uIENvdW50eSByZXNpZGVudHMsIHdobyB3ZXJlIGVpdGhlciBmcmVlZCBzbGF2ZXMgb3IgZXNjYXBlZCBzbGF2ZXMsIHNlcnZlZCBpbiB0aGUgVW5pb24gQXJteSBkdXJpbmcgdGhlIENpdmlsIFdhci48YnI+PGJyPlRoZWlyIHN0b3J5IGlzIGp1c3Qgbm93IGJlaW5nIHRvbGQuPGJyPjxicj5UaGVpciBzdG9yeSBuZWVkcyB0byBiZSBoZWFyZC5cIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgbGV0IHBhZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwid3d3LnNsYXZlc3Rvc29sZGllcnMuY29tXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL3NsYXZlVG9Tb2xkaWVycy5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlNsYXZlIFRvIFNvbGRpZXJzIFBpY1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluUGFnZVBpY1wiKVxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtUZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkNsaWNrIGhlcmUgdG8gbGVhcm4gbW9yZS5cIlxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGFnZUxpbmspXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVNDVCJdfQ==
