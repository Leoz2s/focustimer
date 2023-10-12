import * as elements from "./elements.js"

export function plusTime() {
  let newMinutes = elements.minutes.innerHTML
  let newSeconds = elements.seconds.innerHTML

  const howMuchTime = 5
  const howMuchSeconds = 0

  elements.minutes.innerHTML = String(Number(newMinutes) + howMuchTime).padStart(2, "0")
  elements.seconds.innerHTML = String(Number(newSeconds) + howMuchSeconds).padStart(2, "0")
}

export function minusTime() {
  let newMinutes = elements.minutes.innerHTML
  let newSeconds = elements.seconds.innerHTML

  const howMuchMinutes = 5
  const howMuchSeconds = 0

  if(newMinutes > 0 && newMinutes >= howMuchMinutes){
    elements.minutes.innerHTML = String(Number(newMinutes) - howMuchMinutes).padStart(2, "0")
    elements.seconds.innerHTML = String(Number(newSeconds) - howMuchSeconds).padStart(2, "0")
  }
}