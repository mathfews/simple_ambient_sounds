const forest = document.getElementById("forest")
const wave = document.getElementById("wave")
const library = document.getElementById("library")
const boxes = document.querySelectorAll(".box")
const audioWave = document.getElementById("audio-wave")
const audioForest = document.getElementById("audio-forest")
const audioLibrary = document.getElementById("audio-library")
const boxMobile = document.getElementById("boxMobile")
const avatarMobile = document.getElementById("avatarMobile")
const textMobile = document.getElementById("boxMobileText")
const title = document.getElementById("title")
const rightArrow = document.getElementById("rightArrow")
const leftArrow = document.getElementById("leftArrow")
const arrows = document.querySelectorAll(".arrow")

let lock = false
let currentSong = null
let nextSong = null
let check = 0

arrows.forEach(arrow => {
    arrow.style.transition = "color 0.5s ease"
    document.body.style.transition = "background-color 0.5s ease"
    boxMobile.style.transition = "background-color, box-shadow 0.5s ease"
    avatarMobile.style.transition = "content 1s ease"
})

avatarMobile.addEventListener("click", () => {
    let nextSong = null
    if (avatarMobile.innerText === "🌊") nextSong = audioWave, document.documentElement.setAttribute("data-theme", "wave")
    if (avatarMobile.innerText === "📚") nextSong = audioLibrary, document.documentElement.setAttribute("data-theme", "library")
    if (avatarMobile.innerText === "🌲") nextSong = audioForest, document.documentElement.setAttribute("data-theme", "forest")
    if (check == 0) {
        boxMobile.style.border = "white solid 5px"
        nextSong.play()
        currentSong = nextSong
        check = 1
    } else if (check == 1) {
        nextSong.pause()
        check = 0
        boxMobile.style.border = "none"
    }
})

rightArrow.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "wave" || document.documentElement.getAttribute("data-theme") === "default" ) {
        document.documentElement.setAttribute("data-theme", "library")
        avatarMobile.innerText = "📚"
        boxMobile.style.backgroundColor = "rgb(231, 203, 150)"
        textMobile.innerText = "Library"
        if (check === 1) {
            audioWave.pause()
            audioLibrary.play()
        }
        rightArrow.style.color = "rgba(166, 127, 43, 1)"
    }
    if (document.documentElement.getAttribute("data-theme") === "forest") {
        document.documentElement.setAttribute("data-theme", "wave")
        avatarMobile.innerText = "🌊"
        boxMobile.style.backgroundColor = "rgb(83, 151, 241)"
        textMobile.innerText = "Wave"
        if (check === 1) {
            audioForest.pause()
            audioWave.play()
        }
        leftArrow.style.color = ""
    }
})

leftArrow.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "default" || document.documentElement.getAttribute("data-theme") === "wave") {
        document.documentElement.setAttribute("data-theme", "forest")
        avatarMobile.innerText = "🌲"
        boxMobile.style.backgroundColor = "rgb(107, 219, 125)"
        textMobile.innerText = "Forest"
        if (check === 1) {
            audioWave.pause()
            audioForest.play()
        }
        leftArrow.style.color = "rgba(42, 119, 35, 1)"
    }
    if (document.documentElement.getAttribute("data-theme") === "library") {
        document.documentElement.setAttribute("data-theme", "wave")
        avatarMobile.innerText = "🌊"
        boxMobile.style.backgroundColor = "rgb(83, 151, 241)"
        textMobile.innerText = "Wave"
        if (check === 1) {
            audioLibrary.pause()
            audioWave.play()
        }
        rightArrow.style.color = ""
    }
})
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