
let counter = 0

let menu
let menuVisible = false

function hideMenu() {
  if (!menuVisible) {
    return
  }

  menuVisible = false
  menu.classList.remove('active')
}

function positionMenu(x, y) {
  w = menu.offsetWidth
  h = menu.offsetHeight

  deltaX = window.innerWidth - x
  if (deltaX < w) {
    menu.style.left = (window.innerWidth - w) + 'px'
  } else {
    menu.style.left = x + 'px'
  }

  deltaY = window.innerHeight - y
  if (deltaY < h) {
    menu.style.top = (window.innerHeight - h) + 'px'
  } else {
    menu.style.top = y + 'px'
  }
}

function showMenu(x, y) {
  if (menuVisible) {
    return
  }

  menuVisible = true
  menu.classList.add('active')

  positionMenu(x, y)
}


document.addEventListener("contextmenu", (e) => {
  e.preventDefault()
  if (menuVisible) {
    hideMenu()
  } else {
    showMenu(e.clientX, e.clientY)  
  }
})

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 27) {
    hideMenu()
  }
})

menu = document.getElementById('menu');

let items = menu.getElementsByClassName('z-menu-item')
for (let i = 0; i < items.length; ++i) {
  items[i].addEventListener('click', (e) => {
    hideMenu()
  })
}

function onItemAClick(e) {
  document.body.style.backgroundColor = 'blue'
}

function onItemBClick(e) {
  document.body.style.backgroundColor = 'green'
}
