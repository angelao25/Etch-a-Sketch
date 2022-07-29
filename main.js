const container = document.getElementById("container");
//Adding the button

var divbutton = document.createElement("div");
var mainbutton = document.createElement("button");
divbutton.className = "divbutton"
divbutton.appendChild(mainbutton).className="main-button";
document.body.appendChild(divbutton);

mainbutton.innerHTML = "Click Me";

mainbutton.addEventListener("click", createGrid, false);

function createGrid()
{
  var squares = prompt("Please provide us with the number of squares per side");
  removeCurrentGrid();
  makeRows(squares, squares);
}

function makeRows(rows, cols) {
  if (rows == 0 && cols == 0)
  {
    return;
  }
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", function() {
      cell.classList.add("whenHover");
    });
    cell.addEventListener("mouseout", function() {
      cell.classList.add("whenOut");
    });
    container.appendChild(cell).className = "grid-item";
  };
};

function removeCurrentGrid() {
  container.innerHTML = '';
  //makeRows(0, 0);
}

//var item = document.querySelectorAll(".grid-item");



/*for (let i = 0; i < item.length; i++)
{
    item[i].addEventListener("mouseover", function() {
        item[i].classList.add("whenHover");
    });

    item[i].addEventListener("mouseout", function() {
        item[i].classList.add("whenOut");
    })
}
*/




