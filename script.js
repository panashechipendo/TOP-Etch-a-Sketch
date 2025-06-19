let gridSize = 16;

let body = document.querySelector("body");
let container = document.querySelector(".container");
let queryBtn = document.createElement("button");
let resetBtn = document.createElement("button")
let header = document.createElement("h1");

header.textContent = "Etch-A-Sketch";
resetBtn.classList.add("reset");
queryBtn.textContent = "Click this button to choose the grid size(Max: 100)";
resetBtn.textContent = "Reset"

body.prepend(resetBtn)
body.prepend(queryBtn);
body.prepend(header);


const pastelHexColors = [
  "#FFD1DC", // Pastel Pink
  "#AEC6CF", // Pastel Blue
  "#B0E0A8", // Pastel Green
  "#FDFD96", // Pastel Yellow
  "#E6E6FA", // Lavender (Soft Purple)
  "#FFB3BA", // Light Peach
  "#C8E6C9", // Mint Green
  "#F5E0E0", // Dusty Rose
  "#FFDAC1", // Light Orange/Coral
  "#D9D2E9", // Periwinkle
  "#F0F8FF", // Alice Blue (very light)
  "#AFEEEE", // Pale Turquoise
  "#FFFACD", // Lemon Chiffon
  "#D8BFD8", // Thistle (soft purple)
  "#ADD8E6", // Light Blue
  "#FAFAD2", // Light Goldenrod Yellow
  "#F4C2C2", // Cotton Candy Pink
  "#BFEFFF", // Sky Blue Light
  "#CCEECC", // Light Sage Green
  "#FFF8DC", // Cornsilk
  "#F5F5DC", // Beige
  "#F0E68C", // Khaki (lighter, more pastel version)
  "#E6F2F5", // Light Cyan
  "#E0BBE4", // Muted Violet
  "#95D5B2", // Soft Teal
];

let boxSize = `calc(100% / ${gridSize})`;

const BOXES = gridSize * gridSize;


const brightnessStep = 0.1
const minBrightness = 0.2

queryBtn.addEventListener("click", () => {
  let askUser = prompt("Grid Size? ");
  gridSize = Number(askUser);

  if (gridSize > 100) {
    alert("That number is too large!");
    return;
  }
});

for (let i = 0; i < BOXES; i++) {
  let box = document.createElement("div");
  box.classList.add("sketch-box");
  box.style.flex = `0 0 ${boxSize}`;
  box.style.height = boxSize;
  container.appendChild(box);
  let currentBrightness = 1;
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor =
      pastelHexColors[Math.floor(Math.random() * pastelHexColors.length)];
    box.style.filter = `brightness(${currentBrightness})`
    currentBrightness = Math.max(minBrightness, currentBrightness - brightnessStep)
  });
}

resetBtn.addEventListener('click', ()=>{
    let btn = document.querySelectorAll('.sketch-box')
    let btnArray = Array.from(btn)

    btnArray.forEach(btn => {
        btn.style.backgroundColor = '#FFDAC1'
        btn.style.filter = `brightness(1)`
    })
})
