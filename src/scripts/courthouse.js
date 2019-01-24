let placeholder = document.getElementById("Main")

const Courthouse = {

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
    temp.innerHTML = "Courthouse & Market House"
    placeholder.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "sub_title")
    temp.innerHTML = "Throughout the 1800s, a “market house” stood close to the courthouse.” For nearly 50 years, human beings were sold and traded at this “market house.” This slave market included the sale of women and children."
    placeholder.appendChild(temp)
  }
}

export default Courthouse