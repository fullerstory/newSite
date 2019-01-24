let placeholder = document.getElementById("Main")

const Donate = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let temp = document.createElement("img")
    temp.setAttribute("src", "./images/fullerDonate.jpg")
    temp.setAttribute("alt", "Donate")
    temp.setAttribute("class", "mainPagePic")
    placeholder.appendChild(temp)
    temp = document.createElement("p")
    temp.setAttribute("id", "sub_title")
    temp.innerHTML = "If you would like to support this effort to tell the Fuller Story of Franklin, please click on the link to give online. All donations are tax deductible. When making a donation, please email Kevin Riggs at kevin@franklincommunitychurch.org and reference that the donation is for the Fuller Story project so we can ensure it is applied in the correct way. You can choose either Franklin Community Church or Franklin Community Development for the organization, just make sure to also send the email to Kevin."
    placeholder.appendChild(temp)
    let pageLink = document.createElement("a")
    pageLink.setAttribute("href", "https://franklincommunitychurch.org/giving/")
    pageLink.setAttribute("class", "link")
    pageLink.setAttribute("target", "blank")
    temp = document.createElement("p")
    temp.setAttribute("id", "donate_text")
    temp.innerHTML = "Donate Now"
    pageLink.appendChild(temp)
    placeholder.appendChild(pageLink)
  }
}

export default Donate