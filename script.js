// JavaScript to change the background color when the button is clicked
document.getElementById("colorButton").addEventListener("click", function() {
  // Generate a random color in hex format
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Change the background color of the body
  document.body.style.backgroundColor = randomColor;
});
