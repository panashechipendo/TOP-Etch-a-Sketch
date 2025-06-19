let gridSize;

let body = document.querySelector("body");
let container = document.querySelector(".container");
let queryBtn = document.createElement("btn");
queryBtn.classList.add("query");
queryBtn.textContent = "Size";
body.prepend(queryBtn);


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
    "#95D5B2"  // Soft Teal
];


queryBtn.addEventListener("click", () => {
  let askUser = prompt("Grid Size? ");
  gridSize = Number(askUser);
  let boxSize = `calc(100% / ${gridSize})`

  const BOXES = gridSize * gridSize;
  console.log(BOXES);
  for (let i = 0; i < BOXES; i++) {
    let box = document.createElement("div");
    box.classList.add("sketch-box");
    box.style.flex = `0 0 ${boxSize}`;
    box.style.height = boxSize; 
    container.appendChild(box);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "blue";
    });
  }
});
