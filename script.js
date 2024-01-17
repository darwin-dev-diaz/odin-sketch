addHoverability();
const grid = document.querySelector(".container");

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
  addHoverability();
  clearBoard();
}

const resizeButtons = document.querySelectorAll(".resize-button");
resizeButtons.forEach((currentValue, i) => {
  currentValue.addEventListener("click", () => {
    resizeGrid(grid, i);
  });
});

function addHoverability() {
    const colorTo = "black";

  const gridItems = document.querySelectorAll(".item");
  gridItems.forEach((currentValue) => {
    currentValue.addEventListener("mouseover", (e) => {
      currentValue.style.backgroundColor = colorTo;
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
