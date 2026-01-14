const cursors = [
  { normal: "cursor-1.svg", pressed: "cursor-1-pressed.svg" },
  { normal: "cursor-2.svg", pressed: "cursor-2-pressed.svg" },
  { normal: "cursor-3.svg", pressed: "cursor-3-pressed.svg" },
  { normal: "cursor-4.svg", pressed: "cursor-4-pressed.svg" },
  { normal: "cursor-5.svg", pressed: "cursor-5-pressed.svg" },
  { normal: "cursor-6.svg", pressed: "cursor-6-pressed.svg" },
];

let currentCursor = 0;
let isPressed = false;
let isPointer = false;


function applyCursor() {
  const file = isPressed
    ? cursors[currentCursor].pressed
    : cursors[currentCursor].normal;

  document.documentElement.style.setProperty(
    "--cursor",
    `url("/assets/cursor/${file}") 0 0, auto`
  );
}

// INITIAL APPLY (important)
applyCursor();

// pressed
window.addEventListener("pointerdown", () => {
  isPressed = true;
  applyCursor();
});

// released
window.addEventListener("pointerup", () => {
  isPressed = false;
  applyCursor();
});

// change cursor on click
window.addEventListener("click", () => {
  currentCursor = (currentCursor + 1) % cursors.length;
  applyCursor();
});