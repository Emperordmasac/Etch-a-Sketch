const defaultColor = '#333333';
const defaultMode  = "color";
const defaultSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;
let eraseColor = "#fefefe"

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
    currentColor = newColor;
}

//2 function to set mode
function setMode(newMode)  {
    changeMode(newMode)
    currentMode = newMode;
}

//3 function to set grid box size
function setSize(newSize) {
    currentSize = newSize;
}

//4 function to update size value in the html
function updateSizeValue(size) {
    sizeValue.innerHTML = `${size} * ${size}`
}

//5 function to change the size of the grid box
function changeSize(newSize) {
    setSize(newSize);
    updateSizeValue(newSize);

    //then reload the grid
    reloadGrid()
}

//6 function to clear the grid 
function clearGrid() {
    Grid.innerHTML = ""
}

//7 function to reload the grid system
function reloadGrid() {
    clearGrid();
    setupGridSystem(currentSize)
}

//Event functions
colorPallet.onchange = (e) => setColor(e.target.value);
colorMode.onclick = () => setMode('color');
randomBtn.onclick = () => setMode("random");
eraseBtn.onclick = () => setMode('erase');
clearBtn.onclick = () => reloadGrid();
sizePicker.onmouseout = (e) => updateSizeValue(e.target.value);
sizePicker.onchange = (e) => changeSize(e.target.value)


//on mouseDown to add color to the grid
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false)


//MAIN FUNCTIONS
//function to setup the grid system
function setupGridSystem(size) {
    //
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        Grid.appendChild(gridElement)
    }

}

//function to changeColor 
function changeColor(e) {
    console.log(currentColor,currentMode,currentSize)

    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'random') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

//function to change the mode
function changeMode(newMode) {
    if (currentMode === 'random') {
        randomBtn.classList.remove('active')
    } else if (currentMode === 'color') {
        colorMode.classList.remove("active")
    } else if (currentMode === 'erase') {
        eraseBtn.classList.remove('active')
    }


    if (newMode === 'random') {
        randomBtn.classList.add('active')
    } else if (newMode === 'color') {
        colorMode.classList.add('active')
    } else if (newMode === 'erase') {   
        eraseBtn.classList.add('active')
    }


 
}

//onMount 
window.onload = () => {
    setupGridSystem(defaultSize);
    changeMode(defaultMode)
}