document.addEventListener("DOMContentLoaded", function () {
  // Get the container element
  const container = document.getElementById("container");

  // Create a 16x16 grid
  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div"); // Create a new div element
    square.classList.add("square"); // Add 'square' class to the div
    container.appendChild(square); // Append the div to the container
  }

  // Get all the square elements with the 'square' class
  const squares = document.querySelectorAll(".square");

  // Change the background color of each square
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      // Generate a random color
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      square.style.backgroundColor = randomColor;
    });
  });
});
