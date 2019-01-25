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
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Courthouse & Market House";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Throughout the 1800s, a “market house” stood close to the courthouse.” For nearly 50 years, human beings were sold and traded at this “market house.” This slave market included the sale of women and children.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
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
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Donate to the Fuller Story";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerDonate.jpg");
    temp.setAttribute("alt", "Donate");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "If you would like to support this effort to tell the Fuller Story of Franklin, please click on the link to give online. All donations are tax deductible. When making a donation, please email Kevin Riggs at kevin@franklincommunitychurch.org and reference that the donation is for the Fuller Story project so we can ensure it is applied in the correct way. You can choose either Franklin Community Church or Franklin Community Development for the organization, just make sure to also send the email to Kevin.";
    div.appendChild(temp);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "https://franklincommunitychurch.org/giving/");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
    temp = document.createElement("p");
    temp.setAttribute("id", "donate_text");
    temp.innerHTML = "Donate Now";
    pageLink.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
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
      date.innerHTML = `${story.date} - ${story.source}`;
      let content = document.createElement("p");
      content.setAttribute("class", "new_content");
      content.innerHTML = story.content;
      link.appendChild(image);
      link.appendChild(date);
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
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Reconstruction & Jim Crow";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Following the Civil War the 13th, 14th, and 15th Amendments were passed and ratified. In 1877 Reconstruction ended and the Jim Crow Era soon began. It was during this time that separate restrooms and separate water fountains were in Franklin.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
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
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "1867 Riot";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "On July 6, 1867, after a delayed July 4th parade and political speeches, a race riot broke out on the square injuring several people and killing one person.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
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
    let mainText = document.createElement("p");
    mainText.setAttribute("id", "main_text");
    mainText.innerHTML = "United States Colored Troops Statue";
    fragment.appendChild(mainText);
    images.forEach(item => {
      let photo = document.createElement("img");
      photo.setAttribute("class", "statue_image");
      photo.setAttribute("src", item);
      fragment.appendChild(photo);
    });
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
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "United States Colored Troops";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "http://www.slavestosoldiers.com");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/slaveToSoldiers.jpg");
    temp.setAttribute("alt", "Slave To Soldiers Pic");
    temp.setAttribute("id", "USCTPic");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCLFlBQTlCO0FBQ0EsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLElBQUEsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsaUJBQTFCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElB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QixpQ0FBOUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCLE1BQS9CO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixRQUF0QixFQUFnQyxPQUFoQztBQUNBLElBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVA7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLDhCQUF6QjtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsdUJBQXpCO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixJQUFsQixFQUF3QixTQUF4QjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFQO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixVQUEzQjtBQUNBLElBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsMkJBQWpCO0FBQ0EsSUFBQSxRQUFRLENBQUMsV0FBVCxDQUFxQixJQUFyQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsUUFBeEI7QUFDRDs7QUF0Q1UsQ0FBYjtlQXlDZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IENvdXJ0aG91c2UgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJDb3VydGhvdXNlICYgTWFya2V0IEhvdXNlXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJUaHJvdWdob3V0IHRoZSAxODAwcywgYSDigJxtYXJrZXQgaG91c2XigJ0gc3Rvb2QgY2xvc2UgdG8gdGhlIGNvdXJ0aG91c2Uu4oCdIEZvciBuZWFybHkgNTAgeWVhcnMsIGh1bWFuIGJlaW5ncyB3ZXJlIHNvbGQgYW5kIHRyYWRlZCBhdCB0aGlzIOKAnG1hcmtldCBob3VzZS7igJ0gVGhpcyBzbGF2ZSBtYXJrZXQgaW5jbHVkZWQgdGhlIHNhbGUgb2Ygd29tZW4gYW5kIGNoaWxkcmVuLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VydGhvdXNlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IERvbmF0ZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkRvbmF0ZSB0byB0aGUgRnVsbGVyIFN0b3J5XCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJEb25hdGUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJEb25hdGVcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyUGFnZVBpY1wiKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIklmIHlvdSB3b3VsZCBsaWtlIHRvIHN1cHBvcnQgdGhpcyBlZmZvcnQgdG8gdGVsbCB0aGUgRnVsbGVyIFN0b3J5IG9mIEZyYW5rbGluLCBwbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgdG8gZ2l2ZSBvbmxpbmUuIEFsbCBkb25hdGlvbnMgYXJlIHRheCBkZWR1Y3RpYmxlLiBXaGVuIG1ha2luZyBhIGRvbmF0aW9uLCBwbGVhc2UgZW1haWwgS2V2aW4gUmlnZ3MgYXQga2V2aW5AZnJhbmtsaW5jb21tdW5pdHljaHVyY2gub3JnIGFuZCByZWZlcmVuY2UgdGhhdCB0aGUgZG9uYXRpb24gaXMgZm9yIHRoZSBGdWxsZXIgU3RvcnkgcHJvamVjdCBzbyB3ZSBjYW4gZW5zdXJlIGl0IGlzIGFwcGxpZWQgaW4gdGhlIGNvcnJlY3Qgd2F5LiBZb3UgY2FuIGNob29zZSBlaXRoZXIgRnJhbmtsaW4gQ29tbXVuaXR5IENodXJjaCBvciBGcmFua2xpbiBDb21tdW5pdHkgRGV2ZWxvcG1lbnQgZm9yIHRoZSBvcmdhbml6YXRpb24sIGp1c3QgbWFrZSBzdXJlIHRvIGFsc28gc2VuZCB0aGUgZW1haWwgdG8gS2V2aW4uXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2ZyYW5rbGluY29tbXVuaXR5Y2h1cmNoLm9yZy9naXZpbmcvXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG9uYXRlX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRG9uYXRlIE5vd1wiXG4gICAgcGFnZUxpbmsuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBhZ2VMaW5rKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbmF0ZSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBIb21lID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz1cImltYWdlcy9zdGF0dWUuSlBHXCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblBhZ2VUaXRsZVwiPlRoZSBmb2xsb3dpbmcgcmVzb2x1dGlvbiB3YXMgcGFzc2VkIG9uIFNlcHRlbWJlciAyNSwgMjAxOC4gV2UgdGhhbmsgZXZlcnlvbmUgZm9yIHRoZWlyIHN1cHBvcnQgYW5kIEdvZCBmb3IgSGlzIGZhdm9yLjwvcD5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQtYXRsMy0xLnh4LmZiY2RuLm5ldC92L3QxLjAtOS80MjYyNTcyNl8xMDIxMjMxMDcxNTY5ODMwMl81NDI3NzE0MDY3OTA3MjE1MzZfby5qcGc/X25jX2NhdD0xMDMmb2g9NTEwYjZhOTI2NzY0YjEzOWIwNGZmZjJlNzBmNTdiMjImb2U9NUM1OTRCQThcIiBjbGFzcz1cIm1haW5QYWdlUGljXCI+XG4gICAgPHAgY2xhc3M9XCJtYWluVGV4dFwiPkFmdGVyIHRoZSB0cmFnaWMgZXZlbnRzIGluIENoYXJsb3R0ZXN2aWxsZSwgVkEgbGFzdCBBdWd1c3QsIGNvbnZlcnNhdGlvbnMgc3RhcnRlZCBoYXBwZW5pbmcgaW4gRnJhbmtsaW4gYWJvdXQgaG93IG91ciBjaXR5IHdvdWxkIFxcKG9yIHdvdWxkIG5vdCkgcmVhY3QgaWYgc29tZXRoaW5nIHNpbWlsYXIgaGFwcGVuZWQgaGVyZS4gSW4gYSBsb3Qgb2Ygd2F5cywgb3VyIGNpdHkgaXMgbGlrZSBDaGFybG90dGVzdmlsbGUuIFRoZXNlIGRpc2N1c3Npb25zIGxlZCB0byB0aGUgdGhvdWdodCB0aGF0IGl0IHdvdWxkIGJlIGJldHRlciB0byBiZSDigJxhY3Rpb25hcnnigJ0gaW5zdGVhZCBvZiDigJxyZWFjdGlvbmFyeS7igJ0gVGhlIHJlc3VsdCBvZiB0aGVzZSBjb252ZXJzYXRpb25zIGxlZCB0byB0aGUgaWRlYSB0aGF0IGluc3RlYWQgb2YgdGFraW5nIGRvd24gaGlzdG9yaWNhbCBtYXJrZXJzLCB3aGF0IGlmIHdlIGFkZGVkIHRvIHRoZW0gYW5kIHRvbGQgYSAgICAg4oCcZnVsbGVyIHN0b3J5LuKAnSBGdXJ0aGVyLCBpdCB3YXMgYmVsaWV2ZWQgdGhhdCB0aGUgQ0hVUkNIIGluIEZyYW5rbGluIHNob3VsZCBsZWFkIHRoaXMgZWZmb3J0Ljxicj48YnI+T3ZlciB0aGUgY291cnNlIG9mIHRoaXMgcGFzdCB5ZWFyIHdlIGhhdmUgaW5pdGlhdGVkIGZ1cnRoZXIgZGlhbG9ndWUgYmV0d2Vlbjxicj48YnI+4oCi4oCmcGFzdG9ycyBhbmQgY2h1cmNoIGxlYWRlcnMuPGJyPuKAouKApnRoZSBoaXN0b3JpY2FsIGNvbW11bml0eSBpbiBGcmFua2xpbiBhbmQgV2lsbGlhbXNvbiBDb3VudHkuPGJyPuKAouKApnRoZSBjaXR5IGFkbWluaXN0cmF0b3IsIGNpdHkgbWF5b3IgYW5kIGNvdW50eSBtYXlvci48YnI+4oCi4oCmdGhlIGRvd250b3duIGJ1c2luZXNzIGNvbW11bml0eS48YnI+4oCi4oCmYW5kIGEgaG9zdCBvZiBpbmRpdmlkdWFscy5cbiAgICA8YnI+PGJyPjxicj48YnI+PGJyPlRpbWVsaW5lIDxicj48YnI+PGJyPlBoYXNlIDEgKGZvdXIgaGlzdG9yaWNhbCBtYXJrZXJzIGFyb3VuZCB0aGUgZG93bnRvd24gc3F1YXJlKSDigJMgQSBkZWRpY2F0aW9uIG9mIHRoZXNlIG1hcmtlcnMgb24gTW9uZGF5LCBKYW51YXJ5IDE0LCAyMDE5IGR1cmluZyB0aGUgQ0hVUkNIRVPigJkgYW5udWFsIE1hcnRpbiBMdXRoZXIgS2luZyBEYXkgQ2VsZWJyYXRpb24uIDxicj48YnI+VGhlIGZvdXIgbWFya2VycyBhcmU6PGJyPjxicj7igKJcdFVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHM8YnI+4oCiXHQxODY3IERvd250b3duIFJpb3Q8YnI+4oCiXHRDb3VydGhvdXNlIGFuZCBNYXJrZXQgSG91c2U8YnI+4oCiXHRSZWNvbnN0cnVjdGlvbiBhbmQgSmltIENyb3c8YnI+PGJyPjxicj5QaGFzZSAyIOKAkyBFcmVjdCBhIHN0YXR1ZSBvZiBhIFVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcCBzb2xkaWVyIGF0IGEgeWV0IHRvIGJlIGRldGVybWluZWQgbG9jYXRpb24gaW5zaWRlIHRoZSBjaXR5IGxpbWl0cyBvZiBGcmFua2xpbi4gQSBkZWRpY2F0aW9uIG9mIHRoaXMgc3RhdHVlIG9uIE1vbmRheSwgSmFudWFyeSAxMywgMjAyMCBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPuKAoiBQcmVzZW50IOKAnEZ1bGxlciBTdG9yeeKAnSBhdCBCT01BIFdvcmtzaG9wIG9uIFR1ZXNkYXksIEF1Z3VzdCAxNCwgMjAxOC4gPGJyPuKAolx0UHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gdG8gQ291bnR5IENvbW1pc3Npb25lcnMgb24gTW9uZGF5LCBTZXB0ZW1iZXIgMTAsIDIwMTguPGJyPuKAoiBBbm5vdW5jZSBmdW5kcmFpc2VyIGZvciB0aGUgVVNDVCBzdGF0dWUgU2VwdGVtYmVyIC8gT2N0b2JlciAyMDE4Ljxicj7igKIgQSBmYWxsIOKAnHJldml2YWzigJ0gd2l0aCB0aGUgQ0hVUkNIRVMgaW4gRnJhbmtsaW4gLyBXaWxsaWFtc29uIENvdW50eS48YnI+PGJyPjxicj48YnI+PGJyPlRoZSBBc2sgPGJyPjxicj5XZSBhcmUgYXNraW5nIHlvdSwgdGhlIGNpdHkgbGVhZGVycywgdG8gbGVuZCB5b3VyIHN1cHBvcnQgYmVoaW5kIG91ciBlZmZvcnRzIGFuZCB0byBoZWxwIHVzIHdpdGggdGhlIGxvY2F0aW9ucyBvZiB0aGUgbWFya2VycyBhbmQgdGhlIHN0YXR1ZS4gV2UgYXJlIG5vdCBhc2tpbmcgdGhlIGNpdHkgZm9yIGFueSBtb25leS4gQWxsIGZ1bmRzIHdpbGwgYmUgcmFpc2VkIHRocm91Z2ggcHJpdmF0ZSBkb25hdGlvbnMuPC9wPlxuICAgICAgICAgICAgYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgbmF2QmFyIGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5uYXZCYXIubG9hZE5hdmJhcigpXG5Ib21lLm1haW4oKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuY29uc3QgbmV3cyA9IFtcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfYTA0N2Y5ZGUtMWVmZS0xMWU5LWI5MTMtZjM0YzhjNTNiMzM0Lmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9hbGRlcm1hbi5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIzLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkFsZGVybWVuIHNob3cgc3Ryb25nIG9waW5pb25zIG9uICdGdWxsZXIgU3RvcnknIG1hcmtlciBwbGFjZW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd2lsbGlhbXNvbnNvdXJjZS5jb20vbWFydGluLWx1dGhlci1raW5nLWpyLWNlbGVicmF0aW9uLXRlbGxzLWZ1bGxlci1zdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uU291cmNlLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjIsIDIwMTlcIiwgc291cmNlOiBcIldpbGxpYW1zb24gU291cmNlXCIsIGNvbnRlbnQ6IFwiTWFydGluIEx1dGhlciBLaW5nIEpyLiBDZWxlYnJhdGlvbiBTaGFyZXMg4oCcRnVsbGVyIFN0b3J54oCdXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV80MDI2ZDBhMC0xZGM1LTExZTktOTIyNy0yYjk4OTZmNTdmNzAuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL21say5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIxLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIk1hcnRpbiBMdXRoZXIgS2luZyBKci7igJlzIGRyZWFtIHJlYWxpemVkIGluICdGdWxsZXIgU3RvcnknIGR1cmluZyBjZWxlYnJhdGlvbnMgTW9uZGF5XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9zdG9uZS1vZi1ob3BlLXRoZW1lLWluc3BpcmVzLW1say1kYXktYXR0ZW5kZWVzLXRvLWNvbnNpZGVyLWZ1bGxlci1zdG9yeS1vZi1oaXN0b3J5L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3N0b25lLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjEsIDIwMTlcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIuKAmFN0b25lIG9mIEhvcGXigJkgdGhlbWUgaW5zcGlyZXMgTUxLIERheSBhdHRlbmRlZXMgdG8gY29uc2lkZXIgZnVsbGVyIHN0b3J5IG9mIGhpc3RvcnlcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL2NlcmVtb255LWZvci1tbGstZGF5LWluLWZyYW5rbGluLXRvLWluY2x1ZGUtdXBkYXRlLW9uLWZ1bGxlci1zdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9jZXJlbW9ueS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDE3LCAyMDE5XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCLigJhDZXJlbW9ueSBmb3IgTUxLIERheSBpbiBGcmFua2xpbiB0byBpbmNsdWRlIHVwZGF0ZSBvbiDigJhmdWxsZXIgc3RvcnnigJlcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2IwMTM2OTlhLWMxMmQtMTFlOC1hZTAyLTQ3NGFjOGU5OWU3Yi5odG1sP3V0bV9tZWRpdW09c29jaWFsJnV0bV9zb3VyY2U9ZmFjZWJvb2smdXRtX2NhbXBhaWduPXVzZXItc2hhcmVcIiwgaW1nOiBcIi4uL2ltYWdlcy93aDkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gQk9NQSBhcHByb3ZlcyAnVGhlIEZ1bGxlciBTdG9yeScgcHJvcG9zYWwgdG8gaW5zdGFsbCBBZnJpY2FuLUFtZXJpY2FuIGhpc3RvcmljYWwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDkvMjUvZnJhbmtsaW4tc3F1YXJlLWhpc3RvcmljLW1hcmtlcnMtY29uZmVkZXJhdGUtc3RhdHV0ZS8xNDEzMjQzMDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3RuOTI1LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNSwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJGcmFua2xpbiB2b3RlcyB0byBzdXBwb3J0IEFmcmljYW4tQW1lcmljYW4gaGlzdG9yaWMgbWFya2VycyBuZWFyIENvbmZlZGVyYXRlIG1vbnVtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9yZXNvbHV0aW9uLXRvLXN1cHBvcnQtZnVsbGVyLXN0b3J5LWhpc3RvcmljLW1hcmtlcnMtdW5hbmltb3VzbHktYXBwcm92ZWQtd2lsbC1wbGFjZS1vbi1wdWJsaWMtbGFuZC1pbi10b3duLXNxdWFyZS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9iaDkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIlJlc29sdXRpb24gdG8gc3VwcG9ydCBcXFwiRnVsbGVyIFN0b3J5XFxcIiBoaXN0b3JpYyBtYXJrZXJzIHVuYW5pbW91c2x5IGFwcHJvdmVkLCB3aWxsIHBsYWNlIG9uIHB1YmxpYyBsYW5kIGluIHRvd24gc3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWdyb3Vwcy1pbmRpdmlkdWFscy13cml0ZS1sZXR0ZXJzLW9mLXN1cHBvcnQtZm9yLWZ1bGxlci1zdG9yeS1pbml0aWF0aXZlLXdpbGwtcHJlc2VudC10by1ib2FyZC1vZi1tYXlvci1hbmQtYWxkZXJtZW4tdHVlc2RheS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9maDkyNS5qcGVnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI0LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBncm91cHMsIGluZGl2aWR1YWxzIHdyaXRlIGxldHRlcnMgb2Ygc3VwcG9ydCBmb3IgXFxcIkZ1bGxlciBTdG9yeVxcXCIgaW5pdGlhdGl2ZSwgd2lsbCBwcmVzZW50IHRvIEJvYXJkIG9mIE1heW9yIGFuZCBBbGRlcm1lbiBUdWVzZGF5XCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL29waW5pb24vYXJ0aWNsZV9iMWI0NWQ5NC1iNmRlLTExZTgtOGZmNy0zYjUyZjQ1M2I2MDMuaHRtbCNjb21tZW50c1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3dpbGxpYW1zb25jb21tZW50YXJ5LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAxMiwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJDb21tZW50YXJ5OiBHb29kIGlkZWEgZm9yIHNsYXZlcnkgcGxhcXVlcyBzdHltaWVkIGJ5IGdyb3VwJ3MgcmVzaXN0YW5jZSB0byBpdFwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9vcGluaW9uL2FydGljbGVfMjBjZmUxZTItYjZhMC0xMWU4LTg0YmQtY2I5Y2Y0OTgxN2RjLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uTGV0dGVyLmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAxMiwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJMZXR0ZXIgdG8gRWRpdG9yOiBNb3ZpbmcgZm9yd2FyZCB3aXRoICdUaGUgRnVsbGVyIFN0b3J5JyBwcmVmZXJyZWQgYnkgcGFzdG9yc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1pbnRlbmRzLXRvLWdvLXRvLWNvdXJ0LXRvLWNsYXJpZnktb3duZXJzaGlwLW9mLXB1YmxpYy1zcXVhcmUvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czUuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI5LCAyMDE4XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIEludGVuZHMgdG8gZ28gdG8gY291cnQgdG8gY2xhcmlmeSBvd25lcnNoaXAgb2YgUHVibGljIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfYjFhZTliZTAtYWIxYS0xMWU4LWEzNzYtMDcyN2FjZGVhMWYzLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzOC5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiVURDIHdhbnRzIG5ldyBwbGFjZW1lbnQgZm9yIHByb3Bvc2VkIENpdmlsIFdhciBtYXJrZXJzOyBCT01BIGRlZmVycyBkZWNpc2lvblwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMjgvZGF1Z2h0ZXJzLWNvbmZlZGVyYWN5LWZyYW5rbGluLXNxdWFyZS13aWxsaWFtc29uLWNvdW50eS8xMTI2Njg1MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M3LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJEYXVnaHRlcnMgb2YgQ29uZmVkZXJhY3kgd2FudCBzYXkgaW4gQWZyaWNhbi1BbWVyaWNhbiBoaXN0b3J5IG1hcmtlcnMgb24gRnJhbmtsaW4gU3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy50ZW5uZXNzZWFuLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3dpbGxpYW1zb24vMjAxOC8wOC8yOC9mcmFua2xpbi1jb25mZWRlcmF0ZS1tb251bWVudC1wdWJsaWMtc3F1YXJlLzExMjg0NTcwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czkuanBlZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJGcmFua2xpbiBmaWxlcyBzdWl0IHRvIGZpZ3VyZSBvdXQgd2hvIG93bnMgbGFuZCBvbiBwdWJsaWMgc3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWFsZGVybWVuLXZvdGUtdG8tc2xvdy1lZmZvcnQtdG8tYWRkLWFmcmljYW4tYW1lcmljYW4taGlzdG9yeS1tYXJrZXJzLW9uLXRoZS1wdWJsaWMtc3F1YXJlL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M2LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJBZnJpY2FuIEFtZXJpY2FuIGhpc3RvcnkgbWFya2VycyBvbiB0aGUgUHVibGljIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cuc3RhcmRlbS5jb20vbmV3cy9uYXRpb25hbC9ibGFjay1wYXN0b3JzLWNvbmZlZGVyYXRlLWRlc2NlbmRhbnRzLXNoYXJlLWNpdmlsLXdhci1oaXN0b3J5LWluLXRlbm5lc3NlZS9hcnRpY2xlXzIwZGNhYzVmLWUxZDgtNWVjZS1iOGMyLTE4Mjk1MzQyY2UzMy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvdGhlU3Rhci5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjQsIDIwMThcIiwgc291cmNlOiBcIlRoZSBTdGFyIERlbW9jcmF0XCIsIGNvbnRlbnQ6IFwiQmxhY2sgcGFzdG9ycywgQ29uZmVkZXJhdGUgZGVzY2VuZGFudHMgc2hhcmUgQ2l2aWwgV2FyIGhpc3RvcnkgaW4gVGVubmVzc2VlIHRvd25cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3Lndrcm4uY29tL25ld3MvZ3JvdXAtb2YtZnJhbmtsaW4tcGFzdG9ycy1ob3BlLXRvLWFkZC1tYXJrZXJzLXRvLWNvbmZlZGVyYXRlLW1vbnVtZW50XzIwMTgwODIyMTIwMzIzLzEzODgwMzY2NzZcIiwgaW1nOiBcIi4uL2ltYWdlcy93a3JuVmlkZW8uanBnXCIsIGRhdGU6IFwiQXVndXN0IDIyLCAyMDE4XCIsIHNvdXJjZTogXCJXS1JOXCIsIGNvbnRlbnQ6IFwiR3JvdXAgb2YgRnJhbmtsaW4gcGFzdG9ycyBob3BlIHRvIGFkZCBtYXJrZXJzIHRvIENvbmZlZGVyYXRlIG1vbnVtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2Npdmlsd2FydGFsay5jb20vdGhyZWFkcy9wYXN0b3JzLXByb3Bvc2UtaGlzdG9yaWMtbWFya2Vycy1kZXRhaWxpbmctc2xhdmUtYXVjdGlvbnMtYW5kLWtlZXBpbmctY29uZmVkZXJhdGUtc3RhdHVlLXRvby4xNDkwNDcvXCIsIGltZzogXCIuLi9pbWFnZXMvY2l2aWxXYXJUYWxrcy5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTYsIDIwMThcIiwgc291cmNlOiBcIkNpdmlsIFdhciBUYWxrXCIsIGNvbnRlbnQ6IFwiUGFzdG9ycyBQcm9wb3NlIEhpc3RvcmljIE1hcmtlcnMgRGV0YWlsaW5nIFNsYXZlIEF1Y3Rpb25zIGFuZCBLZWVwaW5nIENvbmZlZGVyYXRlIFN0YXR1ZSBUb29cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LndzbXYuY29tL25ld3MvcGFzdG9ycy1wdXNoLWZvci1kaXZlcnNpdHktaW4tZnJhbmtsaW4taGlzdG9yaWNhbC1tYXJrZXJzL2FydGljbGVfNWMzOTE1ZjgtYTBlMC0xMWU4LThkMmUtOWIxZjM2ZjllZDY5Lmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93c212LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNSwgMjAxOFwiLCBzb3VyY2U6IFwiV1NNVlwiLCBjb250ZW50OiBcIlBhc3RvcnMgcHVzaCBmb3IgZGl2ZXJzaXR5IGluIEZyYW5rbGluIGhpc3RvcmljYWwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1wYXN0b3JzLXByb3Bvc2UtaGlzdG9yaWMtbWFya2Vycy1kZXRhaWxpbmctc2xhdmUtYXVjdGlvbnMtdXMtY29sb3JlZC10cm9vcC1lZmZvcnRzL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2ZyYW5rbGluSG9tZXBhZ2UuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIHBhc3RvcnMgcHJvcG9zZSBoaXN0b3JpYyBtYXJrZXJzIGRldGFpbGluZyBzbGF2ZSBhdWN0aW9ucywgQWZyaWNhbi1BbWVyaWNhbiBDaXZpbCBXYXIgZWZmb3J0c1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMTQvZnJhbmtsaW4tY29uZmVkZXJhdGUtbW9udW1lbnQtd2lsbGlhbXNvbi1jb3VudHktZmFpdGgtbGVhZGVycy85OTMxNDQwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvdGVubmVzc2Vhbi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZmFpdGggbGVhZGVycyB3YW50IG1hcmtlcnMgbmV4dCB0byBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfMGEwNzU2YjYtYTAxNi0xMWU4LTk1MDQtOGZlOGViMWI2NzdkLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uSGVyYWxkLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJUaHJlZSBwcmVhY2hlcnMgYW5kIGEgaGlzdG9yaWFuIHRlbGwgJ2Z1bGxlciBzdG9yeScgYnkgcHJvcG9zaW5nIENpdmlsIFdhciBtb251bWVudCwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vZnJhbmtsaW4tcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLXVzLWNvbG9yZWQtdHJvb3AtZWZmb3J0cy9cIiwgaW1nOiBcIi4uL2ltYWdlcy9icmVudHdvb2RIb21lcGFnZS5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIHBhc3RvcnMgcHJvcG9zZSBoaXN0b3JpYyBtYXJrZXJzIGRldGFpbGluZyBzbGF2ZSBhdWN0aW9ucywgQWZyaWNhbi1BbWVyaWNhbiBDaXZpbCBXYXIgZWZmb3J0c1wifSxcbl1cblxuY29uc3QgTWVkaWEgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBuZXdzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIG5ld3MuZm9yRWFjaChzdG9yeSA9PiB7XG4gICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgICBhcnRpY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X3N0b3J5XCIpXG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3c19saW5rXCIpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc3RvcnkuaHJlZilcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X2ltYWdlXCIpXG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3RvcnkuaW1nKVxuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19kYXRlXCIpXG4gICAgICBkYXRlLmlubmVySFRNTCA9IGAke3N0b3J5LmRhdGV9IC0gJHtzdG9yeS5zb3VyY2V9YFxuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19jb250ZW50XCIpXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IHN0b3J5LmNvbnRlbnRcbiAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBuZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgIH0pXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobmV3c1NlY3Rpb24pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWEiLCJpbXBvcnQgVVNDVCBmcm9tIFwiLi91c2N0XCJcbmltcG9ydCBDb3VydGhvdXNlIGZyb20gXCIuL2NvdXJ0aG91c2VcIlxuaW1wb3J0IFJpb3QgZnJvbSBcIi4vcmlvdFwiXG5pbXBvcnQgUmVjb25zdHJ1Y3Rpb24gZnJvbSBcIi4vcmVjb25zdHJ1Y3Rpb25cIlxuaW1wb3J0IFN0YXR1ZSBmcm9tIFwiLi9zdGF0dWVcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCJcbmltcG9ydCBEb25hdGUgZnJvbSBcIi4vZG9uYXRlXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxuXG5sZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5hdmJhclwiKVxuXG5cbmNvbnN0IG5hdkJhciA9IHtcblxuICBldmVudExpc3RlbmVycyhldmVudCkge1xuICAgIGxldCBuZXdQYWdlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHN3aXRjaChuZXdQYWdlKSB7XG4gICAgICBjYXNlIFwidXNjdFwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBVU0NULm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb3VydGhvdXNlXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIENvdXJ0aG91c2UubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpb3RcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmlvdC5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVjb25zdHJ1Y3Rpb25cIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmVjb25zdHJ1Y3Rpb24ubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXR1ZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBTdGF0dWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGlhXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIE1lZGlhLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb25hdGVcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgRG9uYXRlLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIEhvbWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1hcmtlcnNcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gIH0sXG5cbiAgbWFrZU1hcmtlcnModmFsdWUsIHRleHQpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLmV2ZW50TGlzdGVuZXJzKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSlcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJzXCIpXG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHRcbiAgICByZXR1cm4gYnRuXG4gIH0sXG5cbiAgbWFrZUJ0bih2YWx1ZSwgdGV4dCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuZXZlbnRMaXN0ZW5lcnMpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIilcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBidG5cbiAgfSxcblxuICBsb2FkTmF2YmFyKCkge1xuICAgIGxldCBlbGVtZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblRpdGxlXCIpXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRlbGxpbmcgYSBGVUxMRVIgU1RPUlkgb2YgRnJhbmtsaW5cIlxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHN1YkhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJUaXRsZVwiKVxuICAgIHN1YkhlYWRpbmcuaW5uZXJUZXh0ID0gXCJMZWFybmluZyBGcm9tIE91ciBQYXN0IFRvIFJlY29uY2lsZSBPdXIgRnV0dXJlXCJcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nXCIpXG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lX21lbnVcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiaG9tZVwiLCBcIkhvbWUgUGFnZVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2Vyc19tZW51XCIpXG4gICAgbGV0IG1hcmtlcnMgPSBuYXZCYXIubWFrZUJ0bihcIm1hcmtlcnNcIiwgXCJNZW51XCIpXG4gICAgbWFya2Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk1hcmtlcnNcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG1hcmtlcnMpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZU1hcmtlcnMoXCJ1c2N0XCIsIFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wc1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcImNvdXJ0aG91c2VcIiwgXCJDb3VydGhvdXNlIC8gTWFya2V0IEhvdXNlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwicmlvdFwiLCBcIjE4NjcgUmlvdFwiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInJlY29uc3RydWN0aW9uXCIsIFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZWRpYV9tZW51XCIpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcIm1lZGlhXCIsIFwiTmV3cyBNZWRpYVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChlbGVtZW50SG9sZGVyKVxuICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gIH0sXG5cbiAgaGlkZU1hcmtlcnMoKSB7XG4gICAgbGV0IE1hcmtlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcmtlcnNcIilcbiAgICBNYXJrZXJzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuaGlkZU1hcmtlcnMpXG4gICAgTWFya2Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuaW5uZXJIVE1MID0gXCJNZW51XCJcbiAgICAkKFwiI01hcmtlcnNcIikuc2hvdygpXG4gICAgJChcIi5tYXJrZXJzXCIpLmhpZGUoKVxuICB9LFxuXG4gIHNob3dNYXJrZXJzKCkge1xuICAgIGxldCBNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJrZXJzXCIpXG4gICAgTWFya2Vycy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5oaWRlTWFya2VycylcbiAgICBNYXJrZXJzLmlubmVySFRNTCA9IFwiSGlkZSBNZW51XCJcbiAgICAkKFwiLm1hcmtlcnNcIikuc2hvdygpXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuXG4gICAgLy8gPHAgaWQ9XCJsZWZ0SGVhZGluZ1wiPlNlZWtpbmcgVG8gVGVsbCBBICZuYnNwPC9wPlxuICAgIC8vIDxwIGlkPVwiYmlnSGVhZGluZ1wiPkZ1bGxlciBTdG9yeTwvcD5cbiAgICAvLyA8cCBpZD1cInJpZ2h0SGVhZGluZ1wiPiZuYnNwIE9mIEZyYW5rbGluPC9wPlxuICAgIC8vIDxwIGlkPVwidGFnSGVhZGluZ1wiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L3A+IiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJlY29uc3RydWN0aW9uID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRm9sbG93aW5nIHRoZSBDaXZpbCBXYXIgdGhlIDEzdGgsIDE0dGgsIGFuZCAxNXRoIEFtZW5kbWVudHMgd2VyZSBwYXNzZWQgYW5kIHJhdGlmaWVkLiBJbiAxODc3IFJlY29uc3RydWN0aW9uIGVuZGVkIGFuZCB0aGUgSmltIENyb3cgRXJhIHNvb24gYmVnYW4uIEl0IHdhcyBkdXJpbmcgdGhpcyB0aW1lIHRoYXQgc2VwYXJhdGUgcmVzdHJvb21zIGFuZCBzZXBhcmF0ZSB3YXRlciBmb3VudGFpbnMgd2VyZSBpbiBGcmFua2xpbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb25zdHJ1Y3Rpb24iLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgUmlvdCA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIjE4NjcgUmlvdFwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiT24gSnVseSA2LCAxODY3LCBhZnRlciBhIGRlbGF5ZWQgSnVseSA0dGggcGFyYWRlIGFuZCBwb2xpdGljYWwgc3BlZWNoZXMsIGEgcmFjZSByaW90IGJyb2tlIG91dCBvbiB0aGUgc3F1YXJlIGluanVyaW5nIHNldmVyYWwgcGVvcGxlIGFuZCBraWxsaW5nIG9uZSBwZXJzb24uXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpb3QiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmxldCBpbWFnZXMgPSBbXCIuLi9pbWFnZXMvc3RhdHVlLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUxLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUyLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUzLkpQR1wiXVxuXG5cbmNvbnN0IFN0YXR1ZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBtYWluVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIG1haW5UZXh0LmlubmVySFRNTCA9IFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wcyBTdGF0dWVcIlxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1haW5UZXh0KVxuICAgIGltYWdlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgcGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGF0dWVfaW1hZ2VcIilcbiAgICAgIHBob3RvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGVtKVxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGhvdG8pXG4gICAgfSlcbiAgICBsZXQgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHN1YlRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgc3ViVGl0bGUuaW5uZXJIVE1MID0gXCJUaGUgdWx0aW1hdGUgZ29hbCBvZiB0aGUg4oCcRnVsbGVyIFN0b3J54oCdIGlzIHRvIGVyZWN0IGEgc3RhdHVlIG9mIGEgVVNDVCBTb2xkaWVyLiA8YnI+PGJyPlRoZSBnb2FsIGlzIGZvciB0aGlzIHNvbGRpZXIgdG8gYmUgcGxhY2VkIGluc2lkZSB0aGUgQ2l0eSBMaW1pdHMuPGJyPjxicj5UaGUgZXhhY3QgbG9jYXRpb24gaGFzIHlldCB0byBiZSBkZXRlcm1pbmVkLlwiXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFVTQ1QgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJBcm91bmQgMzAwIFdpbGxpYW1zb24gQ291bnR5IHJlc2lkZW50cywgd2hvIHdlcmUgZWl0aGVyIGZyZWVkIHNsYXZlcyBvciBlc2NhcGVkIHNsYXZlcywgc2VydmVkIGluIHRoZSBVbmlvbiBBcm15IGR1cmluZyB0aGUgQ2l2aWwgV2FyLjxicj48YnI+VGhlaXIgc3RvcnkgaXMganVzdCBub3cgYmVpbmcgdG9sZC48YnI+PGJyPlRoZWlyIHN0b3J5IG5lZWRzIHRvIGJlIGhlYXJkLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwOi8vd3d3LnNsYXZlc3Rvc29sZGllcnMuY29tXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvc2xhdmVUb1NvbGRpZXJzLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2xhdmUgVG8gU29sZGllcnMgUGljXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlVTQ1RQaWNcIilcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rVGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlIHRvIGxlYXJuIG1vcmUuXCJcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBhZ2VMaW5rKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVTQ1QiXX0=
