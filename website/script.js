const forest = document.getElementById("forest")
const wave = document.getElementById("wave")
const library = document.getElementById("library")
const boxes = document.querySelectorAll(".box")
var lock = false
boxes.forEach(box => {
    box.addEventListener("click", () => {
        boxes.forEach(box => {
            document.getElementById(box.id).style.transition = "box-shadow 0.2s ease;"
            box.classList.remove("selected")
        })
        document.documentElement.setAttribute("data-theme", box.id)
        document.getElementById(box.id).classList.add("selected")
        return lock = true
    })
    box.addEventListener("mouseleave", () => {
        console.log(lock)
        if (lock == false) {
            document.body.style.transition = "background-color 0.5s ease"
            document.documentElement.setAttribute("data-theme", "default")
        }
        if (lock == true) {
            console.log("locked")
        }
    })

    box.addEventListener("mouseenter", () => {
        if (lock == false) {
            document.body.style.transition = "color 0.5s ease"
            document.documentElement.setAttribute("data-theme", box.id)
        }
    })
})