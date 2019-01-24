let placeholder = document.getElementById("Main")

const Reconstruction = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let temp = document.createElement("img")
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg")
    temp.setAttribute("alt", "Historical Plaque")
    temp.setAttribute("class", "mainPagePic")
    placeholder.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "main_text")
    temp.innerHTML = "Reconstruction & Jim Crow"
    placeholder.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "sub_title")
    temp.innerHTML = "Following the Civil War the 13th, 14th, and 15th Amendments were passed and ratified. In 1877 Reconstruction ended and the Jim Crow Era soon began. It was during this time that separate restrooms and separate water fountains were in Franklin."
    placeholder.appendChild(temp)
  }
}

export default Reconstruction