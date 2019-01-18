let placeholder = document.getElementById("Main")

const USCT = {

  main() {
    placeholder.innerHTML = ""
    let temp = document.createElement("img")
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg")
    temp.setAttribute("alt", "Historical Plaque")
    temp.setAttribute("class", "mainPagePic")
    placeholder.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("class", "otherText")
    temp.innerHTML = "United States Colored Troops <br><br> Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard."
    placeholder.appendChild(temp)
    let pageLink = document.createElement("a")
    pageLink.setAttribute("href", "www.slavestosoldiers.com")
    pageLink.setAttribute("class", "link")
    temp = document.createElement("img")
    temp.setAttribute("src", "./images/slaveToSoldiers.jpg")
    temp.setAttribute("alt", "Slave To Soldiers Pic")
    temp.setAttribute("class", "mainPagePic")
    pageLink.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("class", "linkText")
    temp.innerHTML = "Click here to learn more."
    pageLink.appendChild(temp)
    placeholder.appendChild(pageLink)
  }
}

export default USCT