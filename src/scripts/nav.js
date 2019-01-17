let placeholder = document.getElementById("Navbar")

const navBar = {

  loadNavbar() {
    placeholder.innerHTML = `
      <h1 id="mainTitle">Telling a FULLER STORY of Franklin</h1>
      <h3 id="subTitle">Learning From Our Past To Reconcile Our Future</h3>
      <div class="heading">
        <p class="menu">United States Colored Troops</p>
        <p class="menu">Courthouse/Market House</p>
        <p href="https://www.fullerstory.org/1867Riot" class="menu">1867 Riot</p>
        <p href="https://www.fullerstory.org/Reconstruction-JimCrow" class="menu">Reconstruction & Jim Crow</p>
        <p href="https://www.fullerstory.org/Statue" class="menu">USCT Statue</p>
        <p href="https://www.fullerstory.org/Media" class="menu">Media</p>
        <p href="https://www.fullerstory.org/Donate" class="menu">Donate</p>
      </div>`
  }
}

export default navBar

    // <p id="leftHeading">Seeking To Tell A &nbsp</p>
    // <p id="bigHeading">Fuller Story</p>
    // <p id="rightHeading">&nbsp Of Franklin</p>
    // <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>