var tl = gsap.timeline({scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "150% 50%",
    markers: true,
    scrub: true,
    pin: true,
}})

tl.to(".top-content", {
    rotateX: "110deg",
    opacity: 0,
    duration: 2,
}, "ac")

tl.to(".btm-content", {
    rotateX: "-110deg",
    opacity: 0,
    duration: 2,
}, "ac")

tl.to(".img", {
    width: "100%",
    height: "100%",
    duration: 5,

}, "ac")