(function() {
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  function letsGo() {
    console.log("go baby go baby baby baby");
    console.warn("this is a bug!");
    console.info("this is an amazing feature!");
    console.info("this is an amazing feature!");
    console.debug("another amazing feature!");
    console.warn("this is another bug!");
  }
  function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  window.addEventListener("keydown", playAudio);
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  letsGo();
})();
