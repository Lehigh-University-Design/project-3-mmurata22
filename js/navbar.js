document.addEventListener("DOMContentLoaded", function() {
    var hideButton = document.getElementById("hideButton");
    var leftBox = document.querySelector(".left-box");
  
    hideButton.addEventListener("click", function() {
      leftBox.style.display = "none";
    });
  });