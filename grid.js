createGrid(16); // Creates a blank 16x16 grid.

_clearClicked();
_rainbowClicked();
_drawClicked(); // Add generate button click event listener.

let drawActivated = true;
let rainbowActivated = false;

let cellColor = 0;

const gridBGColor = document.querySelector(".gridContainer").style.background;

let size = document.querySelector(".size");

size.addEventListener("change", function() {
    resetGrid();
})

// Creates a blank grid
function createGrid(cell_size) {

    let grid = document.querySelector(".grid");
    let cell;

    for(let rows = 0; rows < cell_size; rows++) {

        for(let cols = 0; cols < cell_size; cols++) {
            // Create new cell div and append the .cell class to the element.
            cell = document.createElement("div");
            cell.classList.add("cell");

            // Sets cells to black on mouse over.
            hover(cell);

            // Add the cell to our grid.
            grid.appendChild(cell);
        }

    }

    // Add a column to the grid-template-columns for every cell we have.
    grid.style.setProperty('grid-template-columns', `repeat(${cell_size}, 1fr)`);
}

// Adds hover effect event listener for each cell.
function hover(cell) {

    cell.addEventListener("mouseover", function() {
        if(rainbowActivated) {
            cell.classList.remove("active");
            cell.style = `background: ${generateColor()}`;
        } else if(drawActivated) {
            cell.classList.remove("active");
            cell.style.background = "#000";
            cellColor += 0.001;
            cell.style.opacity = cellColor;
        } else {
            cell.classList.remove("active");
            cell.style = gridBGColor;
        }
    })
}
// Generates a random color from the rainbow
function generateColor() {
    let colors = {
        0 : "red",
        1 : "orange",
        2 : "yellow",
        3 : "green",
        4 : "blue",
        5 : "indigo",
        6 : "violet"
    };

    // generate random number between 1 and 7
    return colors[Math.floor(Math.random() * 7)];
}

// Destroys the old grid and creates a new one based on user input.
function _drawClicked() {
    let drawButton = document.querySelector(".draw");
    let drawButtonBG = drawButton.style.background;

    drawButton.addEventListener("click", function() {

        drawActivated = !drawActivated;

        if(rainbowActivated == true) {
            rainbowActivated = false;
            document.querySelector(".rainbow").classList.remove("rainbowActive");
        }
        
        if(drawActivated) {
            drawButton.classList.add("drawActive");
        } else {
            drawButton.classList.remove("drawActive");
            drawButton.style.background = drawButtonBG;
        }
    })
}

// Clears the grid of all active/rainbow elements.
function _clearClicked() {

    let clearButton = document.querySelector(".clear");

    clearButton.addEventListener("click", function() {
        resetGrid();
    });
}

// Checks if rainbow mode is activated, and if it is, stylize the background.
function _rainbowClicked() {
    let rainbowButton = document.querySelector(".rainbow");
    let rainbowOldBG = rainbowButton.style.background;


    rainbowButton.addEventListener("click", function() {
        rainbowActivated = !rainbowActivated;

        if(drawActivated) {
            drawActivated = false;
            document.querySelector(".draw").classList.remove("drawActive");
        }

        if(rainbowActivated) {
            rainbowButton.classList.add("rainbowActive");

        } else {
            rainbowButton.classList.remove("rainbowActive");
            rainbowButton.style.background = rainbowOldBG;
        }
    })
}

// Resets the grid to its default state
function resetGrid() {
    cellColor = 0;

    deleteGrid();
    createGrid(parseInt(size.value), parseInt(size.value));

}

// Deletes all of the elements contained within the grid.
function deleteGrid() {
    document.querySelectorAll(".cell").forEach(function(element) {
        element.remove();
    });
}