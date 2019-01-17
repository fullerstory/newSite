(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const home = {
  mainPage() {
    placeholder.innerHTML = `
    <img src="images/statue.JPG" class="mainPagePic">
    <p class="mainPageTitle">The following resolution was passed on September 25, 2018. We thank everyone for their support and God for His favor.</p>
    <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/42625726_10212310715698302_542771406790721536_o.jpg?_nc_cat=103&oh=510b6a926764b139b04fff2e70f57b22&oe=5C594BA8" class="mainPagePic">
    <p class="mainText">After the tragic events in Charlottesville, VA last August, conversations started happening in Franklin about how our city would \(or would not) react if something similar happened here. In a lot of ways, our city is like Charlottesville. These discussions led to the thought that it would be better to be “actionary” instead of “reactionary.” The result of these conversations led to the idea that instead of taking down historical markers, what if we added to them and told a     “fuller story.” Further, it was believed that the CHURCH in Franklin should lead this effort.<br><br>Over the course of this past year we have initiated further dialogue between<br><br>•…pastors and church leaders.<br>•…the historical community in Franklin and Williamson County.<br>•…the city administrator, city mayor and county mayor.<br>•…the downtown business community.<br>•…and a host of individuals.
    <br><br><br><br><br>Timeline <br><br><br>Phase 1 (four historical markers around the downtown square) – A dedication of these markers on Monday, January 14, 2019 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>The four markers are:<br><br>•	United States Colored Troops<br>•	1867 Downtown Riot<br>•	Courthouse and Market House<br>•	Reconstruction and Jim Crow<br><br><br>Phase 2 – Erect a statue of a United States Colored Troop soldier at a yet to be determined location inside the city limits of Franklin. A dedication of this statue on Monday, January 13, 2020 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>• Present “Fuller Story” at BOMA Workshop on Tuesday, August 14, 2018. <br>•	Present “Fuller Story” to County Commissioners on Monday, September 10, 2018.<br>• Announce fundraiser for the USCT statue September / October 2018.<br>• A fall “revival” with the CHURCHES in Franklin / Williamson County.<br><br><br><br><br>The Ask <br><br>We are asking you, the city leaders, to lend your support behind our efforts and to help us with the locations of the markers and the statue. We are not asking the city for any money. All funds will be raised through private donations.</p>
            `;
  }

};
var _default = home;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.loadNavbar();

_home.default.mainPage();

},{"./home":1,"./nav":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Navbar");
const navBar = {
  loadNavbar() {
    placeholder.innerHTML = `
      <h1 id="mainTitle">Telling a FULLER STORY of Franklin</h1>
      <h3 id="subTitle">Learning From Our Past To Reconcile Our Future</h3>
      <div class="heading">
        <p class="menu">United States Colored Troops</p>
        <p class="menu">Courthouse/Market House</p>
        <p href="https://www.fullerstory.org/1867Riot" class="menu">1867 Riot</p>
        <p href="https://www.fullerstory.org/Reconstruction-JimCrow" class="menu">Reconstruction & Jim Crow</p>
        <p href="https://www.fullerstory.org/Statue" class="menu">USCT Statue</p>
        <p href="https://www.fullerstory.org/Media" class="menu">Media</p>
        <p href="https://www.fullerstory.org/Donate" class="menu">Donate</p>
      </div>`;
  }

};
var _default = navBar; // <p id="leftHeading">Seeking To Tell A &nbsp</p>
// <p id="bigHeading">Fuller Story</p>
// <p id="rightHeading">&nbsp Of Franklin</p>
// <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>

exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2hvbWUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxJQUFJLEdBQUc7QUFFWCxFQUFBLFFBQVEsR0FBRztBQUNULElBQUEsV0FBVyxDQUFDLFNBQVosR0FBeUI7Ozs7OzthQUF6QjtBQU9EOztBQVZVLENBQWI7ZUFhZSxJOzs7Ozs7QUNmZjs7QUFDQTs7OztBQUVBLGFBQU8sVUFBUDs7QUFDQSxjQUFLLFFBQUw7Ozs7Ozs7OztBQ0pBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWxCO0FBRUEsTUFBTSxNQUFNLEdBQUc7QUFFYixFQUFBLFVBQVUsR0FBRztBQUNYLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBeUI7Ozs7Ozs7Ozs7O2FBQXpCO0FBWUQ7O0FBZlksQ0FBZjtlQWtCZSxNLEVBRVg7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgaG9tZSA9IHtcblxuICBtYWluUGFnZSgpIHtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvc3RhdHVlLkpQR1wiIGNsYXNzPVwibWFpblBhZ2VQaWNcIj5cbiAgICA8cCBjbGFzcz1cIm1haW5QYWdlVGl0bGVcIj5UaGUgZm9sbG93aW5nIHJlc29sdXRpb24gd2FzIHBhc3NlZCBvbiBTZXB0ZW1iZXIgMjUsIDIwMTguIFdlIHRoYW5rIGV2ZXJ5b25lIGZvciB0aGVpciBzdXBwb3J0IGFuZCBHb2QgZm9yIEhpcyBmYXZvci48L3A+XG4gICAgPGltZyBzcmM9XCJodHRwczovL3Njb250ZW50LWF0bDMtMS54eC5mYmNkbi5uZXQvdi90MS4wLTkvNDI2MjU3MjZfMTAyMTIzMTA3MTU2OTgzMDJfNTQyNzcxNDA2NzkwNzIxNTM2X28uanBnP19uY19jYXQ9MTAzJm9oPTUxMGI2YTkyNjc2NGIxMzliMDRmZmYyZTcwZjU3YjIyJm9lPTVDNTk0QkE4XCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblRleHRcIj5BZnRlciB0aGUgdHJhZ2ljIGV2ZW50cyBpbiBDaGFybG90dGVzdmlsbGUsIFZBIGxhc3QgQXVndXN0LCBjb252ZXJzYXRpb25zIHN0YXJ0ZWQgaGFwcGVuaW5nIGluIEZyYW5rbGluIGFib3V0IGhvdyBvdXIgY2l0eSB3b3VsZCBcXChvciB3b3VsZCBub3QpIHJlYWN0IGlmIHNvbWV0aGluZyBzaW1pbGFyIGhhcHBlbmVkIGhlcmUuIEluIGEgbG90IG9mIHdheXMsIG91ciBjaXR5IGlzIGxpa2UgQ2hhcmxvdHRlc3ZpbGxlLiBUaGVzZSBkaXNjdXNzaW9ucyBsZWQgdG8gdGhlIHRob3VnaHQgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gYmUg4oCcYWN0aW9uYXJ54oCdIGluc3RlYWQgb2Yg4oCccmVhY3Rpb25hcnku4oCdIFRoZSByZXN1bHQgb2YgdGhlc2UgY29udmVyc2F0aW9ucyBsZWQgdG8gdGhlIGlkZWEgdGhhdCBpbnN0ZWFkIG9mIHRha2luZyBkb3duIGhpc3RvcmljYWwgbWFya2Vycywgd2hhdCBpZiB3ZSBhZGRlZCB0byB0aGVtIGFuZCB0b2xkIGEgICAgIOKAnGZ1bGxlciBzdG9yeS7igJ0gRnVydGhlciwgaXQgd2FzIGJlbGlldmVkIHRoYXQgdGhlIENIVVJDSCBpbiBGcmFua2xpbiBzaG91bGQgbGVhZCB0aGlzIGVmZm9ydC48YnI+PGJyPk92ZXIgdGhlIGNvdXJzZSBvZiB0aGlzIHBhc3QgeWVhciB3ZSBoYXZlIGluaXRpYXRlZCBmdXJ0aGVyIGRpYWxvZ3VlIGJldHdlZW48YnI+PGJyPuKAouKApnBhc3RvcnMgYW5kIGNodXJjaCBsZWFkZXJzLjxicj7igKLigKZ0aGUgaGlzdG9yaWNhbCBjb21tdW5pdHkgaW4gRnJhbmtsaW4gYW5kIFdpbGxpYW1zb24gQ291bnR5Ljxicj7igKLigKZ0aGUgY2l0eSBhZG1pbmlzdHJhdG9yLCBjaXR5IG1heW9yIGFuZCBjb3VudHkgbWF5b3IuPGJyPuKAouKApnRoZSBkb3dudG93biBidXNpbmVzcyBjb21tdW5pdHkuPGJyPuKAouKApmFuZCBhIGhvc3Qgb2YgaW5kaXZpZHVhbHMuXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj5UaW1lbGluZSA8YnI+PGJyPjxicj5QaGFzZSAxIChmb3VyIGhpc3RvcmljYWwgbWFya2VycyBhcm91bmQgdGhlIGRvd250b3duIHNxdWFyZSkg4oCTIEEgZGVkaWNhdGlvbiBvZiB0aGVzZSBtYXJrZXJzIG9uIE1vbmRheSwgSmFudWFyeSAxNCwgMjAxOSBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPlRoZSBmb3VyIG1hcmtlcnMgYXJlOjxicj48YnI+4oCiXHRVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzPGJyPuKAolx0MTg2NyBEb3dudG93biBSaW90PGJyPuKAolx0Q291cnRob3VzZSBhbmQgTWFya2V0IEhvdXNlPGJyPuKAolx0UmVjb25zdHJ1Y3Rpb24gYW5kIEppbSBDcm93PGJyPjxicj48YnI+UGhhc2UgMiDigJMgRXJlY3QgYSBzdGF0dWUgb2YgYSBVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3Agc29sZGllciBhdCBhIHlldCB0byBiZSBkZXRlcm1pbmVkIGxvY2F0aW9uIGluc2lkZSB0aGUgY2l0eSBsaW1pdHMgb2YgRnJhbmtsaW4uIEEgZGVkaWNhdGlvbiBvZiB0aGlzIHN0YXR1ZSBvbiBNb25kYXksIEphbnVhcnkgMTMsIDIwMjAgZHVyaW5nIHRoZSBDSFVSQ0hFU+KAmSBhbm51YWwgTWFydGluIEx1dGhlciBLaW5nIERheSBDZWxlYnJhdGlvbi4gPGJyPjxicj7igKIgUHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gYXQgQk9NQSBXb3Jrc2hvcCBvbiBUdWVzZGF5LCBBdWd1c3QgMTQsIDIwMTguIDxicj7igKJcdFByZXNlbnQg4oCcRnVsbGVyIFN0b3J54oCdIHRvIENvdW50eSBDb21taXNzaW9uZXJzIG9uIE1vbmRheSwgU2VwdGVtYmVyIDEwLCAyMDE4Ljxicj7igKIgQW5ub3VuY2UgZnVuZHJhaXNlciBmb3IgdGhlIFVTQ1Qgc3RhdHVlIFNlcHRlbWJlciAvIE9jdG9iZXIgMjAxOC48YnI+4oCiIEEgZmFsbCDigJxyZXZpdmFs4oCdIHdpdGggdGhlIENIVVJDSEVTIGluIEZyYW5rbGluIC8gV2lsbGlhbXNvbiBDb3VudHkuPGJyPjxicj48YnI+PGJyPjxicj5UaGUgQXNrIDxicj48YnI+V2UgYXJlIGFza2luZyB5b3UsIHRoZSBjaXR5IGxlYWRlcnMsIHRvIGxlbmQgeW91ciBzdXBwb3J0IGJlaGluZCBvdXIgZWZmb3J0cyBhbmQgdG8gaGVscCB1cyB3aXRoIHRoZSBsb2NhdGlvbnMgb2YgdGhlIG1hcmtlcnMgYW5kIHRoZSBzdGF0dWUuIFdlIGFyZSBub3QgYXNraW5nIHRoZSBjaXR5IGZvciBhbnkgbW9uZXkuIEFsbCBmdW5kcyB3aWxsIGJlIHJhaXNlZCB0aHJvdWdoIHByaXZhdGUgZG9uYXRpb25zLjwvcD5cbiAgICAgICAgICAgIGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lIiwiaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcblxubmF2QmFyLmxvYWROYXZiYXIoKVxuaG9tZS5tYWluUGFnZSgpIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOYXZiYXJcIilcblxuY29uc3QgbmF2QmFyID0ge1xuXG4gIGxvYWROYXZiYXIoKSB7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGgxIGlkPVwibWFpblRpdGxlXCI+VGVsbGluZyBhIEZVTExFUiBTVE9SWSBvZiBGcmFua2xpbjwvaDE+XG4gICAgICA8aDMgaWQ9XCJzdWJUaXRsZVwiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJtZW51XCI+VW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wczwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtZW51XCI+Q291cnRob3VzZS9NYXJrZXQgSG91c2U8L3A+XG4gICAgICAgIDxwIGhyZWY9XCJodHRwczovL3d3dy5mdWxsZXJzdG9yeS5vcmcvMTg2N1Jpb3RcIiBjbGFzcz1cIm1lbnVcIj4xODY3IFJpb3Q8L3A+XG4gICAgICAgIDxwIGhyZWY9XCJodHRwczovL3d3dy5mdWxsZXJzdG9yeS5vcmcvUmVjb25zdHJ1Y3Rpb24tSmltQ3Jvd1wiIGNsYXNzPVwibWVudVwiPlJlY29uc3RydWN0aW9uICYgSmltIENyb3c8L3A+XG4gICAgICAgIDxwIGhyZWY9XCJodHRwczovL3d3dy5mdWxsZXJzdG9yeS5vcmcvU3RhdHVlXCIgY2xhc3M9XCJtZW51XCI+VVNDVCBTdGF0dWU8L3A+XG4gICAgICAgIDxwIGhyZWY9XCJodHRwczovL3d3dy5mdWxsZXJzdG9yeS5vcmcvTWVkaWFcIiBjbGFzcz1cIm1lbnVcIj5NZWRpYTwvcD5cbiAgICAgICAgPHAgaHJlZj1cImh0dHBzOi8vd3d3LmZ1bGxlcnN0b3J5Lm9yZy9Eb25hdGVcIiBjbGFzcz1cIm1lbnVcIj5Eb25hdGU8L3A+XG4gICAgICA8L2Rpdj5gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyXG5cbiAgICAvLyA8cCBpZD1cImxlZnRIZWFkaW5nXCI+U2Vla2luZyBUbyBUZWxsIEEgJm5ic3A8L3A+XG4gICAgLy8gPHAgaWQ9XCJiaWdIZWFkaW5nXCI+RnVsbGVyIFN0b3J5PC9wPlxuICAgIC8vIDxwIGlkPVwicmlnaHRIZWFkaW5nXCI+Jm5ic3AgT2YgRnJhbmtsaW48L3A+XG4gICAgLy8gPHAgaWQ9XCJ0YWdIZWFkaW5nXCI+TGVhcm5pbmcgRnJvbSBPdXIgUGFzdCBUbyBSZWNvbmNpbGUgT3VyIEZ1dHVyZTwvcD4iXX0=
