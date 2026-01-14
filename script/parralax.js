const items = document.querySelectorAll('.parralax-item');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// how smooth & how far
const ease = 0.08;
const strength = 30;

window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

function animate() {
  // ease toward target
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;

  items.forEach(item => {
    const depth = parseFloat(item.dataset.depth) || 0.5;
    const img = item.querySelector('.parralax-element');

    img.style.setProperty('--px', `${currentX * depth * strength}px`);
    img.style.setProperty('--py', `${currentY * depth * strength}px`);
  });

  requestAnimationFrame(animate);
}

animate();
