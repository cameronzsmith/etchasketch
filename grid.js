createGrid(16); // Creates a blank 16x16 grid.

// Creates a blank grid
function createGrid(cell_size) {
    let container = document.querySelector(".container");

    // Adjust the grid based on the amount of cells provided to avoid having some cells larger than others.
    if(cell_size < 21) {
        container.style = "grid-template-columns: repeat(auto-fit, 30px);";
    } else if(cell_size >= 21 && cell_size <= 28) {
        container.style = "grid-template-columns: repeat(auto-fill, auto-fit);";
    } else {
        container.style = "grid-template-columns: repeat(auto-fit, auto-fit);";
    }

    // Iterates through all the rows
    for(let i = 0; i < cell_size; i++) {
        let newRow = document.createElement("div");
        
        // Iterates through all the columns
        for(let j = 0; j < cell_size; j++) {
            let newCol = document.createElement("div");
            newCol.classList.add("col");

            let cell = document.createElement("div");
            cell.classList.add("cell");

            addHoverEffect(cell); // Appends the .active class to cells on hover.

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
        let input = prompt("What size should the grid be?", 16);

        deleteGrid();
        createGrid(input);

        document.querySelectorAll(".active").forEach(function(element) {
            element.classList.remove("active");
        });
    });
}

// Deletes all of the elements contained within the grid.
function deleteGrid() {
    document.querySelectorAll(".row").forEach(function(element) {
        element.remove();
    });
    
    document.querySelectorAll(".col").forEach(function(element) {
        element.remove();
    });
    
    document.querySelectorAll(".cell").forEach(function(element) {
        element.remove();
    });
    
    document.querySelector(".resetButton").remove();
}