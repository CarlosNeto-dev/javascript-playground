/** =============== Button active the navbar ===============  */

const barsButton = document.querySelector("#bars-btn")
const playgroundNavbar = document.querySelector(".base-navbar")

barsButton.addEventListener("click", () => {
  playgroundNavbar.classList.toggle("active")
})
