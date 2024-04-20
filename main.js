const keyList = document.querySelectorAll(".key")

function playSound(idAudio) {
  const audioElement = document.querySelector(idAudio)

  if (audioElement === null) {
    alert("Elemento não existe!")
  }

  if (audioElement && audioElement.localName === "audio") {
    audioElement.play()
  }
}

for (i = 0; i < keyList.length; i++) {
  const key = keyList[i]
  const sound = key.classList[1]
  const idAudio = `#sound_${sound}`

  key.onclick = function () {
    playSound(idAudio)
  }

  key.onkeydown = function (e) {
    if (e.code === "Enter" || e.code === "Space") {
      key.classList.add("active")
    }
  }

  key.onkeyup = function () {
    key.classList.remove("active")
  }
}
