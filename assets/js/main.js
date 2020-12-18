function handleActiveMenu(headers) {

  for (h in headers) {
    currentElement = document.getElementById(headers[h].innerText + "nav")
    previousElement = null
    if (currentElement) {
      previousElement = document.getElementById(headers[h].innerText + "nav").previousElementSibling
    }


    if (headers[h].tagName === "H1") {
      if (currentElement) {
        currentElement.classList.add("current")
        currentElement.scrollIntoView({ block: "center" })
      }
    } else if (headers[h].offsetTop <= window.scrollY + window.screenTop) {
      if (currentElement && previousElement) {
        currentElement.classList.add("current")
        if (previousElement.classList.contains("current")) {
          previousElement.classList.remove("current")
        }
      }
    } else if (headers[h].offsetTop > window.scrollY + window.screenTop) {
      if (currentElement) {
        currentElement.classList.remove("current")

      }
    }
  }
}

function setActiveMenu() {
  if (location.href.split("/").length <= 5) {
    document.getElementById("indexnav").classList.add("current")

  }

  titles = document.getElementsByTagName("h1")
  subtitles = document.getElementsByTagName("h2")
  handleActiveMenu(titles)
  handleActiveMenu(subtitles)
}

const scrollRight = () => {
  const news = document.getElementById("news")
  news.scroll({
    left: news.scrollLeft + 400,
    behavior: 'smooth'
  });
}

const scrollLeft2 = () => {
  const news = document.getElementById("news")
  news.scroll({
    left: news.scrollLeft - 400,
    behavior: 'smooth'
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const color = (number) => {
  const listItem = document.getElementById("nav-" + number)
  const chooseColor = getRandomInt(5)
  if (chooseColor === 0) {
    document.getElementById('nav-' + number).className = 'turquoise'
  } else if (chooseColor === 1) {
    document.getElementById('nav-' + number).className = 'blue'
  } else if (chooseColor === 2) {
    document.getElementById('nav-' + number).className = 'orange'
  } else if (chooseColor === 3) {
    document.getElementById('nav-' + number).className = 'yellow'
  } else if (chooseColor === 4) {
    document.getElementById('nav-' + number).className = 'red'
  }
}

const resetColor = (number) => {
  const listItem = document.getElementById("nav-" + number)
  listItem.className = 'white'
}

const toggle = (param) => {
  if (param.lastElementChild.style.display === "none") {
    param.lastElementChild.style.display = "inherit"
  } else {
    param.lastElementChild.style.display = "none"
  }

}

const showNav = () => {
  if (document.getElementById('nav-list').style.display === 'none') {
    document.getElementById('nav-list').style.display = 'flex'
  } else {
    document.getElementById('nav-list').style.display = 'none'
  }
}