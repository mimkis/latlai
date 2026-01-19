// colors
const palette = [
  '#ffc9a8', '#fcd878', '#f09a51', '#ffd2ed', '#d83b46', 
  '#5d1600', '#421e1d', '#ac91de', '#052630', '#005884', 
  '#b8e0f8', '#79b74a', '#486f43', '#141C10'
];


let textColorIndex = 0;
let bgColorIndex = 5; // Start background at a different color

// text color change button
const textBtn = document.getElementById('text-cycle-btn');
textBtn.addEventListener('click', () => {
    textColorIndex = (textColorIndex + 1) % palette.length; // Moves to next color
    const nextColor = palette[textColorIndex];
    document.documentElement.style.setProperty('--current-accent', nextColor);
});

// background color change button
const bgBtn = document.getElementById('bg-cycle-btn');
bgBtn.addEventListener('click', () => {
    bgColorIndex = (bgColorIndex + 1) % palette.length;
    const nextColor = palette[bgColorIndex];
    document.documentElement.style.setProperty('--current-background', nextColor);
});

// 5. Randomizer (Still randomizes both)
const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', () => {
    const randomText = palette[Math.floor(Math.random() * palette.length)];
    const randomBg = palette[Math.floor(Math.random() * palette.length)];
    
    document.documentElement.style.setProperty('--current-accent', randomText);
    document.documentElement.style.setProperty('--current-background', randomBg);
});

randomBtn.addEventListener('click', () => {
    let randomText = palette[Math.floor(Math.random() * palette.length)];
    let randomBg = palette[Math.floor(Math.random() * palette.length)];

    // If they match, just pick a new background color until they don't
    while (randomText === randomBg) {
        randomBg = palette[Math.floor(Math.random() * palette.length)];
    }
    
    document.documentElement.style.setProperty('--current-accent', randomText);
    document.documentElement.style.setProperty('--current-background', randomBg);
});