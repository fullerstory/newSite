import USCT from "./usct"
import Courthouse from "./courthouse"
import Riot from "./riot"
import Reconstruction from "./reconstruction"
import Statue from "./statue"
import Media from "./media"
import Donate from "./donate"
import Home from "./home"

let placeholder = document.getElementById("Navbar")


const navBar = {

  eventListeners(event) {
    let newPage = event.target.value;
    switch(newPage) {
      case "usct":
        navBar.hideMarkers()
        USCT.main()
        break;
      case "courthouse":
        navBar.hideMarkers()
        Courthouse.main()
        break;
      case "riot":
        navBar.hideMarkers()
        Riot.main()
        break;
      case "reconstruction":
        navBar.hideMarkers()
        Reconstruction.main()
        break;
      case "statue":
        navBar.hideMarkers()
        Statue.main()
        break;
      case "media":
        navBar.hideMarkers()
        Media.main()
        break;
      case "donate":
        navBar.hideMarkers()
        Donate.main()
        break;
      case "home":
        navBar.hideMarkers()
        Home.main()
        break;
      case "markers":
        navBar.hideMarkers()
        break;

    }
  },

  makeMarkers(value, text) {
    let btn = document.createElement("button")
    btn.addEventListener("click", navBar.eventListeners)
    btn.setAttribute("value", value)
    btn.setAttribute("class", "markers")
    btn.innerText = text
    return btn
  },

  makeBtn(value, text) {
    let btn = document.createElement("button")
    btn.addEventListener("click", navBar.eventListeners)
    btn.setAttribute("value", value)
    btn.setAttribute("class", "menu")
    btn.innerText = text
    return btn
  },

  loadNavbar() {
    let elementHolder = document.createDocumentFragment()
    let heading = document.createElement("h1")
    heading.setAttribute("id", "mainTitle")
    heading.innerText = "Telling a FULLER STORY of Franklin"
    elementHolder.appendChild(heading)
    let subHeading = document.createElement("h3")
    subHeading.setAttribute("id", "subTitle")
    subHeading.innerText = "Learning From Our Past To Reconcile Our Future"
    elementHolder.appendChild(subHeading)
    let div = document.createElement("div")
    div.setAttribute("class", "heading")
    let sect = document.createElement("section")
    sect.setAttribute("class", "home_menu")
    sect.appendChild(navBar.makeBtn("home", "Home Page"))
    div.appendChild(sect)
    sect = document.createElement("section")
    sect.setAttribute("class", "markers_menu")
    let markers = navBar.makeBtn("markers", "Menu")
    markers.setAttribute("id", "Markers")
    sect.appendChild(markers)
    sect.appendChild(navBar.makeMarkers("usct", "United States Colored Troops"))
    sect.appendChild(navBar.makeMarkers("courthouse", "Courthouse / Market House"))
    sect.appendChild(navBar.makeMarkers("riot", "1867 Riot"))
    sect.appendChild(navBar.makeMarkers("reconstruction", "Reconstruction & Jim Crow"))
    sect.appendChild(navBar.makeMarkers("statue", "USCT Statue"))
    sect.appendChild(navBar.makeMarkers("donate", "Donate"))
    div.appendChild(sect)
    sect = document.createElement("section")
    sect.setAttribute("class", "media_menu")
    sect.appendChild(navBar.makeBtn("media", "News Media"))
    div.appendChild(sect)
    elementHolder.appendChild(div)
    placeholder.appendChild(elementHolder)
    navBar.hideMarkers()
  },

  hideMarkers() {
    let Markers = document.getElementById("Markers")
    Markers.removeEventListener("click", navBar.hideMarkers)
    Markers.addEventListener("click", navBar.showMarkers)
    Markers.innerHTML = "Menu"
    $("#Markers").show()
    $(".markers").hide()
  },

  showMarkers() {
    let Markers = document.getElementById("Markers")
    Markers.removeEventListener("click", navBar.showMarkers)
    Markers.addEventListener("click", navBar.hideMarkers)
    Markers.innerHTML = "Hide Menu"
    $(".markers").show()
  }


}

export default navBar

    // <p id="leftHeading">Seeking To Tell A &nbsp</p>
    // <p id="bigHeading">Fuller Story</p>
    // <p id="rightHeading">&nbsp Of Franklin</p>
    // <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>