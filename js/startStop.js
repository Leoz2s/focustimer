import { state } from "./state.js"
import { updateDisplay } from "./updateDisplay.js"
import { countTime } from "./timer.js"
import * as element from "./elements.js"

export function startTimer() {
  state.isRunning = document.documentElement.classList.toggle('is-running')

  if(element.minutes.innerHTML == 0 && element.seconds.innerHTML == 0){
    updateDisplay()
  }

  if(state.isRunning == true){
    element.playButton.classList.add("is-running")
    element.pauseButton.classList.add("is-running")
    element.stopButton.classList.add("is-running")

    countTime()
    return
  } else if(state.isRunning == false){
    element.playButton.classList.remove("is-running")
    element.pauseButton.classList.remove("is-running")
    
    if(element.minutes.innerHTML == 0 && element.minutes.innerHTML == 0){
      element.stopButton.classList.remove("is-running")
    }

    clearTimeout(state.countdownId)
  }
}

export function stopTimer() {
  element.playButton.classList.remove("is-running")
  element.stopButton.classList.remove("is-running")
  
  state.isRunning = document.documentElement.classList.remove('is-running')

  clearTimeout(state.countdownId)
  updateDisplay(0, 0)
}