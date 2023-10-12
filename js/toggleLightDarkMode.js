import * as element from "./elements.js"

export default element.toggleLightDarkMode.addEventListener("click", (e) => {
  e.target.classList.toggle("dark-mode")
  e.target.classList.toggle("ph-sun")
  e.target.classList.toggle("ph-moon-stars")
  element.htmlDocument.classList.toggle("dark-mode")
})