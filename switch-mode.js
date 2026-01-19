// ================== GLOBAL STATE ==================
let hasPoemFallen = false;
let dragEnabled = false;
let draggables = null;

gsap.registerPlugin(Draggable, InertiaPlugin);

// ================== DRAG ==================
function enableDrag() {
  if (dragEnabled) return;
  dragEnabled = true;

  draggables = Draggable.create(".poem-block", {
    type: "x,y",
    bounds: document.body,
    inertia: true,
    zIndexBoost: false,

    onPress() {
      this.target.classList.add("is-dragging");

      // straighten on grab
      gsap.to(this.target, {
        rotation: 0,
        duration: 0.25,
        ease: "power2.out"
      });
    },

    onRelease() {
      this.target.classList.remove("is-dragging");
    }
  });
}


// ================== POEM FALL ==================
function triggerPoemFall() {
  if (hasPoemFallen) return;
  hasPoemFallen = true;

  const blocks = gsap.utils.toArray(".poem-block");

  gsap.to(blocks, {
    y: () => gsap.utils.random(200, 340),
    rotation: () => gsap.utils.random(-25, 25),
    duration: 0.9,
    ease: "power4.in",
    stagger: {
      each: 0.05,
      from: "random"
    },
    onComplete: enableDrag
  });

  updateModeIndicator("construct your own poem");
}

// ================== MODE INDICATOR ==================
function updateModeIndicator(text) {
  const indicator = document.getElementById("mode-indicator");
  if (!indicator) return;

  gsap.to(indicator, {
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      indicator.textContent = text;
      gsap.to(indicator, { opacity: 1, duration: 0.2 });
    }
  });
}

// ================== RESET ==================
function resetMode() {
  if (draggables) {
    draggables.forEach(d => d.kill());
    draggables = null;
  }

  hasPoemFallen = false;
  dragEnabled = false;

  gsap.set(".poem-block", {
    clearProps: "x,y,rotation,scale"
  });

  updateModeIndicator("look around");
}

// ================== HOVER SCALE (POST-FALL) ==================
function addHoverScale(block) {
  block.addEventListener("mouseenter", () => {
    if (!dragEnabled) return;

    gsap.to(block, {
      scale: 1.1,
      duration: 0.15,
      ease: "power2.out"
    });
  });

  block.addEventListener("mouseleave", () => {
    if (!dragEnabled) return;

    gsap.to(block, {
      scale: 1,
      duration: 0.15,
      ease: "power2.out"
    });
  });
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.querySelector(".icon-switch.reset");
  const poemBlocks = document.querySelectorAll(".poem-block");

  updateModeIndicator("look around");

  poemBlocks.forEach(block => {
    addHoverScale(block);

    block.addEventListener("mouseenter", () => {
      triggerPoemFall();
    });
  });

  resetButton?.addEventListener("click", () => {
    resetMode();
  });
});
