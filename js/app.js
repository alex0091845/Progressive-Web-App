const container = document.querySelector(".container")
const works = [
    { name: "New Year 2019", image: "images/HappyNewYear2019.png" },
    { name: "Jet Fighter", image: "images/RRFPlane1-2.png" },
    { name: "Morning Light", image: "images/Blinds.png" },
    { name: "Fireflies", image: "images/Fireflies.png" },
    { name: "Bridge Architect", image: "images/ToothpickBridge.jpg" },
    { name: "Robo Dog", image: "images/RoboDog.jpg" },
]

const showWorks = () => {
    let output = ""
    works.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}<h1>
                    <a class="card--link" href="#">Check it out!</a>
                </div>
            `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showWorks)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        this.navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => this.console.log("service worker registered"))
            .catch(err => this.console.log("service worker not registered", err))
    })
}