import { minutes, seconds } from "./elements.js";
import { state } from "./state.js";

function exceedingMinutesValidation() {
  let minutesExceedValidation = minutes.innerHTML > 60 ? 59 : minutes.innerHTML
  minutes.innerHTML = minutesExceedValidation 
}

export function updateDisplay(actualMinutes, actualSeconds) {
  actualMinutes = actualMinutes ?? state.standartMinutes
  actualSeconds = actualSeconds ?? state.standartSeconds
  
  minutes.innerHTML = String(actualMinutes).padStart(2, "0")
  seconds.innerHTML = String(actualSeconds).padStart(2, "0")

  exceedingMinutesValidation()
}
