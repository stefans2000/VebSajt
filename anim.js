anime.timeline({loop: false})
  .add({
    targets: '.dobrodosli-naslov',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 2000,
    delay: (el, i) => 1500 * i
  })