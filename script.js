// Tool Carousel Animation
const tools = document.querySelectorAll('.tool');
let currentTool = 0;

function showNextTool() {
  tools.forEach(t => {
    t.style.opacity = 0;
    t.style.transform = 'translate(-50%, -50%) scale(0)';
  });

  const tool = tools[currentTool];
  tool.style.opacity = 1;
  tool.style.transform = 'translate(150%, 100%) scale(1)'; // pops then falls right

  currentTool = (currentTool + 1) % tools.length;
}

showNextTool();
setInterval(showNextTool, 2000);

// Dark Mode Auto + Toggle
const toggle = document.getElementById('darkModeToggle');

function applyDarkMode(prefersDark) {
  if(prefersDark) document.body.classList.add('dark-mode');
  else document.body.classList.remove('dark-mode');
}

// Auto based on system
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
applyDarkMode(mediaQuery.matches);
mediaQuery.addEventListener('change', e => applyDarkMode(e.matches));

// Manual toggle
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
