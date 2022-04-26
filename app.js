const defaultColor = '#333333';
const defaultMode  = "color";
const defaultSize = 16;

let color = defaultColor;
let mode = defaultMode;
let size = defaultSize;

//DOM MANIPULATION
const colorPallet = document.getElementById("colorPallet");
const colorMode = document.getElementById("colorMode");
const randomBtn = document.getElementById('randomBtn');
const eraseBtn = document.getElementById("eraseBtn");
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById("sizeValue");
const sizePicker = document.getElementById("sizePicker");
const Grid = document.getElementById("grid");

//Helper Functions
//1 function to set color 
function setColor(newColor) {
    color = newColor;
}

//2 function to set mode
function setMode(newMode)  {
    mode = newMode;
}

//3 function to set grid box size
function setSize(newSize) {
    size = newSize;
}

//4 function to update size value in the html
function updateSizeValue() {

}

//5 function to change the size of the grid box
function changeSize(newSize) {
    setSize(newSize);
    updateSizeValue(newSize);

    //then reload the grid

}

//6 function to clear the grid 
function clearGrid() {

}


//MAIN FUNCTIONS
//function to setup the grid system
function setupGridSystem(size) {
    //
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        Grid.appendChild(gridElement)
    }

}

//onMount 
window.onload = () => {
    setupGridSystem(defaultSize);
}