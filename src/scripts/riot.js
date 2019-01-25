let placeholder = document.getElementById("Main")

const Riot = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "marker_div")
    let div = document.createElement("div")
    div.setAttribute("class", "marker_text_div")
    let temp = document.createElement("p")
    temp.setAttribute("id", "main_text")
    temp.innerHTML = "1867 Riot"
    placeholder.appendChild(temp)
    temp = document.createElement("img")
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg")
    temp.setAttribute("alt", "Historical Plaque")
    temp.setAttribute("class", "markerPagePic")
    mainDiv.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "sub_title")
    temp.innerHTML = "On July 6, 1867, after a delayed July 4th parade and political speeches, a race riot broke out on the square injuring several people and killing one person."
    div.appendChild(temp)
    mainDiv.appendChild(div)
    placeholder.appendChild(mainDiv)
  }
}

export default Riot