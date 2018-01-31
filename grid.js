createGrid(16); // Creates a blank 16x16 grid.

// Creates a blank grid
function createGrid(cell_size) {
    let container = document.getElementById("container");

    for(let i = 0; i < cell_size; i++) {
        let newRow = document.createElement("div");
        
        for(let j = 0; j < cell_size; j++) {
            let newCol = document.createElement("div");
            newCol.classList.add("col");

            let cell = document.createElement("div");
            cell.classList.add("cell");

            /* debugging
            cell.innerHTML = j;
            newCol.innerHTML = i;
            */

            addHoverEffect(cell);

            newRow.appendChild(newCol);
            newCol.appendChild(cell);
        }

        
        newRow.classList.add("row");
        container.appendChild(newRow);
    }

    container.appendChild(createResetButton());
}

// Adds hover effect event listener for each cell.
function addHoverEffect(cell) {
    cell.addEventListener("mouseover", function() {
        cell.classList.add("active");
    })
}

// Creates a reset button
function createResetButton() {
    let resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    resetButton.innerHTML = "Reset grid";

    resetClickEvent(resetButton);

    return resetButton;
}

// Handles the click event for the reset button
function resetClickEvent(resetButton) {
    resetButton.addEventListener("click", function() {
        document.querySelectorAll(".active").forEach(function(element) {
            element.classList.remove("active");
        });
    });
}