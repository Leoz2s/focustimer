import { state } from "./state.js"

let natureSound = new Audio("./assets/sounds/florest.wav");
let rainSound = new Audio("./assets/sounds/rain.wav");
let marketSound = new Audio("./assets/sounds/coffeshop.wav");
let fireSound = new Audio("./assets/sounds/fireplace.wav");

let actualSoundData = ""
let soundState = {
  natureSoundState: false,
  rainSoundState: false,
  marketSoundState: false,
  fireSoundState: false,
}

function activatedSoundButton(e) {
  e.target.classList.toggle('active-sound')
}

function pauseAllSounds() {
  natureSound.pause()
  rainSound.pause()
  marketSound.pause()
  fireSound.pause()
}

export function runSound(e) {
  simultaneousAudiosMode(e);
  // onlyOneAudioMode(e);
}

export function playAudio(e) {
  switch (e.target.dataset.action) {
    case "sound-nature":
      actualSoundData = e.target.dataset.action;
      soundState.natureSoundState = true;

      natureSound.play();
      natureSound.loop = true;
      break;

    case "sound-rain":
      actualSoundData = e.target.dataset.action
      soundState.rainSoundState = true;

      rainSound.play();
      rainSound.loop = true;

      // Alternative way (using only this function):
      // if(state.bgSound) {
      //   activatedSoundButton(e)
      //   bgSound.pause();
      //   state.bgSound = false; 
      // } else {
      //   activatedSoundButton(e)
      //   bgSound = new Audio("./assets/sounds/rain.wav")
      //   bgSound.play();
      //   state.bgSound = true;
      // }

      break;

    case "sound-market":
      actualSoundData = e.target.dataset.action
      soundState.marketSoundState = true

      marketSound.play()
      marketSound.loop = true
      break;

    case "sound-fire":
      actualSoundData = e.target.dataset.action
      soundState.fireSoundState = true

      fireSound.play()
      fireSound.loop = true
      break;
  }
  
  // Test -> It doesn't work (impossible to pause audio)
  // if(e.target.dataset.action == "sound-market"){
  //   state.bgSound == true ? SoundTest.pause() : bgSound = new Audio("./assets/sounds/coffeshop.wav"), bgSound.play(), activatedSoundButton(e), state.bgSound = true
  //   // state.bgSound == true ? state.bgSound = false : state.bgSound = true
  // }
}

function pauseAudio(e) {
  switch (e.target.dataset.action) {
    case "sound-nature":
      soundState.natureSoundState = false;
      natureSound.pause()
      break;

    case "sound-rain":
      soundState.rainSoundState = false;
      rainSound.pause()
      break;

    case "sound-market":
      soundState.marketSoundState = false;
      marketSound.pause();
      break;

    case "sound-fire":
      soundState.fireSoundState = false;
      fireSound.pause();
      break;
  }
}

function stateValidation(e) {
  switch (e.target.dataset.action) {
    case "sound-nature":
      if(soundState.natureSoundState == true){
       return true
      }  
      break;

    case "sound-rain":
      if (soundState.rainSoundState == true) {
       return true
      }
      break;

    case "sound-market":
      if (soundState.marketSoundState == true) {
       return true
      }  
      break;

    case "sound-fire":
      if (soundState.fireSoundState == true) {
       return true
      }
      break;
  }
}

function onlyOneAudioValidation(e) {
  if(actualSoundData == e.target.dataset.action) {
    actualSoundData = ""
    state.bgSound = document.documentElement.classList.toggle("sound-on"); // turn-off
    activatedSoundButton(e);
    return false

  } else if (actualSoundData == "") {
    state.bgSound = document.documentElement.classList.toggle("sound-on"); // turn-on
    activatedSoundButton(e);
    return true

  } else {
    return false
  }
}

function simultaneousAudiosMode(e) {
  // All sounds can be played simultaneous
  activatedSoundButton(e);

  let state = stateValidation(e)

  if(!state){
    playAudio(e);
  } else if(state) {
    pauseAudio(e);
  }
}

function onlyOneAudioMode(e) {
  // Only one sound playing
  let stateAlone = onlyOneAudioValidation(e)

  if(stateAlone){
    playAudio(e);
  } else if(!stateAlone) {
    pauseAudio(e);
  }
}

// Funções construtivas / object constructors
// Ao criar com "new" um novo Audio(), ele preenche a variável com um novo áudio, mas não sobreescreve o antigo. Como se houvesse um áudio "fantasma".
