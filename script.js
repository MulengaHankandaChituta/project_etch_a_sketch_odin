document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const button = document.getElementById("new-grid-button");

  button.addEventListener("click", function () {
    let squaresPerSide = prompt(
      "Enter the number of squares per side (max 100):"
    );
    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }

    // Clear existing grid
    container.innerHTML = "";

    // Calculate size of each square
    const gridSize = 320; // Total size of the grid
    const squareSize = gridSize / squaresPerSide;

    // Generate new grid
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }

    // Add event listener to new squares
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", function () {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = randomColor;
      });
    });
  });
});
