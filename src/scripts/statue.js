let placeholder = document.getElementById("Main")
let images = ["../images/statue.JPG", "../images/statue1.JPG", "../images/statue2.JPG", "../images/statue3.JPG"]


const Statue = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let fragment = document.createDocumentFragment()
    let mainText = document.createElement("p")
    mainText.setAttribute("id", "main_text")
    mainText.innerHTML = "United States Colored Troops Statue"
    fragment.appendChild(mainText)
    images.forEach(item => {
      let photo = document.createElement("img")
      photo.setAttribute("class", "statue_image")
      photo.setAttribute("src", item)
      fragment.appendChild(photo)
    })
    let subTitle = document.createElement("p")
    subTitle.setAttribute("id", "sub_title")
    subTitle.innerHTML = "The ultimate goal of the “Fuller Story” is to erect a statue of a USCT Soldier. <br><br>The goal is for this soldier to be placed inside the City Limits.<br><br>The exact location has yet to be determined."
    fragment.appendChild(subTitle)
    placeholder.appendChild(fragment)
  }
}

export default Statue