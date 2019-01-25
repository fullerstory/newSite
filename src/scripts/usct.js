let placeholder = document.getElementById("Main")

const USCT = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "marker_div")
    let div = document.createElement("div")
    div.setAttribute("class", "marker_text_div")
    let temp = document.createElement("p")
    temp.setAttribute("id", "main_text")
    temp.innerHTML = "United States Colored Troops"
    placeholder.appendChild(temp)
    temp = document.createElement("img")
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg")
    temp.setAttribute("alt", "Historical Plaque")
    temp.setAttribute("class", "markerPagePic")
    mainDiv.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "sub_title")
    temp.innerHTML = "Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard."
    div.appendChild(temp)
    mainDiv.appendChild(div)
    placeholder.appendChild(mainDiv)
    let pageLink = document.createElement("a")
    pageLink.setAttribute("href", "http://www.slavestosoldiers.com")
    pageLink.setAttribute("class", "link")
    pageLink.setAttribute("target", "blank")
    temp = document.createElement("img")
    temp.setAttribute("src", "./images/slaveToSoldiers.jpg")
    temp.setAttribute("alt", "Slave To Soldiers Pic")
    temp.setAttribute("id", "USCTPic")
    pageLink.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("class", "linkText")
    temp.innerHTML = "Click here to learn more."
    pageLink.appendChild(temp)
    placeholder.appendChild(pageLink)
  }
}

export default USCT