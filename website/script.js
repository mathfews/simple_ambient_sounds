const forest = document.getElementById("forest")
const wave = document.getElementById("wave")
const library = document.getElementById("library")
const boxes = document.querySelectorAll(".box")
const audioWave = document.getElementById("audio-wave")
const audioForest = document.getElementById("audio-forest")
const audioLibrary = document.getElementById("audio-library")

let lock = false
let currentSong = null
boxes.forEach(box => {
    box.addEventListener("click", () => {
        let nextAudio = null

        if (box.id === "wave") nextAudio = audioWave
        if (box.id === "forest") nextAudio = audioForest
        if (box.id === "library") nextAudio = audioLibrary

        if (currentSong === null || currentSong.paused) {
            nextAudio.play()
            currentSong = nextAudio
        } else if (currentSong == nextAudio) {
            nextAudio.pause()
        } else if (currentSong != null && currentSong != nextAudio) {
            currentSong.pause()
            currentSong.currentTime = 0
            currentSong = nextAudio
            nextAudio.play()
        }


        boxes.forEach(box => {
            document.getElementById(box.id).style.transition = "box-shadow 0.2s ease;"
            box.classList.remove("selected")
        })
        document.documentElement.setAttribute("data-theme", box.id)
        document.getElementById(box.id).classList.add("selected")
        return lock = true
    })
    box.addEventListener("mouseleave", () => {
        if (lock == false) {
            document.body.style.transition = "background-color 0.5s ease"
            document.documentElement.setAttribute("data-theme", "default")
        }
    })

    box.addEventListener("mouseenter", () => {
        if (lock == false) {
            document.body.style.transition = "color 0.5s ease"
            document.documentElement.setAttribute("data-theme", box.id)
        }
    })
})