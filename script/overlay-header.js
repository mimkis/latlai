function onHome() {
  document.querySelectorAll(".home").forEach(el => {
    el.style.display = "flex";
  });
}

function onAbout() {
  document.querySelectorAll(".about").forEach(el => {
    el.style.display = "flex";
  });
}

function onCredits() {
  document.querySelectorAll(".credits").forEach(el => {
    el.style.display = "flex";
  });
}

function off() {
  document.querySelectorAll(".overlay").forEach(overlay => {
    overlay.style.display = "none";
  });
}