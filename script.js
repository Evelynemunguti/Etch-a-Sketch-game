//To fetch container in the html doc
const gridContainer = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-btn");



let mouseDown = false;

// If mouse is pressed anywhere on the page, set mouseDown = true
document.body.addEventListener("mousedown", function () {
  mouseDown = true;
});

// When mouse is released, set mouseDown = false
document.body.addEventListener("mouseup", function () {
  mouseDown = false;
});

//Create a function to build a 16x16 grid (that's 256 squares!)
function makeGrid(){
    const gridSize= 16; //creates a 16 * 16 to make 256 squares

    for (let s= 16; s< gridSize * gridSize; s++){
        const square = document.createElement("div");// creates a div
        square.classList.add("square"); //gives the div a class called square

         // ⭐ When the mouse goes over a square, change its color
    square.addEventListener("mouseover", function () {
        if (mouseDown) {
            square.style.backgroundColor = "black";
          }
      });
        gridContainer.appendChild(square); // add the square to the grid

        

    }
}
//lets call the function
makeGrid();

clearButton.addEventListener("click", function () {
    const squares = document.querySelectorAll(".square");
  
    squares.forEach(function (square) {
      square.style.backgroundColor = "white";
    });
  });