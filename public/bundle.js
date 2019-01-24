(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Courthouse = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Courthouse & Market House";
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Throughout the 1800s, a “market house” stood close to the courthouse.” For nearly 50 years, human beings were sold and traded at this “market house.” This slave market included the sale of women and children.";
    placeholder.appendChild(temp);
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
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerDonate.jpg");
    temp.setAttribute("alt", "Donate");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "If you would like to support this effort to tell the Fuller Story of Franklin, please click on the link to give online. All donations are tax deductible. When making a donation, please email Kevin Riggs at kevin@franklincommunitychurch.org and reference that the donation is for the Fuller Story project so we can ensure it is applied in the correct way. You can choose either Franklin Community Church or Franklin Community Development for the organization, just make sure to also send the email to Kevin.";
    placeholder.appendChild(temp);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "https://franklincommunitychurch.org/giving/");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
    temp = document.createElement("p");
    temp.setAttribute("id", "donate_text");
    temp.innerHTML = "Donate Now";
    pageLink.appendChild(temp);
    placeholder.appendChild(pageLink);
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
    window.scrollTo(0, 0);
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
const news = [{
  href: "http://www.williamsonherald.com/news/article_a047f9de-1efe-11e9-b913-f34c8c53b334.html",
  img: "../images/alderman.jpg",
  date: "January 23, 2019",
  source: "Williamson Herald",
  content: "Aldermen show strong opinions on 'Fuller Story' marker placement"
}, {
  href: "https://williamsonsource.com/martin-luther-king-jr-celebration-tells-fuller-story/",
  img: "../images/williamsonSource.jpg",
  date: "January 22, 2019",
  source: "Williamson Source",
  content: "Martin Luther King Jr. Celebration Shares “Fuller Story”"
}, {
  href: "http://www.williamsonherald.com/news/article_4026d0a0-1dc5-11e9-9227-2b9896f57f70.html",
  img: "../images/mlk.jpg",
  date: "January 21, 2019",
  source: "Williamson Herald",
  content: "Martin Luther King Jr.’s dream realized in 'Fuller Story' during celebrations Monday"
}, {
  href: "https://brentwoodhomepage.com/stone-of-hope-theme-inspires-mlk-day-attendees-to-consider-fuller-story-of-history/",
  img: "../images/stone.jpg",
  date: "January 21, 2019",
  source: "Brentwood Homepage",
  content: "‘Stone of Hope’ theme inspires MLK Day attendees to consider fuller story of history"
}, {
  href: "https://brentwoodhomepage.com/ceremony-for-mlk-day-in-franklin-to-include-update-on-fuller-story/",
  img: "../images/ceremony.jpg",
  date: "January 17, 2019",
  source: "Brentwood Homepage",
  content: "‘Ceremony for MLK Day in Franklin to include update on ‘fuller story’"
}, {
  href: "http://www.williamsonherald.com/news/article_b013699a-c12d-11e8-ae02-474ac8e99e7b.html?utm_medium=social&utm_source=facebook&utm_campaign=user-share",
  img: "../images/wh925.jpg",
  date: "September 25, 2018",
  source: "Williamson Herald",
  content: "Franklin BOMA approves 'The Fuller Story' proposal to install African-American historical markers"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/09/25/franklin-square-historic-markers-confederate-statute/1413243002/",
  img: "../images/tn925.jpg",
  date: "September 25, 2018",
  source: "The Tennessean",
  content: "Franklin votes to support African-American historic markers near Confederate monument"
}, {
  href: "https://brentwoodhomepage.com/resolution-to-support-fuller-story-historic-markers-unanimously-approved-will-place-on-public-land-in-town-square/",
  img: "../images/bh925.jpg",
  date: "September 25, 2018",
  source: "Brentwood Homepage",
  content: "Resolution to support \"Fuller Story\" historic markers unanimously approved, will place on public land in town square"
}, {
  href: "https://franklinhomepage.com/franklin-groups-individuals-write-letters-of-support-for-fuller-story-initiative-will-present-to-board-of-mayor-and-aldermen-tuesday/",
  img: "../images/fh925.jpeg",
  date: "September 24, 2018",
  source: "Brentwood Homepage",
  content: "Franklin groups, individuals write letters of support for \"Fuller Story\" initiative, will present to Board of Mayor and Aldermen Tuesday"
}, {
  href: "http://www.williamsonherald.com/opinion/article_b1b45d94-b6de-11e8-8ff7-3b52f453b603.html#comments",
  img: "../images/williamsoncommentary.jpg",
  date: "September 12, 2018",
  source: "Williamson Herald",
  content: "Commentary: Good idea for slavery plaques stymied by group's resistance to it"
}, {
  href: "http://www.williamsonherald.com/opinion/article_20cfe1e2-b6a0-11e8-84bd-cb9cf49817dc.html",
  img: "../images/williamsonLetter.jpg",
  date: "September 12, 2018",
  source: "Williamson Herald",
  content: "Letter to Editor: Moving forward with 'The Fuller Story' preferred by pastors"
}, {
  href: "https://franklinhomepage.com/franklin-intends-to-go-to-court-to-clarify-ownership-of-public-square/",
  img: "../images/news5.jpg",
  date: "August 29, 2018",
  source: "Franklin Homepage",
  content: "Franklin Intends to go to court to clarify ownership of Public Square"
}, {
  href: "http://www.williamsonherald.com/news/article_b1ae9be0-ab1a-11e8-a376-0727acdea1f3.html",
  img: "../images/news8.jpg",
  date: "August 28, 2018",
  source: "Williamson Herald",
  content: "UDC wants new placement for proposed Civil War markers; BOMA defers decision"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/daughters-confederacy-franklin-square-williamson-county/1126685002/",
  img: "../images/news7.jpg",
  date: "August 28, 2018",
  source: "The Tennessean",
  content: "Daughters of Confederacy want say in African-American history markers on Franklin Square"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/franklin-confederate-monument-public-square/1128457002/",
  img: "../images/news9.jpeg",
  date: "August 28, 2018",
  source: "The Tennessean",
  content: "Franklin files suit to figure out who owns land on public square"
}, {
  href: "https://franklinhomepage.com/franklin-aldermen-vote-to-slow-effort-to-add-african-american-history-markers-on-the-public-square/",
  img: "../images/news6.jpg",
  date: "August 28, 2018",
  source: "Franklin Homepage",
  content: "African American history markers on the Public Square"
}, {
  href: "https://www.stardem.com/news/national/black-pastors-confederate-descendants-share-civil-war-history-in-tennessee/article_20dcac5f-e1d8-5ece-b8c2-18295342ce33.html",
  img: "../images/theStar.jpg",
  date: "August 24, 2018",
  source: "The Star Democrat",
  content: "Black pastors, Confederate descendants share Civil War history in Tennessee town"
}, {
  href: "https://www.wkrn.com/news/group-of-franklin-pastors-hope-to-add-markers-to-confederate-monument_20180822120323/1388036676",
  img: "../images/wkrnVideo.jpg",
  date: "August 22, 2018",
  source: "WKRN",
  content: "Group of Franklin pastors hope to add markers to Confederate monument"
}, {
  href: "https://civilwartalk.com/threads/pastors-propose-historic-markers-detailing-slave-auctions-and-keeping-confederate-statue-too.149047/",
  img: "../images/civilWarTalks.jpg",
  date: "August 16, 2018",
  source: "Civil War Talk",
  content: "Pastors Propose Historic Markers Detailing Slave Auctions and Keeping Confederate Statue Too"
}, {
  href: "https://www.wsmv.com/news/pastors-push-for-diversity-in-franklin-historical-markers/article_5c3915f8-a0e0-11e8-8d2e-9b1f36f9ed69.html",
  img: "../images/wsmv.jpg",
  date: "August 15, 2018",
  source: "WSMV",
  content: "Pastors push for diversity in Franklin historical markers"
}, {
  href: "https://franklinhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/",
  img: "../images/franklinHomepage.jpg",
  date: "August 14, 2018",
  source: "Franklin Homepage",
  content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/14/franklin-confederate-monument-williamson-county-faith-leaders/993144002/",
  img: "../images/tennessean.jpg",
  date: "August 14, 2018",
  source: "The Tennessean",
  content: "Franklin faith leaders want markers next to Confederate monument"
}, {
  href: "http://www.williamsonherald.com/news/article_0a0756b6-a016-11e8-9504-8fe8eb1b677d.html",
  img: "../images/williamsonHerald.jpg",
  date: "August 14, 2018",
  source: "Williamson Herald",
  content: "Three preachers and a historian tell 'fuller story' by proposing Civil War monument, markers"
}, {
  href: "https://brentwoodhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/",
  img: "../images/brentwoodHomepage.jpg",
  date: "August 14, 2018",
  source: "Brentwood Homepage",
  content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"
}];
const Media = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let newsSection = document.createDocumentFragment();
    news.forEach(story => {
      let article = document.createElement("article");
      article.setAttribute("class", "new_story");
      let link = document.createElement("a");
      link.setAttribute("class", "news_link");
      link.setAttribute("href", story.href);
      link.setAttribute("target", "blank");
      let image = document.createElement("img");
      image.setAttribute("class", "new_image");
      image.setAttribute("src", story.img);
      let date = document.createElement("p");
      date.setAttribute("class", "new_date");
      date.innerHTML = story.date;
      let source = document.createElement("p");
      source.setAttribute("class", "new_source");
      source.innerHTML = story.source;
      let content = document.createElement("p");
      content.setAttribute("class", "new_content");
      content.innerHTML = story.content;
      link.appendChild(image);
      link.appendChild(date);
      link.appendChild(source);
      link.appendChild(content);
      article.appendChild(link);
      newsSection.appendChild(article);
    });
    placeholder.appendChild(newsSection);
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
        navBar.hideMarkers();

        _usct.default.main();

        break;

      case "courthouse":
        navBar.hideMarkers();

        _courthouse.default.main();

        break;

      case "riot":
        navBar.hideMarkers();

        _riot.default.main();

        break;

      case "reconstruction":
        navBar.hideMarkers();

        _reconstruction.default.main();

        break;

      case "statue":
        navBar.hideMarkers();

        _statue.default.main();

        break;

      case "media":
        navBar.hideMarkers();

        _media.default.main();

        break;

      case "donate":
        navBar.hideMarkers();

        _donate.default.main();

        break;

      case "home":
        navBar.hideMarkers();

        _home.default.main();

        break;

      case "markers":
        navBar.hideMarkers();
        break;
    }
  },

  makeMarkers(value, text) {
    let btn = document.createElement("button");
    btn.addEventListener("click", navBar.eventListeners);
    btn.setAttribute("value", value);
    btn.setAttribute("class", "markers");
    btn.innerText = text;
    return btn;
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
    let sect = document.createElement("section");
    sect.setAttribute("class", "home_menu");
    sect.appendChild(navBar.makeBtn("home", "Home Page"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "markers_menu");
    let markers = navBar.makeBtn("markers", "Menu");
    markers.setAttribute("id", "Markers");
    sect.appendChild(markers);
    sect.appendChild(navBar.makeMarkers("usct", "United States Colored Troops"));
    sect.appendChild(navBar.makeMarkers("courthouse", "Courthouse / Market House"));
    sect.appendChild(navBar.makeMarkers("riot", "1867 Riot"));
    sect.appendChild(navBar.makeMarkers("reconstruction", "Reconstruction & Jim Crow"));
    sect.appendChild(navBar.makeMarkers("statue", "USCT Statue"));
    sect.appendChild(navBar.makeMarkers("donate", "Donate"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "media_menu");
    sect.appendChild(navBar.makeBtn("media", "News Media"));
    div.appendChild(sect);
    elementHolder.appendChild(div);
    placeholder.appendChild(elementHolder);
    navBar.hideMarkers();
  },

  hideMarkers() {
    let Markers = document.getElementById("Markers");
    Markers.removeEventListener("click", navBar.hideMarkers);
    Markers.addEventListener("click", navBar.showMarkers);
    Markers.innerHTML = "Menu";
    $("#Markers").show();
    $(".markers").hide();
  },

  showMarkers() {
    let Markers = document.getElementById("Markers");
    Markers.removeEventListener("click", navBar.showMarkers);
    Markers.addEventListener("click", navBar.hideMarkers);
    Markers.innerHTML = "Hide Menu";
    $(".markers").show();
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
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Reconstruction & Jim Crow";
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Following the Civil War the 13th, 14th, and 15th Amendments were passed and ratified. In 1877 Reconstruction ended and the Jim Crow Era soon began. It was during this time that separate restrooms and separate water fountains were in Franklin.";
    placeholder.appendChild(temp);
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
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "1867 Riot";
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "On July 6, 1867, after a delayed July 4th parade and political speeches, a race riot broke out on the square injuring several people and killing one person.";
    placeholder.appendChild(temp);
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
let images = ["../images/statue.JPG", "../images/statue1.JPG", "../images/statue2.JPG", "../images/statue3.JPG"];
const Statue = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let fragment = document.createDocumentFragment();
    images.forEach(item => {
      let photo = document.createElement("img");
      photo.setAttribute("class", "statue_image");
      photo.setAttribute("src", item);
      fragment.appendChild(photo);
    });
    let mainText = document.createElement("p");
    mainText.setAttribute("id", "main_text");
    mainText.innerHTML = "United States Colored Troops Statue";
    fragment.appendChild(mainText);
    let subTitle = document.createElement("p");
    subTitle.setAttribute("id", "sub_title");
    subTitle.innerHTML = "The ultimate goal of the “Fuller Story” is to erect a statue of a USCT Soldier. <br><br>The goal is for this soldier to be placed inside the City Limits.<br><br>The exact location has yet to be determined.";
    fragment.appendChild(subTitle);
    placeholder.appendChild(fragment);
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
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "mainPagePic");
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "United States Colored Troops";
    placeholder.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard.";
    placeholder.appendChild(temp);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "http://www.slavestosoldiers.com");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLGdDQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsbUJBQXpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixhQUEzQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFQO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixJQUFsQixFQUF3QixXQUF4QjtBQUNBLElBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsMkJBQWpCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixJQUF4QjtBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFdBQXhCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrTkFBakI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0Q7O0FBbEJnQixDQUFuQjtlQXFCZSxVOzs7Ozs7Ozs7O0FDdkJmLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxNQUFNLEdBQUc7QUFFYixFQUFBLElBQUksR0FBRztBQUNMLElBQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLEVBQXhCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsMkJBQXpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixFQUF5QixRQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsYUFBM0I7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0EsSUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDRmQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixNQUF0QixFQUE4Qiw2Q0FBOUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCLE1BQS9CO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixRQUF0QixFQUFnQyxPQUFoQztBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLGFBQXhCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixZQUFqQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBdkJZLENBQWY7ZUEwQmUsTTs7Ozs7Ozs7OztBQzVCZixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUVBLE1BQU0sSUFBSSxHQUFHO0FBRVgsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF5Qjs7Ozs7O2FBQXpCO0FBT0Q7O0FBWFUsQ0FBYjtlQWNlLEk7Ozs7OztBQ2hCZjs7QUFDQTs7OztBQUVBLGFBQU8sVUFBUDs7QUFDQSxjQUFLLElBQUw7Ozs7Ozs7OztBQ0pBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBQ0EsTUFBTSxJQUFJLEdBQUcsQ0FDWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHdGQUFQO0FBQWlHLEVBQUEsR0FBRyxFQUFFLHdCQUF0RztBQUFnSSxFQUFBLElBQUksRUFBRSxrQkFBdEk7QUFBMEosRUFBQSxNQUFNLEVBQUUsbUJBQWxLO0FBQXVMLEVBQUEsT0FBTyxFQUFFO0FBQWhNLENBRFcsRUFFWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG9GQUFQO0FBQTZGLEVBQUEsR0FBRyxFQUFFLGdDQUFsRztBQUFvSSxFQUFBLElBQUksRUFBRSxrQkFBMUk7QUFBOEosRUFBQSxNQUFNLEVBQUUsbUJBQXRLO0FBQTJMLEVBQUEsT0FBTyxFQUFFO0FBQXBNLENBRlcsRUFHWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHdGQUFQO0FBQWlHLEVBQUEsR0FBRyxFQUFFLG1CQUF0RztBQUEySCxFQUFBLElBQUksRUFBRSxrQkFBakk7QUFBcUosRUFBQSxNQUFNLEVBQUUsbUJBQTdKO0FBQWtMLEVBQUEsT0FBTyxFQUFFO0FBQTNMLENBSFcsRUFJWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG1IQUFQO0FBQTRILEVBQUEsR0FBRyxFQUFFLHFCQUFqSTtBQUF3SixFQUFBLElBQUksRUFBRSxrQkFBOUo7QUFBa0wsRUFBQSxNQUFNLEVBQUUsb0JBQTFMO0FBQWdOLEVBQUEsT0FBTyxFQUFFO0FBQXpOLENBSlcsRUFLWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG1HQUFQO0FBQTRHLEVBQUEsR0FBRyxFQUFFLHdCQUFqSDtBQUEySSxFQUFBLElBQUksRUFBRSxrQkFBako7QUFBcUssRUFBQSxNQUFNLEVBQUUsb0JBQTdLO0FBQW1NLEVBQUEsT0FBTyxFQUFFO0FBQTVNLENBTFcsRUFNWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHNKQUFQO0FBQStKLEVBQUEsR0FBRyxFQUFFLHFCQUFwSztBQUEyTCxFQUFBLElBQUksRUFBRSxvQkFBak07QUFBdU4sRUFBQSxNQUFNLEVBQUUsbUJBQS9OO0FBQW9QLEVBQUEsT0FBTyxFQUFFO0FBQTdQLENBTlcsRUFPWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG9JQUFQO0FBQTZJLEVBQUEsR0FBRyxFQUFFLHFCQUFsSjtBQUF5SyxFQUFBLElBQUksRUFBRSxvQkFBL0s7QUFBcU0sRUFBQSxNQUFNLEVBQUUsZ0JBQTdNO0FBQStOLEVBQUEsT0FBTyxFQUFFO0FBQXhPLENBUFcsRUFRWDtBQUFDLEVBQUEsSUFBSSxFQUFFLGtKQUFQO0FBQTJKLEVBQUEsR0FBRyxFQUFFLHFCQUFoSztBQUF1TCxFQUFBLElBQUksRUFBRSxvQkFBN0w7QUFBbU4sRUFBQSxNQUFNLEVBQUUsb0JBQTNOO0FBQWlQLEVBQUEsT0FBTyxFQUFFO0FBQTFQLENBUlcsRUFTWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG9LQUFQO0FBQTZLLEVBQUEsR0FBRyxFQUFFLHNCQUFsTDtBQUEwTSxFQUFBLElBQUksRUFBRSxvQkFBaE47QUFBc08sRUFBQSxNQUFNLEVBQUUsb0JBQTlPO0FBQW9RLEVBQUEsT0FBTyxFQUFFO0FBQTdRLENBVFcsRUFVWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG9HQUFQO0FBQTZHLEVBQUEsR0FBRyxFQUFFLG9DQUFsSDtBQUF3SixFQUFBLElBQUksRUFBRSxvQkFBOUo7QUFBb0wsRUFBQSxNQUFNLEVBQUUsbUJBQTVMO0FBQWlOLEVBQUEsT0FBTyxFQUFFO0FBQTFOLENBVlcsRUFXWDtBQUFDLEVBQUEsSUFBSSxFQUFFLDJGQUFQO0FBQW9HLEVBQUEsR0FBRyxFQUFFLGdDQUF6RztBQUEySSxFQUFBLElBQUksRUFBRSxvQkFBako7QUFBdUssRUFBQSxNQUFNLEVBQUUsbUJBQS9LO0FBQW9NLEVBQUEsT0FBTyxFQUFFO0FBQTdNLENBWFcsRUFZWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHFHQUFQO0FBQThHLEVBQUEsR0FBRyxFQUFFLHFCQUFuSDtBQUEwSSxFQUFBLElBQUksRUFBRSxpQkFBaEo7QUFBbUssRUFBQSxNQUFNLEVBQUUsbUJBQTNLO0FBQWdNLEVBQUEsT0FBTyxFQUFFO0FBQXpNLENBWlcsRUFhWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHdGQUFQO0FBQWlHLEVBQUEsR0FBRyxFQUFFLHFCQUF0RztBQUE2SCxFQUFBLElBQUksRUFBRSxpQkFBbkk7QUFBc0osRUFBQSxNQUFNLEVBQUUsbUJBQTlKO0FBQW1MLEVBQUEsT0FBTyxFQUFFO0FBQTVMLENBYlcsRUFjWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHVJQUFQO0FBQWdKLEVBQUEsR0FBRyxFQUFFLHFCQUFySjtBQUE0SyxFQUFBLElBQUksRUFBRSxpQkFBbEw7QUFBcU0sRUFBQSxNQUFNLEVBQUUsZ0JBQTdNO0FBQStOLEVBQUEsT0FBTyxFQUFFO0FBQXhPLENBZFcsRUFlWDtBQUFDLEVBQUEsSUFBSSxFQUFFLDJIQUFQO0FBQW9JLEVBQUEsR0FBRyxFQUFFLHNCQUF6STtBQUFpSyxFQUFBLElBQUksRUFBRSxpQkFBdks7QUFBMEwsRUFBQSxNQUFNLEVBQUUsZ0JBQWxNO0FBQW9OLEVBQUEsT0FBTyxFQUFFO0FBQTdOLENBZlcsRUFnQlg7QUFBQyxFQUFBLElBQUksRUFBRSxrSUFBUDtBQUEySSxFQUFBLEdBQUcsRUFBRSxxQkFBaEo7QUFBdUssRUFBQSxJQUFJLEVBQUUsaUJBQTdLO0FBQWdNLEVBQUEsTUFBTSxFQUFFLG1CQUF4TTtBQUE2TixFQUFBLE9BQU8sRUFBRTtBQUF0TyxDQWhCVyxFQWlCWDtBQUFDLEVBQUEsSUFBSSxFQUFFLG9LQUFQO0FBQTZLLEVBQUEsR0FBRyxFQUFFLHVCQUFsTDtBQUEyTSxFQUFBLElBQUksRUFBRSxpQkFBak47QUFBb08sRUFBQSxNQUFNLEVBQUUsbUJBQTVPO0FBQWlRLEVBQUEsT0FBTyxFQUFFO0FBQTFRLENBakJXLEVBa0JYO0FBQUMsRUFBQSxJQUFJLEVBQUUsMkhBQVA7QUFBb0ksRUFBQSxHQUFHLEVBQUUseUJBQXpJO0FBQW9LLEVBQUEsSUFBSSxFQUFFLGlCQUExSztBQUE2TCxFQUFBLE1BQU0sRUFBRSxNQUFyTTtBQUE2TSxFQUFBLE9BQU8sRUFBRTtBQUF0TixDQWxCVyxFQW1CWDtBQUFDLEVBQUEsSUFBSSxFQUFFLHVJQUFQO0FBQWdKLEVBQUEsR0FBRyxFQUFFLDZCQUFySjtBQUFvTCxFQUFBLElBQUksRUFBRSxpQkFBMUw7QUFBNk0sRUFBQSxNQUFNLEVBQUUsZ0JBQXJOO0FBQXVPLEVBQUEsT0FBTyxFQUFFO0FBQWhQLENBbkJXLEVBb0JYO0FBQUMsRUFBQSxJQUFJLEVBQUUsdUlBQVA7QUFBZ0osRUFBQSxHQUFHLEVBQUUsb0JBQXJKO0FBQTJLLEVBQUEsSUFBSSxFQUFFLGlCQUFqTDtBQUFvTSxFQUFBLE1BQU0sRUFBRSxNQUE1TTtBQUFvTixFQUFBLE9BQU8sRUFBRTtBQUE3TixDQXBCVyxFQXFCWDtBQUFDLEVBQUEsSUFBSSxFQUFFLDJIQUFQO0FBQW9JLEVBQUEsR0FBRyxFQUFFLGdDQUF6STtBQUEySyxFQUFBLElBQUksRUFBRSxpQkFBakw7QUFBb00sRUFBQSxNQUFNLEVBQUUsbUJBQTVNO0FBQWlPLEVBQUEsT0FBTyxFQUFFO0FBQTFPLENBckJXLEVBc0JYO0FBQUMsRUFBQSxJQUFJLEVBQUUsNElBQVA7QUFBcUosRUFBQSxHQUFHLEVBQUUsMEJBQTFKO0FBQXNMLEVBQUEsSUFBSSxFQUFFLGlCQUE1TDtBQUErTSxFQUFBLE1BQU0sRUFBRSxnQkFBdk47QUFBeU8sRUFBQSxPQUFPLEVBQUU7QUFBbFAsQ0F0QlcsRUF1Qlg7QUFBQyxFQUFBLElBQUksRUFBRSx3RkFBUDtBQUFpRyxFQUFBLEdBQUcsRUFBRSxnQ0FBdEc7QUFBd0ksRUFBQSxJQUFJLEVBQUUsaUJBQTlJO0FBQWlLLEVBQUEsTUFBTSxFQUFFLG1CQUF6SztBQUE4TCxFQUFBLE9BQU8sRUFBRTtBQUF2TSxDQXZCVyxFQXdCWDtBQUFDLEVBQUEsSUFBSSxFQUFFLDRIQUFQO0FBQXFJLEVBQUEsR0FBRyxFQUFFLGlDQUExSTtBQUE2SyxFQUFBLElBQUksRUFBRSxpQkFBbkw7QUFBc00sRUFBQSxNQUFNLEVBQUUsb0JBQTlNO0FBQW9PLEVBQUEsT0FBTyxFQUFFO0FBQTdPLENBeEJXLENBQWI7QUEyQkEsTUFBTSxLQUFLLEdBQUc7QUFFWixFQUFBLElBQUksR0FBRztBQUNMLElBQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLEVBQXhCO0FBQ0EsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQWxCO0FBQ0EsSUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQUssSUFBSTtBQUNwQixVQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUE4QixXQUE5QjtBQUNBLFVBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVg7QUFDQSxNQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFdBQTNCO0FBQ0EsTUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixNQUFsQixFQUEwQixLQUFLLENBQUMsSUFBaEM7QUFDQSxNQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLE9BQTVCO0FBQ0EsVUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLE1BQUEsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsV0FBNUI7QUFDQSxNQUFBLEtBQUssQ0FBQyxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEtBQUssQ0FBQyxHQUFoQztBQUNBLFVBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVg7QUFDQSxNQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFVBQTNCO0FBQ0EsTUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixLQUFLLENBQUMsSUFBdkI7QUFDQSxVQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0EsTUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixFQUE2QixZQUE3QjtBQUNBLE1BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsS0FBSyxDQUFDLE1BQXpCO0FBQ0EsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtBQUNBLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLEtBQUssQ0FBQyxPQUExQjtBQUNBLE1BQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsS0FBakI7QUFDQSxNQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQWpCO0FBQ0EsTUFBQSxJQUFJLENBQUMsV0FBTCxDQUFpQixNQUFqQjtBQUNBLE1BQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsT0FBakI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLElBQXBCO0FBQ0EsTUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixPQUF4QjtBQUNELEtBekJEO0FBMEJBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsV0FBeEI7QUFDRDs7QUFqQ1csQ0FBZDtlQW9DZSxLOzs7Ozs7Ozs7OztBQ2hFZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWxCO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFFYixFQUFBLGNBQWMsQ0FBQyxLQUFELEVBQVE7QUFDcEIsUUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUEzQjs7QUFDQSxZQUFPLE9BQVA7QUFDRSxXQUFLLE1BQUw7QUFDRSxRQUFBLE1BQU0sQ0FBQyxXQUFQOztBQUNBLHNCQUFLLElBQUw7O0FBQ0E7O0FBQ0YsV0FBSyxZQUFMO0FBQ0UsUUFBQSxNQUFNLENBQUMsV0FBUDs7QUFDQSw0QkFBVyxJQUFYOztBQUNBOztBQUNGLFdBQUssTUFBTDtBQUNFLFFBQUEsTUFBTSxDQUFDLFdBQVA7O0FBQ0Esc0JBQUssSUFBTDs7QUFDQTs7QUFDRixXQUFLLGdCQUFMO0FBQ0UsUUFBQSxNQUFNLENBQUMsV0FBUDs7QUFDQSxnQ0FBZSxJQUFmOztBQUNBOztBQUNGLFdBQUssUUFBTDtBQUNFLFFBQUEsTUFBTSxDQUFDLFdBQVA7O0FBQ0Esd0JBQU8sSUFBUDs7QUFDQTs7QUFDRixXQUFLLE9BQUw7QUFDRSxRQUFBLE1BQU0sQ0FBQyxXQUFQOztBQUNBLHVCQUFNLElBQU47O0FBQ0E7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsUUFBQSxNQUFNLENBQUMsV0FBUDs7QUFDQSx3QkFBTyxJQUFQOztBQUNBOztBQUNGLFdBQUssTUFBTDtBQUNFLFFBQUEsTUFBTSxDQUFDLFdBQVA7O0FBQ0Esc0JBQUssSUFBTDs7QUFDQTs7QUFDRixXQUFLLFNBQUw7QUFDRSxRQUFBLE1BQU0sQ0FBQyxXQUFQO0FBQ0E7QUFuQ0o7QUFzQ0QsR0ExQ1k7O0FBNENiLEVBQUEsV0FBVyxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWM7QUFDdkIsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBLElBQUEsR0FBRyxDQUFDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLE1BQU0sQ0FBQyxjQUFyQztBQUNBLElBQUEsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsS0FBMUI7QUFDQSxJQUFBLEdBQUcsQ0FBQyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0EsSUFBQSxHQUFHLENBQUMsU0FBSixHQUFnQixJQUFoQjtBQUNBLFdBQU8sR0FBUDtBQUNELEdBbkRZOztBQXFEYixFQUFBLE9BQU8sQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjO0FBQ25CLFFBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQSxJQUFBLEdBQUcsQ0FBQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixNQUFNLENBQUMsY0FBckM7QUFDQSxJQUFBLEdBQUcsQ0FBQyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCO0FBQ0EsSUFBQSxHQUFHLENBQUMsWUFBSixDQUFpQixPQUFqQixFQUEwQixNQUExQjtBQUNBLElBQUEsR0FBRyxDQUFDLFNBQUosR0FBZ0IsSUFBaEI7QUFDQSxXQUFPLEdBQVA7QUFDRCxHQTVEWTs7QUE4RGIsRUFBQSxVQUFVLEdBQUc7QUFDWCxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBcEI7QUFDQSxRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixJQUFyQixFQUEyQixXQUEzQjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0Isb0NBQXBCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixPQUExQjtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0EsSUFBQSxVQUFVLENBQUMsWUFBWCxDQUF3QixJQUF4QixFQUE4QixVQUE5QjtBQUNBLElBQUEsVUFBVSxDQUFDLFNBQVgsR0FBdUIsZ0RBQXZCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixVQUExQjtBQUNBLFFBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxJQUFBLEdBQUcsQ0FBQyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsV0FBM0I7QUFDQSxJQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLE1BQU0sQ0FBQyxPQUFQLENBQWUsTUFBZixFQUF1QixXQUF2QixDQUFqQjtBQUNBLElBQUEsR0FBRyxDQUFDLFdBQUosQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFQO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixjQUEzQjtBQUNBLFFBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZixFQUEwQixNQUExQixDQUFkO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixJQUFyQixFQUEyQixTQUEzQjtBQUNBLElBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsT0FBakI7QUFDQSxJQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE1BQW5CLEVBQTJCLDhCQUEzQixDQUFqQjtBQUNBLElBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsWUFBbkIsRUFBaUMsMkJBQWpDLENBQWpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsV0FBTCxDQUFpQixNQUFNLENBQUMsV0FBUCxDQUFtQixNQUFuQixFQUEyQixXQUEzQixDQUFqQjtBQUNBLElBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsZ0JBQW5CLEVBQXFDLDJCQUFyQyxDQUFqQjtBQUNBLElBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsUUFBbkIsRUFBNkIsYUFBN0IsQ0FBakI7QUFDQSxJQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLE1BQU0sQ0FBQyxXQUFQLENBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLENBQWpCO0FBQ0EsSUFBQSxHQUFHLENBQUMsV0FBSixDQUFnQixJQUFoQjtBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFlBQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsV0FBTCxDQUFpQixNQUFNLENBQUMsT0FBUCxDQUFlLE9BQWYsRUFBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFBLEdBQUcsQ0FBQyxXQUFKLENBQWdCLElBQWhCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixHQUExQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsYUFBeEI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxXQUFQO0FBQ0QsR0FqR1k7O0FBbUdiLEVBQUEsV0FBVyxHQUFHO0FBQ1osUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQUEsT0FBTyxDQUFDLG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDLE1BQU0sQ0FBQyxXQUE1QztBQUNBLElBQUEsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLE1BQU0sQ0FBQyxXQUF6QztBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsTUFBcEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYyxJQUFkO0FBQ0EsSUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMsSUFBZDtBQUNELEdBMUdZOztBQTRHYixFQUFBLFdBQVcsR0FBRztBQUNaLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxtQkFBUixDQUE0QixPQUE1QixFQUFxQyxNQUFNLENBQUMsV0FBNUM7QUFDQSxJQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxNQUFNLENBQUMsV0FBekM7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFdBQXBCO0FBQ0EsSUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMsSUFBZDtBQUNEOztBQWxIWSxDQUFmO2VBdUhlLE0sRUFFWDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4SUosSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFFQSxNQUFNLGNBQWMsR0FBRztBQUVyQixFQUFBLElBQUksR0FBRztBQUNMLElBQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXdCLEVBQXhCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsZ0NBQXpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixFQUF5QixtQkFBekI7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLGFBQTNCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixJQUF4QjtBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFdBQXhCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQiwyQkFBakI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0EsSUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLG9QQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDRDs7QUFsQm9CLENBQXZCO2VBcUJlLGM7Ozs7Ozs7Ozs7QUN2QmYsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFFQSxNQUFNLElBQUksR0FBRztBQUVYLEVBQUEsSUFBSSxHQUFHO0FBQ0wsSUFBQSxNQUFNLENBQUMsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0IsRUFBeEI7QUFDQSxRQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixFQUF5QixnQ0FBekI7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLG1CQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsYUFBM0I7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0EsSUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLFdBQWpCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixJQUF4QjtBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFdBQXhCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQiw4SkFBakI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0Q7O0FBbEJVLENBQWI7ZUFxQmUsSTs7Ozs7Ozs7OztBQ3ZCZixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUNBLElBQUksTUFBTSxHQUFHLENBQUMsc0JBQUQsRUFBeUIsdUJBQXpCLEVBQWtELHVCQUFsRCxFQUEyRSx1QkFBM0UsQ0FBYjtBQUdBLE1BQU0sTUFBTSxHQUFHO0FBRWIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFmO0FBQ0EsSUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLElBQUksSUFBSTtBQUNyQixVQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsTUFBQSxLQUFLLENBQUMsWUFBTixDQUFtQixPQUFuQixFQUE0QixjQUE1QjtBQUNBLE1BQUEsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsSUFBMUI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLEtBQXJCO0FBQ0QsS0FMRDtBQU1BLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWY7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLElBQXRCLEVBQTRCLFdBQTVCO0FBQ0EsSUFBQSxRQUFRLENBQUMsU0FBVCxHQUFxQixxQ0FBckI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLFFBQXJCO0FBQ0EsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsV0FBNUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLCtNQUFyQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsUUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBckJZLENBQWY7ZUF3QmUsTTs7Ozs7Ozs7OztBQzVCZixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUVBLE1BQU0sSUFBSSxHQUFHO0FBRVgsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLGdDQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsbUJBQXpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixhQUEzQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFQO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixJQUFsQixFQUF3QixXQUF4QjtBQUNBLElBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsOEJBQWpCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixJQUF4QjtBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFdBQXhCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQix5TkFBakI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLElBQXhCO0FBQ0EsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsaUNBQTlCO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixNQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsUUFBdEIsRUFBZ0MsT0FBaEM7QUFDQSxJQUFBLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFQO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixFQUF5Qiw4QkFBekI7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLHVCQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsYUFBM0I7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLElBQXJCO0FBQ0EsSUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBM0I7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBaENVLENBQWI7ZUFtQ2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBDb3VydGhvdXNlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlclN0b3J5UGxhcXVlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiSGlzdG9yaWNhbCBQbGFxdWVcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblBhZ2VQaWNcIilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiQ291cnRob3VzZSAmIE1hcmtldCBIb3VzZVwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlRocm91Z2hvdXQgdGhlIDE4MDBzLCBhIOKAnG1hcmtldCBob3VzZeKAnSBzdG9vZCBjbG9zZSB0byB0aGUgY291cnRob3VzZS7igJ0gRm9yIG5lYXJseSA1MCB5ZWFycywgaHVtYW4gYmVpbmdzIHdlcmUgc29sZCBhbmQgdHJhZGVkIGF0IHRoaXMg4oCcbWFya2V0IGhvdXNlLuKAnSBUaGlzIHNsYXZlIG1hcmtldCBpbmNsdWRlZCB0aGUgc2FsZSBvZiB3b21lbiBhbmQgY2hpbGRyZW4uXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJ0aG91c2UiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgRG9uYXRlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlckRvbmF0ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkRvbmF0ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluUGFnZVBpY1wiKVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJJZiB5b3Ugd291bGQgbGlrZSB0byBzdXBwb3J0IHRoaXMgZWZmb3J0IHRvIHRlbGwgdGhlIEZ1bGxlciBTdG9yeSBvZiBGcmFua2xpbiwgcGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIHRvIGdpdmUgb25saW5lLiBBbGwgZG9uYXRpb25zIGFyZSB0YXggZGVkdWN0aWJsZS4gV2hlbiBtYWtpbmcgYSBkb25hdGlvbiwgcGxlYXNlIGVtYWlsIEtldmluIFJpZ2dzIGF0IGtldmluQGZyYW5rbGluY29tbXVuaXR5Y2h1cmNoLm9yZyBhbmQgcmVmZXJlbmNlIHRoYXQgdGhlIGRvbmF0aW9uIGlzIGZvciB0aGUgRnVsbGVyIFN0b3J5IHByb2plY3Qgc28gd2UgY2FuIGVuc3VyZSBpdCBpcyBhcHBsaWVkIGluIHRoZSBjb3JyZWN0IHdheS4gWW91IGNhbiBjaG9vc2UgZWl0aGVyIEZyYW5rbGluIENvbW11bml0eSBDaHVyY2ggb3IgRnJhbmtsaW4gQ29tbXVuaXR5IERldmVsb3BtZW50IGZvciB0aGUgb3JnYW5pemF0aW9uLCBqdXN0IG1ha2Ugc3VyZSB0byBhbHNvIHNlbmQgdGhlIGVtYWlsIHRvIEtldmluLlwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2ZyYW5rbGluY29tbXVuaXR5Y2h1cmNoLm9yZy9naXZpbmcvXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG9uYXRlX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRG9uYXRlIE5vd1wiXG4gICAgcGFnZUxpbmsuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChwYWdlTGluaylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb25hdGUiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgSG9tZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvc3RhdHVlLkpQR1wiIGNsYXNzPVwibWFpblBhZ2VQaWNcIj5cbiAgICA8cCBjbGFzcz1cIm1haW5QYWdlVGl0bGVcIj5UaGUgZm9sbG93aW5nIHJlc29sdXRpb24gd2FzIHBhc3NlZCBvbiBTZXB0ZW1iZXIgMjUsIDIwMTguIFdlIHRoYW5rIGV2ZXJ5b25lIGZvciB0aGVpciBzdXBwb3J0IGFuZCBHb2QgZm9yIEhpcyBmYXZvci48L3A+XG4gICAgPGltZyBzcmM9XCJodHRwczovL3Njb250ZW50LWF0bDMtMS54eC5mYmNkbi5uZXQvdi90MS4wLTkvNDI2MjU3MjZfMTAyMTIzMTA3MTU2OTgzMDJfNTQyNzcxNDA2NzkwNzIxNTM2X28uanBnP19uY19jYXQ9MTAzJm9oPTUxMGI2YTkyNjc2NGIxMzliMDRmZmYyZTcwZjU3YjIyJm9lPTVDNTk0QkE4XCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblRleHRcIj5BZnRlciB0aGUgdHJhZ2ljIGV2ZW50cyBpbiBDaGFybG90dGVzdmlsbGUsIFZBIGxhc3QgQXVndXN0LCBjb252ZXJzYXRpb25zIHN0YXJ0ZWQgaGFwcGVuaW5nIGluIEZyYW5rbGluIGFib3V0IGhvdyBvdXIgY2l0eSB3b3VsZCBcXChvciB3b3VsZCBub3QpIHJlYWN0IGlmIHNvbWV0aGluZyBzaW1pbGFyIGhhcHBlbmVkIGhlcmUuIEluIGEgbG90IG9mIHdheXMsIG91ciBjaXR5IGlzIGxpa2UgQ2hhcmxvdHRlc3ZpbGxlLiBUaGVzZSBkaXNjdXNzaW9ucyBsZWQgdG8gdGhlIHRob3VnaHQgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gYmUg4oCcYWN0aW9uYXJ54oCdIGluc3RlYWQgb2Yg4oCccmVhY3Rpb25hcnku4oCdIFRoZSByZXN1bHQgb2YgdGhlc2UgY29udmVyc2F0aW9ucyBsZWQgdG8gdGhlIGlkZWEgdGhhdCBpbnN0ZWFkIG9mIHRha2luZyBkb3duIGhpc3RvcmljYWwgbWFya2Vycywgd2hhdCBpZiB3ZSBhZGRlZCB0byB0aGVtIGFuZCB0b2xkIGEgICAgIOKAnGZ1bGxlciBzdG9yeS7igJ0gRnVydGhlciwgaXQgd2FzIGJlbGlldmVkIHRoYXQgdGhlIENIVVJDSCBpbiBGcmFua2xpbiBzaG91bGQgbGVhZCB0aGlzIGVmZm9ydC48YnI+PGJyPk92ZXIgdGhlIGNvdXJzZSBvZiB0aGlzIHBhc3QgeWVhciB3ZSBoYXZlIGluaXRpYXRlZCBmdXJ0aGVyIGRpYWxvZ3VlIGJldHdlZW48YnI+PGJyPuKAouKApnBhc3RvcnMgYW5kIGNodXJjaCBsZWFkZXJzLjxicj7igKLigKZ0aGUgaGlzdG9yaWNhbCBjb21tdW5pdHkgaW4gRnJhbmtsaW4gYW5kIFdpbGxpYW1zb24gQ291bnR5Ljxicj7igKLigKZ0aGUgY2l0eSBhZG1pbmlzdHJhdG9yLCBjaXR5IG1heW9yIGFuZCBjb3VudHkgbWF5b3IuPGJyPuKAouKApnRoZSBkb3dudG93biBidXNpbmVzcyBjb21tdW5pdHkuPGJyPuKAouKApmFuZCBhIGhvc3Qgb2YgaW5kaXZpZHVhbHMuXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj5UaW1lbGluZSA8YnI+PGJyPjxicj5QaGFzZSAxIChmb3VyIGhpc3RvcmljYWwgbWFya2VycyBhcm91bmQgdGhlIGRvd250b3duIHNxdWFyZSkg4oCTIEEgZGVkaWNhdGlvbiBvZiB0aGVzZSBtYXJrZXJzIG9uIE1vbmRheSwgSmFudWFyeSAxNCwgMjAxOSBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPlRoZSBmb3VyIG1hcmtlcnMgYXJlOjxicj48YnI+4oCiXHRVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzPGJyPuKAolx0MTg2NyBEb3dudG93biBSaW90PGJyPuKAolx0Q291cnRob3VzZSBhbmQgTWFya2V0IEhvdXNlPGJyPuKAolx0UmVjb25zdHJ1Y3Rpb24gYW5kIEppbSBDcm93PGJyPjxicj48YnI+UGhhc2UgMiDigJMgRXJlY3QgYSBzdGF0dWUgb2YgYSBVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3Agc29sZGllciBhdCBhIHlldCB0byBiZSBkZXRlcm1pbmVkIGxvY2F0aW9uIGluc2lkZSB0aGUgY2l0eSBsaW1pdHMgb2YgRnJhbmtsaW4uIEEgZGVkaWNhdGlvbiBvZiB0aGlzIHN0YXR1ZSBvbiBNb25kYXksIEphbnVhcnkgMTMsIDIwMjAgZHVyaW5nIHRoZSBDSFVSQ0hFU+KAmSBhbm51YWwgTWFydGluIEx1dGhlciBLaW5nIERheSBDZWxlYnJhdGlvbi4gPGJyPjxicj7igKIgUHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gYXQgQk9NQSBXb3Jrc2hvcCBvbiBUdWVzZGF5LCBBdWd1c3QgMTQsIDIwMTguIDxicj7igKJcdFByZXNlbnQg4oCcRnVsbGVyIFN0b3J54oCdIHRvIENvdW50eSBDb21taXNzaW9uZXJzIG9uIE1vbmRheSwgU2VwdGVtYmVyIDEwLCAyMDE4Ljxicj7igKIgQW5ub3VuY2UgZnVuZHJhaXNlciBmb3IgdGhlIFVTQ1Qgc3RhdHVlIFNlcHRlbWJlciAvIE9jdG9iZXIgMjAxOC48YnI+4oCiIEEgZmFsbCDigJxyZXZpdmFs4oCdIHdpdGggdGhlIENIVVJDSEVTIGluIEZyYW5rbGluIC8gV2lsbGlhbXNvbiBDb3VudHkuPGJyPjxicj48YnI+PGJyPjxicj5UaGUgQXNrIDxicj48YnI+V2UgYXJlIGFza2luZyB5b3UsIHRoZSBjaXR5IGxlYWRlcnMsIHRvIGxlbmQgeW91ciBzdXBwb3J0IGJlaGluZCBvdXIgZWZmb3J0cyBhbmQgdG8gaGVscCB1cyB3aXRoIHRoZSBsb2NhdGlvbnMgb2YgdGhlIG1hcmtlcnMgYW5kIHRoZSBzdGF0dWUuIFdlIGFyZSBub3QgYXNraW5nIHRoZSBjaXR5IGZvciBhbnkgbW9uZXkuIEFsbCBmdW5kcyB3aWxsIGJlIHJhaXNlZCB0aHJvdWdoIHByaXZhdGUgZG9uYXRpb25zLjwvcD5cbiAgICAgICAgICAgIGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxubmF2QmFyLmxvYWROYXZiYXIoKVxuSG9tZS5tYWluKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmNvbnN0IG5ld3MgPSBbXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2EwNDdmOWRlLTFlZmUtMTFlOS1iOTEzLWYzNGM4YzUzYjMzNC5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvYWxkZXJtYW4uanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMywgMjAxOVwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJBbGRlcm1lbiBzaG93IHN0cm9uZyBvcGluaW9ucyBvbiAnRnVsbGVyIFN0b3J5JyBtYXJrZXIgcGxhY2VtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL3dpbGxpYW1zb25zb3VyY2UuY29tL21hcnRpbi1sdXRoZXIta2luZy1qci1jZWxlYnJhdGlvbi10ZWxscy1mdWxsZXItc3RvcnkvXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvblNvdXJjZS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIyLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIFNvdXJjZVwiLCBjb250ZW50OiBcIk1hcnRpbiBMdXRoZXIgS2luZyBKci4gQ2VsZWJyYXRpb24gU2hhcmVzIOKAnEZ1bGxlciBTdG9yeeKAnVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfNDAyNmQwYTAtMWRjNS0xMWU5LTkyMjctMmI5ODk2ZjU3ZjcwLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9tbGsuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMSwgMjAxOVwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJNYXJ0aW4gTHV0aGVyIEtpbmcgSnIu4oCZcyBkcmVhbSByZWFsaXplZCBpbiAnRnVsbGVyIFN0b3J5JyBkdXJpbmcgY2VsZWJyYXRpb25zIE1vbmRheVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vc3RvbmUtb2YtaG9wZS10aGVtZS1pbnNwaXJlcy1tbGstZGF5LWF0dGVuZGVlcy10by1jb25zaWRlci1mdWxsZXItc3Rvcnktb2YtaGlzdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9zdG9uZS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIxLCAyMDE5XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCLigJhTdG9uZSBvZiBIb3Bl4oCZIHRoZW1lIGluc3BpcmVzIE1MSyBEYXkgYXR0ZW5kZWVzIHRvIGNvbnNpZGVyIGZ1bGxlciBzdG9yeSBvZiBoaXN0b3J5XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9jZXJlbW9ueS1mb3ItbWxrLWRheS1pbi1mcmFua2xpbi10by1pbmNsdWRlLXVwZGF0ZS1vbi1mdWxsZXItc3RvcnkvXCIsIGltZzogXCIuLi9pbWFnZXMvY2VyZW1vbnkuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAxNywgMjAxOVwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwi4oCYQ2VyZW1vbnkgZm9yIE1MSyBEYXkgaW4gRnJhbmtsaW4gdG8gaW5jbHVkZSB1cGRhdGUgb24g4oCYZnVsbGVyIHN0b3J54oCZXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV9iMDEzNjk5YS1jMTJkLTExZTgtYWUwMi00NzRhYzhlOTllN2IuaHRtbD91dG1fbWVkaXVtPXNvY2lhbCZ1dG1fc291cmNlPWZhY2Vib29rJnV0bV9jYW1wYWlnbj11c2VyLXNoYXJlXCIsIGltZzogXCIuLi9pbWFnZXMvd2g5MjUuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI1LCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkZyYW5rbGluIEJPTUEgYXBwcm92ZXMgJ1RoZSBGdWxsZXIgU3RvcnknIHByb3Bvc2FsIHRvIGluc3RhbGwgQWZyaWNhbi1BbWVyaWNhbiBoaXN0b3JpY2FsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA5LzI1L2ZyYW5rbGluLXNxdWFyZS1oaXN0b3JpYy1tYXJrZXJzLWNvbmZlZGVyYXRlLXN0YXR1dGUvMTQxMzI0MzAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy90bjkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gdm90ZXMgdG8gc3VwcG9ydCBBZnJpY2FuLUFtZXJpY2FuIGhpc3RvcmljIG1hcmtlcnMgbmVhciBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vcmVzb2x1dGlvbi10by1zdXBwb3J0LWZ1bGxlci1zdG9yeS1oaXN0b3JpYy1tYXJrZXJzLXVuYW5pbW91c2x5LWFwcHJvdmVkLXdpbGwtcGxhY2Utb24tcHVibGljLWxhbmQtaW4tdG93bi1zcXVhcmUvXCIsIGltZzogXCIuLi9pbWFnZXMvYmg5MjUuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI1LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJSZXNvbHV0aW9uIHRvIHN1cHBvcnQgXFxcIkZ1bGxlciBTdG9yeVxcXCIgaGlzdG9yaWMgbWFya2VycyB1bmFuaW1vdXNseSBhcHByb3ZlZCwgd2lsbCBwbGFjZSBvbiBwdWJsaWMgbGFuZCBpbiB0b3duIHNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1ncm91cHMtaW5kaXZpZHVhbHMtd3JpdGUtbGV0dGVycy1vZi1zdXBwb3J0LWZvci1mdWxsZXItc3RvcnktaW5pdGlhdGl2ZS13aWxsLXByZXNlbnQtdG8tYm9hcmQtb2YtbWF5b3ItYW5kLWFsZGVybWVuLXR1ZXNkYXkvXCIsIGltZzogXCIuLi9pbWFnZXMvZmg5MjUuanBlZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNCwgMjAxOFwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZ3JvdXBzLCBpbmRpdmlkdWFscyB3cml0ZSBsZXR0ZXJzIG9mIHN1cHBvcnQgZm9yIFxcXCJGdWxsZXIgU3RvcnlcXFwiIGluaXRpYXRpdmUsIHdpbGwgcHJlc2VudCB0byBCb2FyZCBvZiBNYXlvciBhbmQgQWxkZXJtZW4gVHVlc2RheVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9vcGluaW9uL2FydGljbGVfYjFiNDVkOTQtYjZkZS0xMWU4LThmZjctM2I1MmY0NTNiNjAzLmh0bWwjY29tbWVudHNcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uY29tbWVudGFyeS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMTIsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiQ29tbWVudGFyeTogR29vZCBpZGVhIGZvciBzbGF2ZXJ5IHBsYXF1ZXMgc3R5bWllZCBieSBncm91cCdzIHJlc2lzdGFuY2UgdG8gaXRcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vb3Bpbmlvbi9hcnRpY2xlXzIwY2ZlMWUyLWI2YTAtMTFlOC04NGJkLWNiOWNmNDk4MTdkYy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvbkxldHRlci5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMTIsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiTGV0dGVyIHRvIEVkaXRvcjogTW92aW5nIGZvcndhcmQgd2l0aCAnVGhlIEZ1bGxlciBTdG9yeScgcHJlZmVycmVkIGJ5IHBhc3RvcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4taW50ZW5kcy10by1nby10by1jb3VydC10by1jbGFyaWZ5LW93bmVyc2hpcC1vZi1wdWJsaWMtc3F1YXJlL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M1LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOSwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBJbnRlbmRzIHRvIGdvIHRvIGNvdXJ0IHRvIGNsYXJpZnkgb3duZXJzaGlwIG9mIFB1YmxpYyBTcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2IxYWU5YmUwLWFiMWEtMTFlOC1hMzc2LTA3MjdhY2RlYTFmMy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czguanBnXCIsIGRhdGU6IFwiQXVndXN0IDI4LCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIlVEQyB3YW50cyBuZXcgcGxhY2VtZW50IGZvciBwcm9wb3NlZCBDaXZpbCBXYXIgbWFya2VyczsgQk9NQSBkZWZlcnMgZGVjaXNpb25cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA4LzI4L2RhdWdodGVycy1jb25mZWRlcmFjeS1mcmFua2xpbi1zcXVhcmUtd2lsbGlhbXNvbi1jb3VudHkvMTEyNjY4NTAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzNy5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRGF1Z2h0ZXJzIG9mIENvbmZlZGVyYWN5IHdhbnQgc2F5IGluIEFmcmljYW4tQW1lcmljYW4gaGlzdG9yeSBtYXJrZXJzIG9uIEZyYW5rbGluIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMjgvZnJhbmtsaW4tY29uZmVkZXJhdGUtbW9udW1lbnQtcHVibGljLXNxdWFyZS8xMTI4NDU3MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M5LmpwZWdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZmlsZXMgc3VpdCB0byBmaWd1cmUgb3V0IHdobyBvd25zIGxhbmQgb24gcHVibGljIHNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1hbGRlcm1lbi12b3RlLXRvLXNsb3ctZWZmb3J0LXRvLWFkZC1hZnJpY2FuLWFtZXJpY2FuLWhpc3RvcnktbWFya2Vycy1vbi10aGUtcHVibGljLXNxdWFyZS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzNi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIkZyYW5rbGluIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiQWZyaWNhbiBBbWVyaWNhbiBoaXN0b3J5IG1hcmtlcnMgb24gdGhlIFB1YmxpYyBTcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnN0YXJkZW0uY29tL25ld3MvbmF0aW9uYWwvYmxhY2stcGFzdG9ycy1jb25mZWRlcmF0ZS1kZXNjZW5kYW50cy1zaGFyZS1jaXZpbC13YXItaGlzdG9yeS1pbi10ZW5uZXNzZWUvYXJ0aWNsZV8yMGRjYWM1Zi1lMWQ4LTVlY2UtYjhjMi0xODI5NTM0MmNlMzMuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL3RoZVN0YXIuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI0LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgU3RhciBEZW1vY3JhdFwiLCBjb250ZW50OiBcIkJsYWNrIHBhc3RvcnMsIENvbmZlZGVyYXRlIGRlc2NlbmRhbnRzIHNoYXJlIENpdmlsIFdhciBoaXN0b3J5IGluIFRlbm5lc3NlZSB0b3duXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy53a3JuLmNvbS9uZXdzL2dyb3VwLW9mLWZyYW5rbGluLXBhc3RvcnMtaG9wZS10by1hZGQtbWFya2Vycy10by1jb25mZWRlcmF0ZS1tb251bWVudF8yMDE4MDgyMjEyMDMyMy8xMzg4MDM2Njc2XCIsIGltZzogXCIuLi9pbWFnZXMvd2tyblZpZGVvLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyMiwgMjAxOFwiLCBzb3VyY2U6IFwiV0tSTlwiLCBjb250ZW50OiBcIkdyb3VwIG9mIEZyYW5rbGluIHBhc3RvcnMgaG9wZSB0byBhZGQgbWFya2VycyB0byBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9jaXZpbHdhcnRhbGsuY29tL3RocmVhZHMvcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLWFuZC1rZWVwaW5nLWNvbmZlZGVyYXRlLXN0YXR1ZS10b28uMTQ5MDQ3L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2NpdmlsV2FyVGFsa3MuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE2LCAyMDE4XCIsIHNvdXJjZTogXCJDaXZpbCBXYXIgVGFsa1wiLCBjb250ZW50OiBcIlBhc3RvcnMgUHJvcG9zZSBIaXN0b3JpYyBNYXJrZXJzIERldGFpbGluZyBTbGF2ZSBBdWN0aW9ucyBhbmQgS2VlcGluZyBDb25mZWRlcmF0ZSBTdGF0dWUgVG9vXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy53c212LmNvbS9uZXdzL3Bhc3RvcnMtcHVzaC1mb3ItZGl2ZXJzaXR5LWluLWZyYW5rbGluLWhpc3RvcmljYWwtbWFya2Vycy9hcnRpY2xlXzVjMzkxNWY4LWEwZTAtMTFlOC04ZDJlLTliMWYzNmY5ZWQ2OS5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd3Ntdi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTUsIDIwMThcIiwgc291cmNlOiBcIldTTVZcIiwgY29udGVudDogXCJQYXN0b3JzIHB1c2ggZm9yIGRpdmVyc2l0eSBpbiBGcmFua2xpbiBoaXN0b3JpY2FsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4tcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLXVzLWNvbG9yZWQtdHJvb3AtZWZmb3J0cy9cIiwgaW1nOiBcIi4uL2ltYWdlcy9mcmFua2xpbkhvbWVwYWdlLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBwYXN0b3JzIHByb3Bvc2UgaGlzdG9yaWMgbWFya2VycyBkZXRhaWxpbmcgc2xhdmUgYXVjdGlvbnMsIEFmcmljYW4tQW1lcmljYW4gQ2l2aWwgV2FyIGVmZm9ydHNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA4LzE0L2ZyYW5rbGluLWNvbmZlZGVyYXRlLW1vbnVtZW50LXdpbGxpYW1zb24tY291bnR5LWZhaXRoLWxlYWRlcnMvOTkzMTQ0MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3Rlbm5lc3NlYW4uanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgVGVubmVzc2VhblwiLCBjb250ZW50OiBcIkZyYW5rbGluIGZhaXRoIGxlYWRlcnMgd2FudCBtYXJrZXJzIG5leHQgdG8gQ29uZmVkZXJhdGUgbW9udW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlXzBhMDc1NmI2LWEwMTYtMTFlOC05NTA0LThmZThlYjFiNjc3ZC5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvbkhlcmFsZC5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiVGhyZWUgcHJlYWNoZXJzIGFuZCBhIGhpc3RvcmlhbiB0ZWxsICdmdWxsZXIgc3RvcnknIGJ5IHByb3Bvc2luZyBDaXZpbCBXYXIgbW9udW1lbnQsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL2ZyYW5rbGluLXBhc3RvcnMtcHJvcG9zZS1oaXN0b3JpYy1tYXJrZXJzLWRldGFpbGluZy1zbGF2ZS1hdWN0aW9ucy11cy1jb2xvcmVkLXRyb29wLWVmZm9ydHMvXCIsIGltZzogXCIuLi9pbWFnZXMvYnJlbnR3b29kSG9tZXBhZ2UuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBwYXN0b3JzIHByb3Bvc2UgaGlzdG9yaWMgbWFya2VycyBkZXRhaWxpbmcgc2xhdmUgYXVjdGlvbnMsIEFmcmljYW4tQW1lcmljYW4gQ2l2aWwgV2FyIGVmZm9ydHNcIn0sXG5dXG5cbmNvbnN0IE1lZGlhID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbmV3c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBuZXdzLmZvckVhY2goc3RvcnkgPT4ge1xuICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19zdG9yeVwiKVxuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld3NfbGlua1wiKVxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHN0b3J5LmhyZWYpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpXG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19pbWFnZVwiKVxuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHN0b3J5LmltZylcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIGRhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfZGF0ZVwiKVxuICAgICAgZGF0ZS5pbm5lckhUTUwgPSBzdG9yeS5kYXRlXG4gICAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19zb3VyY2VcIilcbiAgICAgIHNvdXJjZS5pbm5lckhUTUwgPSBzdG9yeS5zb3VyY2VcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfY29udGVudFwiKVxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBzdG9yeS5jb250ZW50XG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgbGluay5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgbGluay5hcHBlbmRDaGlsZChzb3VyY2UpXG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBuZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgIH0pXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobmV3c1NlY3Rpb24pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWEiLCJpbXBvcnQgVVNDVCBmcm9tIFwiLi91c2N0XCJcbmltcG9ydCBDb3VydGhvdXNlIGZyb20gXCIuL2NvdXJ0aG91c2VcIlxuaW1wb3J0IFJpb3QgZnJvbSBcIi4vcmlvdFwiXG5pbXBvcnQgUmVjb25zdHJ1Y3Rpb24gZnJvbSBcIi4vcmVjb25zdHJ1Y3Rpb25cIlxuaW1wb3J0IFN0YXR1ZSBmcm9tIFwiLi9zdGF0dWVcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCJcbmltcG9ydCBEb25hdGUgZnJvbSBcIi4vZG9uYXRlXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxuXG5sZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5hdmJhclwiKVxuXG5cbmNvbnN0IG5hdkJhciA9IHtcblxuICBldmVudExpc3RlbmVycyhldmVudCkge1xuICAgIGxldCBuZXdQYWdlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHN3aXRjaChuZXdQYWdlKSB7XG4gICAgICBjYXNlIFwidXNjdFwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBVU0NULm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb3VydGhvdXNlXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIENvdXJ0aG91c2UubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpb3RcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmlvdC5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVjb25zdHJ1Y3Rpb25cIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmVjb25zdHJ1Y3Rpb24ubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXR1ZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBTdGF0dWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGlhXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIE1lZGlhLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb25hdGVcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgRG9uYXRlLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIEhvbWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1hcmtlcnNcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gIH0sXG5cbiAgbWFrZU1hcmtlcnModmFsdWUsIHRleHQpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLmV2ZW50TGlzdGVuZXJzKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSlcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJzXCIpXG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHRcbiAgICByZXR1cm4gYnRuXG4gIH0sXG5cbiAgbWFrZUJ0bih2YWx1ZSwgdGV4dCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuZXZlbnRMaXN0ZW5lcnMpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIilcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBidG5cbiAgfSxcblxuICBsb2FkTmF2YmFyKCkge1xuICAgIGxldCBlbGVtZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblRpdGxlXCIpXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRlbGxpbmcgYSBGVUxMRVIgU1RPUlkgb2YgRnJhbmtsaW5cIlxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHN1YkhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJUaXRsZVwiKVxuICAgIHN1YkhlYWRpbmcuaW5uZXJUZXh0ID0gXCJMZWFybmluZyBGcm9tIE91ciBQYXN0IFRvIFJlY29uY2lsZSBPdXIgRnV0dXJlXCJcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nXCIpXG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lX21lbnVcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiaG9tZVwiLCBcIkhvbWUgUGFnZVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2Vyc19tZW51XCIpXG4gICAgbGV0IG1hcmtlcnMgPSBuYXZCYXIubWFrZUJ0bihcIm1hcmtlcnNcIiwgXCJNZW51XCIpXG4gICAgbWFya2Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk1hcmtlcnNcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG1hcmtlcnMpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZU1hcmtlcnMoXCJ1c2N0XCIsIFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wc1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcImNvdXJ0aG91c2VcIiwgXCJDb3VydGhvdXNlIC8gTWFya2V0IEhvdXNlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwicmlvdFwiLCBcIjE4NjcgUmlvdFwiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInJlY29uc3RydWN0aW9uXCIsIFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZWRpYV9tZW51XCIpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcIm1lZGlhXCIsIFwiTmV3cyBNZWRpYVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChlbGVtZW50SG9sZGVyKVxuICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gIH0sXG5cbiAgaGlkZU1hcmtlcnMoKSB7XG4gICAgbGV0IE1hcmtlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcmtlcnNcIilcbiAgICBNYXJrZXJzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuaGlkZU1hcmtlcnMpXG4gICAgTWFya2Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuaW5uZXJIVE1MID0gXCJNZW51XCJcbiAgICAkKFwiI01hcmtlcnNcIikuc2hvdygpXG4gICAgJChcIi5tYXJrZXJzXCIpLmhpZGUoKVxuICB9LFxuXG4gIHNob3dNYXJrZXJzKCkge1xuICAgIGxldCBNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJrZXJzXCIpXG4gICAgTWFya2Vycy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5oaWRlTWFya2VycylcbiAgICBNYXJrZXJzLmlubmVySFRNTCA9IFwiSGlkZSBNZW51XCJcbiAgICAkKFwiLm1hcmtlcnNcIikuc2hvdygpXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuXG4gICAgLy8gPHAgaWQ9XCJsZWZ0SGVhZGluZ1wiPlNlZWtpbmcgVG8gVGVsbCBBICZuYnNwPC9wPlxuICAgIC8vIDxwIGlkPVwiYmlnSGVhZGluZ1wiPkZ1bGxlciBTdG9yeTwvcD5cbiAgICAvLyA8cCBpZD1cInJpZ2h0SGVhZGluZ1wiPiZuYnNwIE9mIEZyYW5rbGluPC9wPlxuICAgIC8vIDxwIGlkPVwidGFnSGVhZGluZ1wiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L3A+IiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJlY29uc3RydWN0aW9uID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlclN0b3J5UGxhcXVlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiSGlzdG9yaWNhbCBQbGFxdWVcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblBhZ2VQaWNcIilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkZvbGxvd2luZyB0aGUgQ2l2aWwgV2FyIHRoZSAxM3RoLCAxNHRoLCBhbmQgMTV0aCBBbWVuZG1lbnRzIHdlcmUgcGFzc2VkIGFuZCByYXRpZmllZC4gSW4gMTg3NyBSZWNvbnN0cnVjdGlvbiBlbmRlZCBhbmQgdGhlIEppbSBDcm93IEVyYSBzb29uIGJlZ2FuLiBJdCB3YXMgZHVyaW5nIHRoaXMgdGltZSB0aGF0IHNlcGFyYXRlIHJlc3Ryb29tcyBhbmQgc2VwYXJhdGUgd2F0ZXIgZm91bnRhaW5zIHdlcmUgaW4gRnJhbmtsaW4uXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29uc3RydWN0aW9uIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJpb3QgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluUGFnZVBpY1wiKVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCIxODY3IFJpb3RcIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJPbiBKdWx5IDYsIDE4NjcsIGFmdGVyIGEgZGVsYXllZCBKdWx5IDR0aCBwYXJhZGUgYW5kIHBvbGl0aWNhbCBzcGVlY2hlcywgYSByYWNlIHJpb3QgYnJva2Ugb3V0IG9uIHRoZSBzcXVhcmUgaW5qdXJpbmcgc2V2ZXJhbCBwZW9wbGUgYW5kIGtpbGxpbmcgb25lIHBlcnNvbi5cIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlvdCIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxubGV0IGltYWdlcyA9IFtcIi4uL2ltYWdlcy9zdGF0dWUuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTEuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTIuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTMuSlBHXCJdXG5cblxuY29uc3QgU3RhdHVlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBpbWFnZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgIHBob3RvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhdHVlX2ltYWdlXCIpXG4gICAgICBwaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaXRlbSlcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHBob3RvKVxuICAgIH0pXG4gICAgbGV0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBtYWluVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIG1haW5UZXh0LmlubmVySFRNTCA9IFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wcyBTdGF0dWVcIlxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1haW5UZXh0KVxuICAgIGxldCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgc3ViVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICBzdWJUaXRsZS5pbm5lckhUTUwgPSBcIlRoZSB1bHRpbWF0ZSBnb2FsIG9mIHRoZSDigJxGdWxsZXIgU3RvcnnigJ0gaXMgdG8gZXJlY3QgYSBzdGF0dWUgb2YgYSBVU0NUIFNvbGRpZXIuIDxicj48YnI+VGhlIGdvYWwgaXMgZm9yIHRoaXMgc29sZGllciB0byBiZSBwbGFjZWQgaW5zaWRlIHRoZSBDaXR5IExpbWl0cy48YnI+PGJyPlRoZSBleGFjdCBsb2NhdGlvbiBoYXMgeWV0IHRvIGJlIGRldGVybWluZWQuXCJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdWJUaXRsZSlcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChmcmFnbWVudClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dWUiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgVVNDVCA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5QYWdlUGljXCIpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHNcIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJBcm91bmQgMzAwIFdpbGxpYW1zb24gQ291bnR5IHJlc2lkZW50cywgd2hvIHdlcmUgZWl0aGVyIGZyZWVkIHNsYXZlcyBvciBlc2NhcGVkIHNsYXZlcywgc2VydmVkIGluIHRoZSBVbmlvbiBBcm15IGR1cmluZyB0aGUgQ2l2aWwgV2FyLjxicj48YnI+VGhlaXIgc3RvcnkgaXMganVzdCBub3cgYmVpbmcgdG9sZC48YnI+PGJyPlRoZWlyIHN0b3J5IG5lZWRzIHRvIGJlIGhlYXJkLlwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwOi8vd3d3LnNsYXZlc3Rvc29sZGllcnMuY29tXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvc2xhdmVUb1NvbGRpZXJzLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2xhdmUgVG8gU29sZGllcnMgUGljXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5QYWdlUGljXCIpXG4gICAgcGFnZUxpbmsuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlua1RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiQ2xpY2sgaGVyZSB0byBsZWFybiBtb3JlLlwiXG4gICAgcGFnZUxpbmsuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChwYWdlTGluaylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVU0NUIl19
