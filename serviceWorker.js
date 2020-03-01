const staticBlenderWorks = "blender-works-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/HappyNewYear2019.png",
    "/images/RRFPlane1-2.png",
    "/images/Blinds.png",
    "/images/Fireflies.png",
    "/images/ToothpickBridge.jpg",
    "/images/RoboDog.jpg",    
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBlenderWorks).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})