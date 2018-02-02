createGrid(16); // Creates a blank 16x16 grid.
_resetButtonClicked();

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
        cell.classList.add("active");
    })
}

function _resetButtonClicked() {
    let resetButton = document.querySelector(".resetButton");

    resetButton.addEventListener("click", function() {
        let cellSize = prompt("Cell size", 16);    
        deleteGrid();
        createGrid(cellSize);
    })
}

// Deletes all of the elements contained within the grid.
function deleteGrid() {
    document.querySelectorAll(".cell").forEach(function(element) {
        element.remove();
    });
}