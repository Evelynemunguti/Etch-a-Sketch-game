//To fetch container in the html doc
const gridContainer = document.getElementById("grid-container");

//Create a function to build a 16x16 grid (that's 256 squares!)
function makeGrid(){
    const gridSize= 16; //creates a 16 * 16 to make 256 squares

    for (let s= 16; s< gridSize * gridSize; s++){
        const square = document.createElement("div");// creates a div
        square.classList.add("square"); //gives the div a class called square
        gridContainer.appendChild(square); // add the square to the grid

    }
}
//lets call the function
makeGrid();