const forest = document.getElementById("forest")
const wave = document.getElementById("wave")
const library = document.getElementById("library")
const boxes = document.querySelectorAll(".box")

boxes.forEach(box => {
    box.addEventListener("mouseleave", () => {
        document.body.style.transition = "background-color 0.5s ease"
        document.documentElement.setAttribute("data-theme", "default")
    })

    box.addEventListener("mouseenter", () => {
        /* document.body.style.transition = "color 0.5s ease" */
        document.documentElement.setAttribute("data-theme", box.id)
    })
})