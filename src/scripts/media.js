let placeholder = document.getElementById("Main")
const news = [
  {href: "http://www.williamsonherald.com/news/article_a047f9de-1efe-11e9-b913-f34c8c53b334.html", img: "../images/alderman.jpg", date: "January 23, 2019", source: "Williamson Herald", content: "Aldermen show strong opinions on 'Fuller Story' marker placement"},
  {href: "https://williamsonsource.com/martin-luther-king-jr-celebration-tells-fuller-story/", img: "../images/williamsonSource.jpg", date: "January 22, 2019", source: "Williamson Source", content: "Martin Luther King Jr. Celebration Shares “Fuller Story”"},
  {href: "http://www.williamsonherald.com/news/article_4026d0a0-1dc5-11e9-9227-2b9896f57f70.html", img: "../images/mlk.jpg", date: "January 21, 2019", source: "Williamson Herald", content: "Martin Luther King Jr.’s dream realized in 'Fuller Story' during celebrations Monday"},
  {href: "https://brentwoodhomepage.com/stone-of-hope-theme-inspires-mlk-day-attendees-to-consider-fuller-story-of-history/", img: "../images/stone.jpg", date: "January 21, 2019", source: "Brentwood Homepage", content: "‘Stone of Hope’ theme inspires MLK Day attendees to consider fuller story of history"},
  {href: "https://brentwoodhomepage.com/ceremony-for-mlk-day-in-franklin-to-include-update-on-fuller-story/", img: "../images/ceremony.jpg", date: "January 17, 2019", source: "Brentwood Homepage", content: "‘Ceremony for MLK Day in Franklin to include update on ‘fuller story’"},
  {href: "http://www.williamsonherald.com/news/article_b013699a-c12d-11e8-ae02-474ac8e99e7b.html?utm_medium=social&utm_source=facebook&utm_campaign=user-share", img: "../images/wh925.jpg", date: "September 25, 2018", source: "Williamson Herald", content: "Franklin BOMA approves 'The Fuller Story' proposal to install African-American historical markers"},
  {href: "https://www.tennessean.com/story/news/local/williamson/2018/09/25/franklin-square-historic-markers-confederate-statute/1413243002/", img: "../images/tn925.jpg", date: "September 25, 2018", source: "The Tennessean", content: "Franklin votes to support African-American historic markers near Confederate monument"},
  {href: "https://brentwoodhomepage.com/resolution-to-support-fuller-story-historic-markers-unanimously-approved-will-place-on-public-land-in-town-square/", img: "../images/bh925.jpg", date: "September 25, 2018", source: "Brentwood Homepage", content: "Resolution to support \"Fuller Story\" historic markers unanimously approved, will place on public land in town square"},
  {href: "https://franklinhomepage.com/franklin-groups-individuals-write-letters-of-support-for-fuller-story-initiative-will-present-to-board-of-mayor-and-aldermen-tuesday/", img: "../images/fh925.jpeg", date: "September 24, 2018", source: "Brentwood Homepage", content: "Franklin groups, individuals write letters of support for \"Fuller Story\" initiative, will present to Board of Mayor and Aldermen Tuesday"},
  {href: "http://www.williamsonherald.com/opinion/article_b1b45d94-b6de-11e8-8ff7-3b52f453b603.html#comments", img: "../images/williamsoncommentary.jpg", date: "September 12, 2018", source: "Williamson Herald", content: "Commentary: Good idea for slavery plaques stymied by group's resistance to it"},
  {href: "http://www.williamsonherald.com/opinion/article_20cfe1e2-b6a0-11e8-84bd-cb9cf49817dc.html", img: "../images/williamsonLetter.jpg", date: "September 12, 2018", source: "Williamson Herald", content: "Letter to Editor: Moving forward with 'The Fuller Story' preferred by pastors"},
  {href: "https://franklinhomepage.com/franklin-intends-to-go-to-court-to-clarify-ownership-of-public-square/", img: "../images/news5.jpg", date: "August 29, 2018", source: "Franklin Homepage", content: "Franklin Intends to go to court to clarify ownership of Public Square"},
  {href: "http://www.williamsonherald.com/news/article_b1ae9be0-ab1a-11e8-a376-0727acdea1f3.html", img: "../images/news8.jpg", date: "August 28, 2018", source: "Williamson Herald", content: "UDC wants new placement for proposed Civil War markers; BOMA defers decision"},
  {href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/daughters-confederacy-franklin-square-williamson-county/1126685002/", img: "../images/news7.jpg", date: "August 28, 2018", source: "The Tennessean", content: "Daughters of Confederacy want say in African-American history markers on Franklin Square"},
  {href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/franklin-confederate-monument-public-square/1128457002/", img: "../images/news9.jpeg", date: "August 28, 2018", source: "The Tennessean", content: "Franklin files suit to figure out who owns land on public square"},
  {href: "https://franklinhomepage.com/franklin-aldermen-vote-to-slow-effort-to-add-african-american-history-markers-on-the-public-square/", img: "../images/news6.jpg", date: "August 28, 2018", source: "Franklin Homepage", content: "African American history markers on the Public Square"},
  {href: "https://www.stardem.com/news/national/black-pastors-confederate-descendants-share-civil-war-history-in-tennessee/article_20dcac5f-e1d8-5ece-b8c2-18295342ce33.html", img: "../images/theStar.jpg", date: "August 24, 2018", source: "The Star Democrat", content: "Black pastors, Confederate descendants share Civil War history in Tennessee town"},
  {href: "https://www.wkrn.com/news/group-of-franklin-pastors-hope-to-add-markers-to-confederate-monument_20180822120323/1388036676", img: "../images/wkrnVideo.jpg", date: "August 22, 2018", source: "WKRN", content: "Group of Franklin pastors hope to add markers to Confederate monument"},
  {href: "https://civilwartalk.com/threads/pastors-propose-historic-markers-detailing-slave-auctions-and-keeping-confederate-statue-too.149047/", img: "../images/civilWarTalks.jpg", date: "August 16, 2018", source: "Civil War Talk", content: "Pastors Propose Historic Markers Detailing Slave Auctions and Keeping Confederate Statue Too"},
  {href: "https://www.wsmv.com/news/pastors-push-for-diversity-in-franklin-historical-markers/article_5c3915f8-a0e0-11e8-8d2e-9b1f36f9ed69.html", img: "../images/wsmv.jpg", date: "August 15, 2018", source: "WSMV", content: "Pastors push for diversity in Franklin historical markers"},
  {href: "https://franklinhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/", img: "../images/franklinHomepage.jpg", date: "August 14, 2018", source: "Franklin Homepage", content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"},
  {href: "https://www.tennessean.com/story/news/local/williamson/2018/08/14/franklin-confederate-monument-williamson-county-faith-leaders/993144002/", img: "../images/tennessean.jpg", date: "August 14, 2018", source: "The Tennessean", content: "Franklin faith leaders want markers next to Confederate monument"},
  {href: "http://www.williamsonherald.com/news/article_0a0756b6-a016-11e8-9504-8fe8eb1b677d.html", img: "../images/williamsonHerald.jpg", date: "August 14, 2018", source: "Williamson Herald", content: "Three preachers and a historian tell 'fuller story' by proposing Civil War monument, markers"},
  {href: "https://brentwoodhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/", img: "../images/brentwoodHomepage.jpg", date: "August 14, 2018", source: "Brentwood Homepage", content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"},
]

const Media = {

  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = ""
    let newsSection = document.createDocumentFragment()
    news.forEach(story => {
      let article = document.createElement("article")
      article.setAttribute("class", "new_story")
      let link = document.createElement("a")
      link.setAttribute("class", "news_link")
      link.setAttribute("href", story.href)
      link.setAttribute("target", "blank")
      let image = document.createElement("img")
      image.setAttribute("class", "new_image")
      image.setAttribute("src", story.img)
      let date = document.createElement("p")
      date.setAttribute("class", "new_date")
      date.innerHTML = `${story.date} - ${story.source}`
      let content = document.createElement("p")
      content.setAttribute("class", "new_content")
      content.innerHTML = story.content
      link.appendChild(image)
      link.appendChild(date)
      link.appendChild(content)
      article.appendChild(link)
      newsSection.appendChild(article)
    })
    placeholder.appendChild(newsSection)
  }
}

export default Media