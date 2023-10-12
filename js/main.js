import * as element from "./elements.js"
import {startTimer, stopTimer} from "./startStop.js"
import { plusTime, minusTime } from "./plusMinusTime.js"
import { runSound, addAudio } from "./sounds.js"
import "./toggleLightDarkMode.js"
import { state } from "./state.js"

// controls -> events.js
element.playButton.addEventListener("click", () => {
  startTimer()
})
element.pauseButton.addEventListener("click", () => {
  startTimer()
})

element.stopButton.addEventListener("click", () => {
  stopTimer()
})

element.plusButton.addEventListener("click", () => {
  plusTime()
})
element.minusButton.addEventListener("click", () => {
  minusTime()
})


// sounds
element.natureSoundButton.addEventListener("click", (e) => {
  runSound(e)
})
element.rainSoundButton.addEventListener("click", (e) => {
  // runSound(e)
  addAudio(e) // test
})
element.marketSoundButton.addEventListener("click", (e) => {
  // runSound(e)
  addAudio(e) // test
})
element.fireSoundButton.addEventListener("click", (e) => {
 runSound(e)
})

// Minutes Input Validation
element.minutes.addEventListener("focus", (event) => {
  event.target.textContent = "0"
  // Sometimes it's impossible to write at first attempt since page load. 
  // That is because tha part of content you clicked is gone, them you have to click on the new textContent.
  // Is it because it's an contenteditable atributte instead of an actual input?
})

element.minutes.onkeypress = (event) => /\d/.test(event.key)

element.minutes.addEventListener("blur", (e) => {
  let minutesExceedValidation = e.target.innerHTML > 60 ? 60 : e.target.textContent
  e.target.textContent = minutesExceedValidation
})
// .innerHTML OR .innerText OR .textContent

// - Pendências: -
// Pause do sounds - verificar porque os testes não funcionam
// Deixar apenas um som por vez funcionando