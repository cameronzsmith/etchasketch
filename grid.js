createGrid(16); // Creates a blank 16x16 grid.
_generateClickHandler(); // Add generate button click event listener.
_clearClickHandler();
_rainbowClickHandler();

let rainbowActivated = false;
const gridBGColor = document.querySelector(".gridContainer").style.background;

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
            setActive(cell);

            // Add the cell to our grid.
            grid.appendChild(cell);
        }

    }

    // Add a column to the grid-template-columns for every cell we have.
    grid.style.setProperty('grid-template-columns', `repeat(${cell_size}, 1fr)`);
}

// Adds hover effect event listener for each cell.
function setActive(cell) {
    cell.addEventListener("mouseover", function() {
        if(rainbowActivated) {
            cell.classList.remove("active");
            cell.style = `background: ${generateColor()}`;
        } else {
            cell.style.background = "#fff";
            cell.classList.add("active");
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
function _generateClickHandler() {
    let resetButton = document.querySelector(".generate");

    resetButton.addEventListener("click", function() {
        let cellSize = prompt("How many rows by columns?", 16);    
        deleteGrid();
        createGrid(cellSize);
    })
}

// Clears the grid of all active/rainbow elements.
function _clearClickHandler() {
    let clearButton = document.querySelector(".clear");

    clearButton.addEventListener("click", function() {

        document.querySelectorAll(".cell").forEach(function(element) {
            element.classList.remove("active");
            element.style.background = gridBGColor;
        });

    });
}

// Checks if rainbow mode is activated, and if it is, stylize the background.
function _rainbowClickHandler() {
    let rainbowButton = document.querySelector(".rainbow");
    let rainbowOldBG = rainbowButton.style.background;

    rainbowButton.addEventListener("click", function() {
        rainbowActivated = !rainbowActivated;

        if(rainbowActivated) {
            rainbowButton.classList.add("rainbowActive");

        } else {
            rainbowButton.classList.remove("rainbowActive");
            rainbowButton.style.background = rainbowOldBG;
        }
    })
}

// Deletes all of the elements contained within the grid.
function deleteGrid() {
    document.querySelectorAll(".cell").forEach(function(element) {
        element.remove();
    });
}