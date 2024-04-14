document.addEventListener("DOMContentLoaded", function() {
  var myDiv = document.getElementById("nav");
  var closeButton = document.getElementById("closeIcon");
  var openButton = document.getElementById("navIcon");

  closeButton.addEventListener("click", function() {
    myDiv.style.display = "none";
  });

  navIcon.addEventListener("click", function() {
    myDiv.style.display = "block";
  });
});

