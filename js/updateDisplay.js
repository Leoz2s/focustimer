import { minutes, seconds } from "./elements.js";
import { state } from "./state.js";

export function updateDisplay(actualMinutes, actualSeconds) {
  actualMinutes = actualMinutes ?? state.standartMinutes
  actualSeconds = actualSeconds ?? state.standartSeconds
  
  minutes.innerHTML = String(actualMinutes).padStart(2, "0")
  seconds.innerHTML = String(actualSeconds).padStart(2, "0")
}
