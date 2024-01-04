let isActive = false;

let shareButtonPortrait = document.getElementById("share-p");
let shareButtonLandscape = document.getElementById("share-l");

let landscapePopup = document.getElementById("l-pop");
let bubble = document.getElementById("bubble");
let portraitPopup = document.getElementById("p-pop");

let setActive = () => {
  isActive = !isActive;
  handleToggle();
}



shareButtonLandscape.addEventListener("click", setActive);
shareButtonPortrait.addEventListener("click", setActive);

function handleToggle() {
  if(isActive) {
    portraitPopup.classList.remove("hidden");
    landscapePopup.classList.remove("hidden");
    bubble.classList.remove("hidden");
    document.getElementById("share-icon-invert").classList.remove("hidden");
    document.getElementById("share-icon").classList.add("hidden");
    shareButtonLandscape.classList.add("dark-bg");
    shareButtonPortrait.classList.add("dark-bg");

    document.getElementById("share-icon-l-invert").classList.remove("hidden");
    document.getElementById("share-icon-l").classList.add("hidden");
  }
  else {
    portraitPopup.classList.add("hidden");
    landscapePopup.classList.add("hidden");
    bubble.classList.add("hidden");
    shareButtonLandscape.classList.remove("dark-bg");
    shareButtonPortrait.classList.remove("dark-bg");
    document.getElementById("share-icon-l-invert").classList.add("hidden");
    document.getElementById("share-icon-l").classList.remove("hidden");
  }
}