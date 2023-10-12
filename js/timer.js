import { minutes, seconds } from "./elements.js"
import { updateDisplay } from "./updateDisplay.js"
import { stopTimer } from "./startStop.js"
import { state } from "./state.js"

export function countTime() {
  clearTimeout(state.countdownId)

  let minutesValue = minutes.innerHTML
  let secondsValue = seconds.innerHTML

  if(secondsValue > 0) {
    secondsValue--
  }
  else if(secondsValue == 0 && minutesValue > 0) {
    minutesValue--
    secondsValue = 59 
  }
  else if(minutesValue == 0 && secondsValue == 0) {
    stopTimer()
    return
  }
  
  updateDisplay(minutesValue, secondsValue)
  state.countdownId = setTimeout(() => countTime(), 1000)
}

