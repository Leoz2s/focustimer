import { state } from "./state.js"

let bgSound 

export function runSound(e) {
  activatedSoundButton(e)
  state.bgSound = document.documentElement.classList.toggle("sound-on")

  if(state.bgSound){
    addAudio(e)
    bgSound.play()
  } else if(!state.bgSound) {
    bgSound.pause()
  }
}

export function activatedSoundButton(e) {
  e.target.classList.toggle('active-sound')
 }

export function addAudio(e) {
 if(e.target.dataset.action == "sound-nature"){
    bgSound = new Audio("./assets/sounds/florest.wav")

  } else if(e.target.dataset.action == "sound-rain"){
    bgSound = new Audio("./assets/sounds/rain.wav")

    // test
    if(!state.bgSound) {
      activatedSoundButton(e)
      bgSound.play();
      state.bgSound = true;
    } else {
        bgSound.pause();
        state.bgSound = false; 
    }

  } else if(e.target.dataset.action == "sound-market"){
    bgSound = new Audio("./assets/sounds/coffeshop.wav")

    // test
    state.bgSound == true ? bgSound.pause() : bgSound.play(), activatedSoundButton(e)

    state.bgSound == true ? state.bgSound = false : state.bgSound = true

  } else if(e.target.dataset.action == "sound-fire"){
    bgSound = new Audio("./assets/sounds/fireplace.wav")
  }

  bgSound.loop = true
}

