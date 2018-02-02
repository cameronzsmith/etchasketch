createGrid(16); // Creates a blank 16x16 grid.
_generateClickHandler(); // Add generate button click event listener.
_clearClickHandler();
_rainbowClickHandler();

let rainbowActivated = false;

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
            cell.style = `background: rgb(${generateRGB()}, ${generateRGB()}, ${generateRGB()}`; // Generates a random color for the cells
        } else {
            cell.style.background = "#fff";
            cell.classList.add("active");
        }
    })
}

// Generates a random number between between 0 and 254.
function generateRGB() {
    return Math.floor(Math.random() * 255);
}

// Destroys the old grid and creates a new one based on user input.
function _generateClickHandler() {
    let resetButton = document.querySelector(".reset");

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
            element.style.background = "#393E41";
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