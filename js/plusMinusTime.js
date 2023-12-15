import * as elements from "./elements.js"

function exceedingMinutesValidation() {
  let minutesExceedValidation = elements.minutes.innerHTML > 60 ? 60 : elements.minutes.textContent
  elements.minutes.textContent = minutesExceedValidation 
}

export function plusTime() {
  let newMinutes = elements.minutes.innerHTML
  let newSeconds = elements.seconds.innerHTML

  const howMuchMinutes = 5
  const howMuchSeconds = 0

  elements.minutes.innerHTML = String(Number(newMinutes) + howMuchMinutes).padStart(2, "0")
  elements.seconds.innerHTML = String(Number(newSeconds) + howMuchSeconds).padStart(2, "0")

  exceedingMinutesValidation()
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