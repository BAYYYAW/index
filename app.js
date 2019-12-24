var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from(".c2", 2400, {y:900});

const scene = new ScrollMagic.Scene({
  triggerElement: " .trigger",
  triggerHook: "onLeave",
  duration: "300%"
})
  .setPin(".trigger")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
