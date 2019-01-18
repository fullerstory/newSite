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
        USCT.main()
        break;
      case "courthouse":
        Courthouse.main()
        break;
      case "riot":
        Riot.main()
        break;
      case "reconstruction":
        Reconstruction.main()
        break;
      case "statue":
        Statue.main()
        break;
      case "media":
        Media.main()
        break;
      case "donate":
        Donate.main()
        break;
      case "home":
        Home.main()
        break;

    }
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
    div.appendChild(navBar.makeBtn("usct", "United States Colored Troops"))
    div.appendChild(navBar.makeBtn("courthouse", "Courthouse/Market House"))
    div.appendChild(navBar.makeBtn("riot", "1867 Riot"))
    div.appendChild(navBar.makeBtn("reconstruction", "Reconstruction & Jim Crow"))
    div.appendChild(navBar.makeBtn("statue", "USCT Statue"))
    div.appendChild(navBar.makeBtn("media", "Media"))
    div.appendChild(navBar.makeBtn("donate", "Donate"))
    div.appendChild(navBar.makeBtn("home", "Home"))
    elementHolder.appendChild(div)
    placeholder.appendChild(elementHolder)
  }


}

export default navBar

    // <p id="leftHeading">Seeking To Tell A &nbsp</p>
    // <p id="bigHeading">Fuller Story</p>
    // <p id="rightHeading">&nbsp Of Franklin</p>
    // <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>