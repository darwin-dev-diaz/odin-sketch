const grid = document.querySelector(".container");

const black = ['black'];
const warmColors = ['#FFBB5C','#FF9B50','#E25E3E','#C63D2F'];
const coldColors = ['#DCF2F1','#7FC7D9','#365486','#0F1035'];

let selectedPallet = warmColors;
addHoverability(selectedPallet);

function resizeGrid(grid, sizeSelection) {
  const arr = [4, 6, 8, 12, 16, 24];
  const arr2 = [
    "fourGrid",
    "sixGrid",
    "eightGrid",
    "twelveGrid",
    "sixteenGrid",
    "twentyFourGrid",
  ];

  const elementStartCount = grid.childElementCount;
  const increase = elementStartCount < arr[sizeSelection] ** 2 ? true : false;

  for (
    let i = 0;
    i < Math.abs(elementStartCount - arr[sizeSelection] ** 2);
    i++
  ) {
    if (increase) {
      let div = document.createElement("div");
      div.classList.add("item");
      grid.appendChild(div);
    } else {
      grid.removeChild(grid.lastChild);
    }
  }
  grid.classList.remove(grid.classList[1]);
  grid.classList.add(arr2[sizeSelection]);
  clearBoard();
  addHoverability(selectedPallet);
}

const resizeButtons = document.querySelectorAll(".resize-button");
resizeButtons.forEach((currentValue, i) => {
  currentValue.addEventListener("click", () => {
    resizeGrid(grid, i);
  });
});

function addHoverability(colorArr) {
  let index = 0;

  const gridItems = document.querySelectorAll(".item");
  gridItems.forEach((currentValue) => {
    currentValue.addEventListener("mouseover", (e) => {
      colorTo = colorArr[index];
      currentValue.style.backgroundColor = colorTo;

      index = (index + 1) % colorArr.length;
      console.log(index);
      console.log(colorArr[index]);
    });
  });
}
function clearBoard(){
    const gridItems = document.querySelectorAll(".item");
  gridItems.forEach((currentValue) => {
    currentValue.style.backgroundColor = '';
  });
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener("click", clearBoard);

let colors = [black, warmColors, coldColors]
const colorButtons = document.querySelectorAll(".color-button");
colorButtons.forEach((currentValue, i) => {
  currentValue.addEventListener("click", () => {
    selectedPallet = colors[i]
    addHoverability(selectedPallet);
  });
});