
//toggle bttuson
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.icontoggle');
  const toggledContent = document.querySelectorAll('.icons');
  const poemSection = document.querySelector('.poem-section');

  // Show icons by default on page load
  toggledContent.forEach(icon => {
    icon.classList.add('is-visible');
  });

  toggleBtn.addEventListener('click', () => {
    toggledContent.forEach(icon => {
      icon.classList.toggle('is-visible');
    });

    poemSection.classList.toggle('is-visible');

    // rotate state
    toggleBtn.classList.toggle('is-active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const poemButtons = document.querySelectorAll('.poem-btn');

  poemButtons.forEach(btn => {
    const poemNumber = btn.nextElementSibling;

    btn.addEventListener('mouseenter', () => {
      poemNumber.classList.add('is-visible');
    });

    btn.addEventListener('mouseleave', () => {
      poemNumber.classList.remove('is-visible');
    });
  });
});
