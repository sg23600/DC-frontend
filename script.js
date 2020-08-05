var profileimg = document.getElementById("profile-img")
var button = document.getElementsByClassName("profile-button")

const src = ["img/profile/1.png", "img/profile/2.jpg", "img/profile/3.jpg"]

const changeState = (i) => {
  button[i].src = "img/profile/on.png"
  for (var j = 0; j < 3; j++) {
    if (j !== i) {
      button[j].src = "img/profile/off.png"
    }
  }
}
button[0].addEventListener("click", (e) => {
  profileimg.src = src[0]
  changeState(0)
})
button[1].addEventListener("click", (e) => {
  profileimg.src = src[1]
  changeState(1)
})
button[2].addEventListener("click", (e) => {
  profileimg.src = src[2]
  changeState(2)
})

var link = document.getElementsByClassName("link")
var head = document.getElementById("head")

link[1].addEventListener("click", (e) => {
  head.innerHTML = link[1].innerText
  link[1].classList.add("active")
  link[1].classList.remove("fl")
  for (var i = 0; i < 5; i++) {
    if (i !== 1) {
      link[i].classList.remove("active")
      link[i].classList.add("fl")
    }
  }
})
link[2].addEventListener("click", (e) => {
  head.innerHTML = link[2].innerText
  link[2].classList.add("active")
  link[2].classList.remove("fl")
  for (var i = 0; i < 5; i++) {
    if (i !== 2) {
      link[i].classList.remove("active")
      link[i].classList.add("fl")
    }
  }
})
link[3].addEventListener("click", (e) => {
  head.innerHTML = link[3].innerText
  link[3].classList.add("active")
  link[3].classList.remove("fl")
  for (var i = 0; i < 5; i++) {
    if (i !== 3) {
      link[i].classList.remove("active")
      link[i].classList.add("fl")
    }
  }
})
link[4].addEventListener("click", (e) => {
  head.innerHTML = link[4].innerText
  link[4].classList.add("active")
  link[4].classList.remove("fl")
  for (var i = 0; i < 5; i++) {
    if (i !== 4) {
      link[i].classList.remove("active")
      link[i].classList.add("fl")
    }
  }
})
link[0].addEventListener("click", (e) => {
  head.innerHTML = link[0].innerText
  link[0].classList.add("active")
  link[0].classList.remove("fl")
  for (var i = 0; i < 5; i++) {
    if (i !== 0) {
      link[i].classList.remove("active")
      link[i].classList.add("fl")
    }
  }
})
var count = 0
var extra = document.getElementsByClassName("extra")
viewAll = document.getElementById("viewall")
viewAll.addEventListener("click", (e) => {
  count += 1
  if (count % 2 == 1) {
    viewAll.innerHTML = "Show less"
    extra[0].classList.remove("hide")
    extra[1].classList.remove("hide")
  } else {
    viewAll.innerHTML = "View all"
    extra[0].classList.add("hide")
    extra[1].classList.add("hide")
  }
})
