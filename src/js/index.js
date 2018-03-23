var changeButton = document.getElementById("change-button");
var imageElement = document.querySelector(".fruit");
var detailButton = document.getElementById("detail");
var current = "apple"

changeButton.addEventListener("click", function() {
  current = current == "apple" ? "banana" : "apple"
  imageElement.style.backgroundImage = "url(/image/"+ current +".jpg)"
});

detailButton.addEventListener("click", function() {
  location.href = current + ".html";
});