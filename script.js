const grid = document.querySelector('.container');

function resizeGrid(grid, sizeSelection){
    const arr = [4,6,8,12,16];
    const arr2 = ['fourGrid','sixGrid','eightGrid','twelveGrid','sixteenGrid'];

    const elementStartCount = grid.childElementCount;
    const increase = elementStartCount < arr[sizeSelection]**2 ? true : false;

    for(let i = 0; i<Math.abs(elementStartCount - arr[sizeSelection]**2); i++){
        if(increase){
            let div = document.createElement('div');
            div.classList.add('item');
            grid.appendChild(div);
        } else {
            grid.removeChild(grid.lastChild);
        }
    } 
    grid.classList.remove(grid.classList[1]);
    grid.classList.add(arr2[sizeSelection]);
}